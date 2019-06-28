import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
//import { Provider } from 'react-redux'
//import { createStore } from 'redux'

import "./index.css";
// import App from "./App";
import HomePage from "./Components/Home/HomePage";
import Contact from "./Components/Contact/Contact";

import * as serviceWorker from "./serviceWorker";

const root = (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={Contact} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

ReactDOM.render(root, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();