import React from "react";
import classes from "./HomePage.module.css";
import Navbar from "../NavigationBar/NavigationBar";
import { GoogleLogin } from "react-google-login";
import App from "../../App.js";
import State from "../../State.js";
import gloginimage from "../../Assets/web/2x/btn_google_signin_light_normal_web@2x.png";
//import fflogo from "../../Assets/yeet.png";
import fflogo from "../../Assets/logo.png";

class HomePage extends React.Component {

  componentWillMount() {

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
          <div>
            <button className={[classes.loginButton, classes.googleLogo].join(' ')} onClick={renderProps.onClick}>
              <p>Sign in with Google</p>
            </button>
          </div>
        )}
      />
    );
    if (this.props.state.state.loggedIn) {
      decision = (
        <button
          onClick={function() {
            this.props.history.push("/survey");
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
          state={this.props.state.state}
          googleCallBack={App.googleResponseSuccess.bind(this)}
        />
        <div className={classes.homeTexts}>

          <h1>Fall Friendships</h1>
          <br></br>
          <img src={fflogo} />
          <h3>Start the year off right. Meet someone new.</h3>
          <h4>Sign Up Below.</h4>
          <div className={classes.homeDecBtn}> {decision}</div>
          <h4 className={classes.pplCount}>{this.state.count} participants and counting</h4>
        </div>
      </div>
    );
  }
}

export default HomePage;
