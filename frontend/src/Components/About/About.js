import React from "react";
import Navbar from "../NavigationBar/NavigationBar";
import { GoogleLogin } from "react-google-login";
import App from "../../App.js";
import State from "../../State.js";
import classes from "./About.module.css";

class About extends React.Component {
  
  render() {
    return (
      <div>
      <Navbar
          history={this.props.history}
          state={this.props.state.state}
          googleCallBack={App.googleResponseSuccess.bind(this)}
        />
      <div className={classes.mainAbout}>
        
        <h1>About</h1>
      </div>
      </div>
    );
  }
}

export default About;
