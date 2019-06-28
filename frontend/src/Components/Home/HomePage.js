import React from "react";
import classes from "./HomePage.module.css";
import Navbar from "../NavigationBar/NavigationBar";

class HomePage extends React.Component {
  render() {
    return (
      <div className={classes.mainHome}>
        <Navbar />
        <h1>FALL FRIENDSHIPS</h1>
        <h3>insert tagline</h3>
        <p>description</p>
        <a href="../Contact/Contact">router test</a>
      </div>
    );
  }
}

export default HomePage;
