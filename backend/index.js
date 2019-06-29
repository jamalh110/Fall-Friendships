var express = require("express")
var app = express()
var bodyParser = require('body-parser')
//app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.urlencoded());

//app.use(express.json());


//database schema: 
//email 
//token 
//survey data
//date first submitted
//date token submitted
//date last submitted


//authenticates token and stores user email, token, and date in the database
app.post("/api/authenticate_login_token", function (req, res){
    console.log(req.body.token)
    res.send("yay")
})
//checks that token is authenticated, then stores 
app.post("/api/submit_survey", function (req, res){
    
})
//checks if have submitted before and if so, returns the results
app.post("/api/check_status", function (req, res){

})

app.get("/*", function (req, res) {
    res.send("this is where the react app will get returned")
})

app.listen(4000, function(){
    console.log("listening")
})