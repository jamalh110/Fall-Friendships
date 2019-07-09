import React from "react";
import Navbar from "../NavigationBar/NavigationBar";
import { GoogleLogin } from 'react-google-login';
import App from "../../App.js"
import State from "../../State.js"

class Contact extends React.Component {

  render() {
    return (
      <div>
        <Navbar history={this.props.history} state={this.props.state.state} googleCallBack={App.googleResponseSuccess.bind(this)} />
        <h1>contact</h1>
      </div>
    );
  }
}

export default Contact;
