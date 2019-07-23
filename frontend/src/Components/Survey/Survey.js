import React from "react";
import Navbar from "../NavigationBar/NavigationBar";
import { GoogleLogin } from "react-google-login";
import App from "../../App.js";
import State from "../../State.js";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "survey-react/survey.react";
import classes from "./Survey.module.css";


class SurveyClass extends React.Component {
  componentDidMount(){
    console.log("routed to survey")
  }
  componentWillUnmount(){
    this.props.setState({
      state: Object.assign(this.props.state.state, {

        response: this.survey.data

      })
    })
  }

  onCompleteFollowup = function (result) {
    //this.survey.completedHtml = "<div style = \"text-align:center\">Submitted!<br>You can reload the page or log in again later to change you answers<br><br></div>"
    console.log(JSON.stringify(result.data))
    //alert("The results are:" + JSON.stringify(result.data));
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
          this.dontReload = true
          //this.setState({})
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
    let json = {
      title: "Friendship Survey",
      completedHtml: "<div style = \"text-align:center\">Submitting...<br>Do not leave this page<br><br><div>",
      pages: [
        {
          name: "page1",
          elements: [
            { type: "text", name: "question2", title: "First Name" },
            { type: "text", name: "question3", title: "Last Name" },
            {
              type: "radiogroup",
              name: "question1",
              title: "Class",
              choices: [
                { value: "item1", text: "2023" },
                { value: "item2", text: "2022" },
                { value: "item3", text: "2021" },
                { value: "item4", text: "2020" },
                { value: "item5", text: "Grad" },
                { value: "item6", text: "Staff/Faculty" }
              ]
            },
            {
              type: "radiogroup",
              name: "question4",
              title: "Gender",
              hasOther: true,
              choices: [
                { value: "item1", text: "Male" },
                { value: "item2", text: "Female" }
              ]
            },
            {
              type: "dropdown",
              name: "question5",
              title: "Major",
              hasOther: true,
              choices: [
                { value: "item1", text: "STEM" },
                { value: "item2", text: "Humanities" },
                { value: "item3", text: "Archies" },
                { value: "item4", text: "Dysons" },
                { value: "item5", text: "Hotelies" },
                { value: "item6", text: "NA" }
              ]
            },
            {
              type: "radiogroup",
              name: "question6",
              choices: ["item1", "item2", "item3", "item4"]
            },
            {
              type: "radiogroup",
              name: "question7",
              choices: ["item1", "item2", "item3", "item4"]
            },
            {
              type: "radiogroup",
              name: "question8",
              choices: ["item1", "item2", "item3", "item4"]
            },
            {
              type: "radiogroup",
              name: "question9",
              choices: ["item1", "item2", "item3", "item4"]
            },
            {
              type: "radiogroup",
              name: "question10",
              choices: ["item1", "item2", "item3", "item4"]
            }
          ]
        }
      ]
    };

    if (this.dontReload != true) {
      this.survey = new Survey.Model(json);
      var survey = this.survey
      if (this.props.state.state.hasTaken != true) {
        survey.data = {
          question2: this.props.state.state.firstName,
          question3: this.props.state.state.lastName
        };
      }
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

    if (this.props.state.state.loggedIn != true) {
      return (
        <div>
          <Navbar
            history={this.props.history}
            state={this.props.state.state}
            googleCallBack={App.googleResponseSuccess.bind(this)}
          />
          <h1>lmao y u trying to take survey without log in?</h1>
        </div>
      );
    }
    return (
      <div className={classes.surveyPage}>
        <Navbar
          history={this.props.history}
          state={this.props.state.state}
          googleCallBack={App.googleResponseSuccess.bind(this)}
        />
        {/*<h1 className={classes.title}>Friendship Survey</h1>*/}
        {/*<div className={classes.surveyDiv}>*/}
        <div style = {{overflow:"scroll",height:"auto",marginLeft:"15px", marginRight:"15px", marginBottom:"200px",backgroundColor:"rgba(255, 255, 255, 0.85)"}}>
          <p style = {{position:"absolute",zIndex:"-1", fontSize:"40px",opacity:"0"}}>If the survey hasn't loaded, simply reload the page</p>
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
