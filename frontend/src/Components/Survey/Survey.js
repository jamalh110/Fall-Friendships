import React from "react";
import Navbar from "../NavigationBar/NavigationBar";
import { GoogleLogin } from "react-google-login";
import App from "../../App.js";
import State from "../../State.js";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "survey-react/survey.react";
import classes from "./Survey.module.css";
import Surveyjson from "./Surveyjson.js"

class SurveyClass extends React.Component {
  //save their responses if they navigate to any other page
  componentWillUnmount() {
    this.props.setState({
      state: Object.assign(this.props.state.state, {
        response: this.survey.data
      })
    })
  }

  //code to be run when survey is submitted 
  onCompleteFollowup = function (result) {
    fetch(App.backendURL + "submit_survey", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.props.state.state.email,
        token: this.props.state.state.accessToken,
        data: result.data
      })
    })
      .then(function (resp) {
        if (resp.ok) {
          return resp.text();
        } else {
          throw "shit";
        }
      })
      .then(
        function (resp) {
          this.survey.completedHtml = "<div style = \"text-align:center\">Submitted!<br>You can reload the page or log in again later to change you answers<br><br></div>"
          //sets the dont reload flag to true. this is so render doesn't update on the state change and try to make a new survey
          this.dontReload = true
          this.props.setState({
            state: Object.assign(this.props.state.state, {
              hasTaken: true,
              response: result.data
            })
          });
        }.bind(this)).catch(function (err) {
          console.log(err)
          this.survey.completedHtml = "<div style = \"text-align:center\">Oops! Something went wrong :/<br><br></div>"
        }.bind(this))
  };

  render() {
    let json = Surveyjson.json
    //if coming off a submit, don't reload the survey 
    if (this.dontReload != true) {
      this.survey = new Survey.Model(json);
      var survey = this.survey
      //auto fill in name if first time taking
      if (this.props.state.state.hasTaken != true) {
        survey.data = {
          question2: this.props.state.state.firstName,
          question3: this.props.state.state.lastName
        };
      }
      //auto fill previous submission if have taken before
      else {
        survey.data = this.props.state.state.response
      }
    }

    var survey = this.survey
    Survey.StylesManager.applyTheme("bootstrap");

    var myCss = {
      footer: classes.footer,
      navigation: {
        complete: "btn btn-success " + classes.padding
      },
      radiogroup: "button btn-lg "
    };

    //if they are accessing without logging in
    if (this.props.state.state.loggedIn != true) {
      return (
        <div>
          <Navbar
            history={this.props.history}
            state={this.props.state.state}
            googleCallBack={App.googleResponseSuccess.bind(this)}
          />
          <h1>If this was an accident, please sign in. If you are trying to hack us, don't try, because you won't be able to.</h1>
        </div>
      );
    }
    //return survey
    return (
      <div >
        <Navbar
          history={this.props.history}
          state={this.props.state.state}
          googleCallBack={App.googleResponseSuccess.bind(this)}
        />
        <div style={{ overflow: "scroll", height: "auto", marginLeft: "15px", marginRight: "15px", marginBottom: "200px", backgroundColor: "rgba(255, 255, 255, 0.85)" }}>
          <p style={{ position: "absolute", zIndex: "-1", fontSize: "40px", opacity: "0" }}>If the survey hasn't loaded, simply reload the page</p>
          <Survey.Survey
            model={survey}
            onComplete={this.onCompleteFollowup.bind(this)}
            css={myCss}
          />

        </div>
      </div>
    );
  }
}

export default SurveyClass;
