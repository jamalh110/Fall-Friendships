import React from "react";
import classes from "./HomePage.module.css";
import Navbar from "../NavigationBar/NavigationBar";
import { GoogleLogin } from "react-google-login";
import App from "../../App.js";
import State from "../../State.js";
import gloginimage from "../../Assets/web/2x/btn_google_signin_light_normal_web@2x.png";

class HomePage extends React.Component {
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

    this.setState({
      count: "loading"
    })
    
    fetch(App.backendURL + "get_count", {
      method: "get"
    })
      .then(function (resp) {
        if (resp.ok) {
          return resp.text();
        } else {
          throw "shit";
        }
      })
      .then(function (resp){
        this.setState({
          count: resp
        });
      }.bind(this))


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
          onClick={function () {
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
        <h1>Fall Friendships</h1>
        <h3>insert tagline</h3>
        <p>{this.state.count} participants and counting</p>
        <br />
        <br />
        {decision}
      </div>
    );
  }
}

export default HomePage;
