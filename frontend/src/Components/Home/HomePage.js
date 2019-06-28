import React from "react";
import classes from "./HomePage.module.css";
import Navbar from "../NavigationBar/NavigationBar";
import { GoogleLogin } from 'react-google-login';
import App from "../../App.js"
import State from "../../State.js"
class HomePage extends React.Component {
  componentWillMount(){
    if(this.props.state == null){
      this.setState({
        state: (new State())
      })
    } else{
      this.setState({
        state: this.props.state
      })
    }
  }
  responseGoogleSuccess(response){
    var result = App.googleResponseSuccess(response)
    this.setState({
      state: Object.assign(this.state.state, {loggedIn: true})
    })
  }
  render() {
    return (
      <div className={classes.mainHome}>
        <Navbar loggedIn = {this.state.state.loggedIn} googleCallBack = {this.responseGoogleSuccess.bind(this)}/>
        <h1>FALL FRIENDSHIPS</h1>
        <h3>insert tagline</h3>
        <p>description</p>
        <a href="../Contact/Contact">router test</a>
        <br></br>
        <br></br>
        <GoogleLogin
          clientId="29949178420-0opvqqshb6ltbdmhceqgcout83b7s5i2.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogleSuccess.bind(this)}
          onFailure={this.responseGoogleSuccess}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}

export default HomePage;
