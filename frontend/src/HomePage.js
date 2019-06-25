import React from "react";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "./HomePage.module.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className={classes.mainHome}>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">THC x CBA | FF Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Take Survey</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <h1>FALL FRIENDSHIPS</h1>
        <h3>insert tagline</h3>
        <p>description</p>
        <a href="/contact">router test</a>
      </div>
    );
  }
}

export default HomePage;
