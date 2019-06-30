import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { GoogleLogin } from "react-google-login";
import classes from "./NavigationBar.module.css";
import App from "../../App.js";
import browserHistory from "react-router";
import gloginimage from "../../Assets/web/2x/btn_google_signin_light_normal_web@2x.png";

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
          <Navbar className={classes.MainNavbar} expand="md">
            <Navbar.Brand href="#">THC x CBA | FF Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className={classes.NavLinks}>
              <Nav>
                <Nav.Link
                  onClick={function() {
                    this.props.history.push("/", { state: this.props.state });
                  }.bind(this)}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  onClick={function() {
                    this.props.history.push("/about", {
                      state: this.props.state
                    });
                  }.bind(this)}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  onClick={function() {
                    this.props.history.push("/contact", {
                      state: this.props.state
                    });
                  }.bind(this)}
                >
                  Contact
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
        <div>
          <Navbar className={classes.MainNavbar} expand="md">
            <Navbar.Brand href="#">THC x CBA | FF Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className={classes.NavLinks}>
              <Nav>
                <Nav.Link>
                  <p>Welcome {this.props.state.firstName}</p>
                </Nav.Link>
                <Nav.Link
                  onClick={function() {
                    this.props.history.push("/", { state: this.props.state });
                  }.bind(this)}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  onClick={function() {
                    this.props.history.push("/about", {
                      state: this.props.state
                    });
                  }.bind(this)}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  onClick={function() {
                    this.props.history.push("/contact", {
                      state: this.props.state
                    });
                  }.bind(this)}
                >
                  Contact
                </Nav.Link>
                <Nav.Link
                  onClick={function() {
                    this.props.history.push("/survey", {
                      state: this.props.state
                    });
                  }.bind(this)}
                >
                  Take Survey
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
  }
}

export default NavigationBar;
