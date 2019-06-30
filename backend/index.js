var express = require("express")
var app = express()
var bodyParser = require('body-parser')
var mongo = require('mongodb');
var mongoClient = mongo.MongoClient
var url = "mongodb://localhost:27017/";
var {google} = require('googleapis');
var OAuth2 = google.auth.OAuth2;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    //db.yeet = "yee"
    console.log("connected to db");
    this.runApp(db.db("ff"))

    //console.log(this.test1)
}.bind(this));

//database schema: 
//email 
//token 
//survey data
//date created 
//date token submitted
//date last submitted

this.test = 1

function createNewUser(request) {
    return {
        email: request.email,
        token: request.token,
        data: "",
        date_created: "",
        date_token_submitted: "",
        date_last_submitted: "",
    }
}
function authenticateGoogleToken(token, email, success, failure) {
    var oauth2Client = new OAuth2();
    oauth2Client.setCredentials({ access_token: token });
    var oauth2 = google.oauth2({
        auth: oauth2Client,
        version: 'v2'
    });
    oauth2.userinfo.get(
        function (err, res) {
            if (err) {
                console.log(err);
                failure()
            } else {
                console.log(res.data.email);
                success()
            }
        });

    return true
}
this.runApp = function (db) {
    //this.test1 = 2
    // console.log(this.test)
    //authenticates token and stores user email, token, and date in the database
    //params are email, token
    app.post("/api/authenticate_login_token", function (req, postResponse) {

        //console.log(req.body.token)
        authenticateGoogleToken(req.body.token, req.body.email, function(){

            db.collection("users").findOne({ email: req.body.email }, function (err, result) {
                if (err) throw err;
                if (result == null) {
                    console.log("User " + req.body.email + " does not already exist. creating record")
                    var record = createNewUser(req.body)


                    db.collection("users").insertOne(record, function (err, res) {
                        if (err) throw err;
                        console.log("record created");
                        postResponse.send()
                    });
                } else {
                    console.log("User " + req.body.email + " exists. updating record")
                    db.collection("users").updateOne({ email: req.body.email }, { $set: { token: req.body.token } }, function (err, res) {
                        if (err) throw err;
                        console.log("record updated");
                        postResponse.send()
                    });
                }

            })
        }, function (){
            postResponse.status(401).send()
        })

    })
    //checks that token is authenticated, then stores 
    app.post("/api/submit_survey", function (req, res) {

    })
    //checks if have submitted before and if so, returns the results
    app.post("/api/check_status", function (req, res) {

    })

    app.get("/*", function (req, res) {
        res.send("this is where the react app will get returned")
    })

    app.listen(4000, function () {
        console.log("listening")
    })
}