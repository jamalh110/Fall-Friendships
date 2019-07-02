import React from "react";
import Navbar from "../NavigationBar/NavigationBar";
import { GoogleLogin } from 'react-google-login';
import App from "../../App.js"
import State from "../../State.js"

class Contact extends React.Component {
  componentWillMount(){
    window.addEventListener('beforeunload', function(event) {
      this.props.history.push("/contact", { state: this.state.state });
    }.bind(this))
    if(this.props.location.state == null){
      this.setState({
        state: (new State())
      })
    } else{
      this.setState({
        state: this.props.location.state.state
      })
    }
  }

  render() {
    return (
      <div>
        <Navbar history = {this.props.history} state = {this.state.state} googleCallBack = {App.googleResponseSuccess.bind(this)}/>
        <h1>contact</h1>
      </div>
    );
  }
}

export default Contact;
