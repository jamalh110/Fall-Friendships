import React from "react";
import Navbar from "../NavigationBar/NavigationBar";
import { GoogleLogin } from 'react-google-login';
import App from "../../App.js"
import State from "../../State.js"

class Survey extends React.Component {
  componentWillMount(){
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
    if(this.state.state.loggedIn!=true){
        return (
            <div>
              <Navbar history = {this.props.history} state = {this.state.state} googleCallBack = {App.googleResponseSuccess.bind(this)}/>
              <h1>lmao y u trying to take survey without log in?</h1>
            </div>
          );
    }
    return (
      <div style = {{maxWidth:"100%"}}>
        <Navbar history = {this.props.history} state = {this.state.state} googleCallBack = {App.googleResponseSuccess.bind(this)}/>
        <h4>Here is the state you are working with aahil:</h4>
        <h4 style = {{wordWrap: "break-word"}}>{JSON.stringify(this.state.state)}</h4>
        <br></br>
        <br></br>
        <h4>also, "wab." LOLLLLLLLLLLL</h4>
      </div>
    );
  }
}

export default Survey;
