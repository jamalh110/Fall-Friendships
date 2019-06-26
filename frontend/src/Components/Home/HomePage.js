import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "./HomePage.module.css";
// import Contact from "../Contact/Contact";

class HomePage extends React.Component {
  render() {
    return (
      <div className={classes.mainHome}>
        <Navbar bg="light" expand="md">
          <Navbar.Brand href="#home">THC x CBA | FF Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-centre">
              <Nav.Link href="#">Take Survey</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <h1>FALL FRIENDSHIPS</h1>
        <h3>insert tagline</h3>
        <p>description</p>
        <a href="../Contact/Contact">router test</a>
      </div>
    );
  }
}

export default HomePage;
