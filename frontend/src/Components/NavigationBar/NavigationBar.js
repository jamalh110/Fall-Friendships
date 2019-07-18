import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { GoogleLogin } from "react-google-login";
import classes from "./NavigationBar.module.css";
import App from "../../App.js";
import browserHistory from "react-router";
import gloginimage from "../../Assets/web/2x/btn_google_signin_light_normal_web@2x.png";
import fflogo from "../../Assets/logo.png";

class NavigationBar extends React.Component {
  componentWillMount() {
    console.log(this.props);
  }
  componentDidUpdate() {
    // console.log(this.props)
  }
  responseGoogleSuccess(response) {
    App.googleResponseSuccess(response);
  }
  render() {
    if (this.props.state.loggedIn != true) {
      return (
        <div>
        <Navbar sticky="top" className={classes.MainNavbar} expand="md">
          <Navbar.Brand href="">
            <div className={classes.brandBox}>
              <img className={classes.fflogo} src={fflogo} />
              <p>thc x cba</p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav"/>
          
          <Navbar.Collapse id="basic-navbar-nav" className={classes.NavLinks}>
            <Nav>
              <Nav.Link
                className={classes.nlink}
                onClick={function () {
                  this.props.history.push("/");
                }.bind(this)}
              >
                <p>Home</p>
              </Nav.Link>
              <Nav.Link
                className={classes.nlink}
                onClick={function () {
                  this.props.history.push("/about");
                }.bind(this)}
              >
                <p>About</p>
              </Nav.Link>
              <Nav.Link
                className={classes.nlink}
                onClick={function () {
                  this.props.history.push("/contact");
                }.bind(this)}
              >
                <p>Contact</p>
              </Nav.Link>
              <GoogleLogin
                clientId="29949178420-0opvqqshb6ltbdmhceqgcout83b7s5i2.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.props.googleCallBack}
                onFailure={this.responseGoogleSuccess}
                cookiePolicy={"single_host_origin"}
                render={renderProps => (
                  <div className={classes.loginButton}>
                    <img src={gloginimage} onClick={renderProps.onClick} />
                  </div>
                )}
              />
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        </div>
      );
    } else {
      return (
        <Navbar sticky="top" className={classes.MainNavbar} expand="md">
          <Navbar.Brand href="">
            <div className={classes.brandBox}>
              <img className={classes.fflogo} src={fflogo} />
              <p>thc x cba</p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={classes.NavLinks}>
            <Nav>
              <div className={classes.namediv}>
                <p>Welcome, {this.props.state.firstName}!</p>
              </div>
              <Nav.Link
                className={classes.nlink}
                onClick={function () {
                  this.props.history.push("/");
                }.bind(this)}
              >
                <p>Home</p>
              </Nav.Link>
              <Nav.Link
                className={classes.nlink}
                onClick={function () {
                  this.props.history.push("/about");
                }.bind(this)}
              >
                <p>About</p>
              </Nav.Link>
              <Nav.Link
                className={classes.nlink}
                onClick={function () {
                  this.props.history.push("/contact");
                }.bind(this)}
              >
                <p>Contact</p>
              </Nav.Link>
              <Nav.Link
                className={classes.nlink}
                onClick={function () {
                  this.props.history.push("/survey");
                }.bind(this)}
              >
                <p>Take Survey</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
}

export default NavigationBar;
