import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { GoogleLogin } from 'react-google-login';
import classes from "./NavigationBar.module.css";
import App from "../../App.js"


class NavigationBar extends React.Component {
  responseGoogleSuccess(response){
    App.googleResponseSuccess(response)
  }
  render() {
    if (this.props.loggedIn != true) {
      return (
        <div>
          <Navbar className={classes.MainNavbar} expand="md">
            <Navbar.Brand href="#">THC x CBA | FF Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className={classes.NavLinks}>
              <Nav>

                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
                <GoogleLogin
                  clientId="29949178420-0opvqqshb6ltbdmhceqgcout83b7s5i2.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={this.props.googleCallBack}
                  onFailure={this.responseGoogleSuccess}
                  cookiePolicy={'single_host_origin'}
                />
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
    else {
      return (
        <div>
          <Navbar className={classes.MainNavbar} expand="md">
            <Navbar.Brand href="#">THC x CBA | FF Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className={classes.NavLinks}>
              <Nav>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
                <Nav.Link href="#">Take Survey</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
  }
}

export default NavigationBar;
