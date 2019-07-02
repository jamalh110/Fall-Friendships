import React from "react";
import classes from "./HomePage.module.css";
import Navbar from "../NavigationBar/NavigationBar";
import { GoogleLogin } from "react-google-login";
import App from "../../App.js";
import State from "../../State.js";
import gloginimage from "../../Assets/web/2x/btn_google_signin_light_normal_web@2x.png";
import fflogo from "../../Assets/yeet.png";

class HomePage extends React.Component {
  componentWillUnmount(){
    console.log("unmounting")
    
    //this.props.history.push("/", { state: this.state.state });
  }
  componentWillUpdate(){
    
    /*window.onbeforeunload = function (){
    this.props.history.push("/", { state: this.state.state });
     //return false
    }.bind(this)*/
  }
  componentWillMount() {
    //solves problem of not updating the state that isnt updated by the nav bar props and adds it to the props.location.state
    window.addEventListener('beforeunload', function(event) {
      this.props.history.push("/", { state: this.state.state });
    }.bind(this))
    
    if (this.props.location.state == null) {
      this.setState({
        state: new State()
      });
    } else {
      this.setState({

        state: this.props.location.state.state

      });
    }

    this.setState({
      count: "loading"
    });

    fetch(App.backendURL + "get_count", {
      method: "get"
    })
      .then(function(resp) {
        if (resp.ok) {
          return resp.text();
        } else {
          throw "shit";
        }
      })
      .then(
        function(resp) {
          this.setState({
            count: resp
          });
        }.bind(this)
      );
  }

  responseGoogleSuccess(response) {
    //var result = App.googleResponseSuccess(response)
  }
  render() {
    var decision = (
      <GoogleLogin
        clientId="29949178420-0opvqqshb6ltbdmhceqgcout83b7s5i2.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={App.googleResponseSuccess.bind(this)}
        onFailure={this.responseGoogleSuccess}
        cookiePolicy={"single_host_origin"}
        render={renderProps => (
          <div className={classes.loginButton}>
            <img src={gloginimage} onClick={renderProps.onClick} />
          </div>
        )}
      />
    );
    if (this.state.state.loggedIn) {
      decision = (
        <button
          onClick={function() {
            this.props.history.push("/survey", { state: this.state.state });
          }.bind(this)}
        >
          Take Survey
        </button>
      );
    }

    return (
      <div className={classes.mainHome}>
        <Navbar
          history={this.props.history}
          state={this.state.state}
          googleCallBack={App.googleResponseSuccess.bind(this)}
        />
        <div className={classes.homeTexts}>
          <h1>Fall Friendships</h1>
          <img src={fflogo} />
          <h3>Start the year off right. Meet someone new.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h4>{this.state.count} participants and counting</h4>
          <div className={classes.homeDecBtn}> {decision}</div>
        </div>
      </div>
    );
  }
}

export default HomePage;
