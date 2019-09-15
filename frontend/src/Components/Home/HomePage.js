import React from "react";
import classes from "./HomePage.module.css";
import Navbar from "../NavigationBar/NavigationBar";
import { GoogleLogin } from "react-google-login";
import Fade from 'react-reveal/Fade';
import App from "../../App.js";
import State from "../../State.js";
import Button from "react-bootstrap/Button"
import gloginimage from "../../Assets/web/2x/btn_google_signin_light_normal_web@2x.png";
//import fflogo from "../../Assets/yeet.png";
import fflogo from "../../Assets/yeet.png";

class HomePage extends React.Component {

  componentWillMount() {
    //sets counter to loading 
    this.setState({
      count: "loading"
    });
    //fetches count and updates page in callback 
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
googleFail(resp){
  console.log(resp)
}
  
  render() {
    //if not logged in, show google sign in. if so, show take survey button
    var decision = (
      <GoogleLogin
        clientId="29949178420-0opvqqshb6ltbdmhceqgcout83b7s5i2.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={App.googleResponseSuccess.bind(this)}
        onFailure={this.googleFail}
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
          <Fade>
            <h1>Fall Friendships</h1>
            <img className={classes.fflogo} src={fflogo} />
          </Fade>
          <br></br>
          <Fade delay={500}>
            <h3>Start the year off right. Meet someone new.</h3>
            <Button
          onClick={function() {
            this.props.history.push("/about");
          }.bind(this) } variant = "light"
        >
          See how it works
        </Button>
        <br></br>
            <h4>Sign Up Below.</h4>
            <div className={classes.homeDecBtn}> {decision}</div>
          </Fade>
          <Fade delay={1000}>
            <h4 className={classes.pplCount}>{this.state.count} participants and counting</h4>
            <h4 className={classes.pplCount}>Survey closes Sept. 24</h4>
          </Fade>
        </div>
      </div>
    );
  }
}

export default HomePage;
