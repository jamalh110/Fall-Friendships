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
  componentWillMount() {
    if (this.props.location.state == null) {
      this.setState({
        state: new State()
      });
    } else {
      this.setState({
        state: this.props.location.state.state
      });
    }
  }

  onCompleteFollowup = result => {
    //alert("The results are:" + JSON.stringify(result.data));
  };

  render() {
    let json = {
      title:"Friendship Survey",
      completedHtml: "Submitting...<br>Do not leave this page",
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

    let survey = new Survey.Model(json);
    survey.data = {
      question2: this.state.state.firstName,
      question3: this.state.state.lastName
    };

    Survey.StylesManager.applyTheme("bootstrap");

    var myCss = {
      footer: classes.footer,
      navigation: {
        complete: "btn btn-success " + classes.padding
      },
      radiogroup: "button btn-lg "
    };

    if (this.state.state.loggedIn != true) {
      return (
        <div>
          <Navbar
            history={this.props.history}
            state={this.state.state}
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
          state={this.state.state}
          googleCallBack={App.googleResponseSuccess.bind(this)}
        />
        {/*<h1 className={classes.title}>Friendship Survey</h1>*/}
        <div className={classes.surveyDiv}>
          <Survey.Survey
            model={survey}
            onComplete={this.onCompleteFollowup}
            css = {myCss}
          />
        </div>
      </div>
    );
  }
}

export default SurveyClass;
