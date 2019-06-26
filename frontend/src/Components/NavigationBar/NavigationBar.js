import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "./NavigationBar.module.css";

class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar className={classes.MainNavbar} expand="md">
          <Navbar.Brand href="#">THC x CBA | FF Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={classes.NavLinks}>
            <Nav>
              <Nav.Link href="#">Take Survey</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
