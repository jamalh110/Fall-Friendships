import React from "react";
import Navbar from "../NavigationBar/NavigationBar";
import { GoogleLogin } from 'react-google-login';
import App from "../../App.js"
import State from "../../State.js"
import classes from "./Contact.module.css";


class Contact extends React.Component {

  render() {
    return (
      <div>
        <Navbar 
            history={this.props.history} 
            state={this.props.state.state} 
            googleCallBack={App.googleResponseSuccess.bind(this)} 
          />
        <div className={classes.mainContact}>
          <h1 className = {classes.aboutHeader}>Contact</h1>
          <br></br>
          <br></br>
          <div className = {classes.aboutText}>
          <p>
          Want to share your thoughts, ask a question, or just say hi? We’d love to hear from you!
</p>
<a href = "mailto:cornellbusinessanalytics@gmail.com">cornellbusinessanalytics@gmail.com</a>
<br></br>
<br></br>

<p>Check out our website!</p> 
<a href = "http://www.cornellbusinessanalytics.com">cornellbusinessanalytics.com</a>
</div>

      </div>
      </div>
    );
  }
}

export default Contact;
