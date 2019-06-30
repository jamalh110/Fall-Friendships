import React from "react";
import Navbar from "../NavigationBar/NavigationBar";
import { GoogleLogin } from "react-google-login";
import App from "../../App.js";
import State from "../../State.js";
import classes from "./About.module.css";

class About extends React.Component {
  componentWillMount() {
    //console.log(this.props)
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

  render() {
    return (
      <div className={classes.mainAbout}>
        <Navbar
          history={this.props.history}
          state={this.state.state}
          googleCallBack={App.googleResponseSuccess.bind(this)}
        />
        <h1>About</h1>
      </div>
    );
  }
}

export default About;
