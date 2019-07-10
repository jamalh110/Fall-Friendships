import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
//import { Provider } from 'react-redux'
//import { createStore } from 'redux'

import "./index.css";
// import App from "./App";
import HomePage from "./Components/Home/HomePage";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Survey from "./Components/Survey/Survey.js";
import State from "./State.js";

import * as serviceWorker from "./serviceWorker";

const proxy = require("http-proxy-middleware");

class Wrapper extends React.Component {
  componentWillMount(){

    if (this.props.location.state == null) {
      this.setState({
        state: new State()
      });
    } else {
      this.setState({

        state: this.props.location.state.state

      });
    }
    var isOnIOS = navigator.userAgent.match(/iPad/i)|| navigator.userAgent.match(/iPhone/i);
    var eventName = isOnIOS ? "pagehide" : "beforeunload";

    window.addEventListener(eventName, function(event) {
      this.props.history.replace(window.location.pathname, { state: this.state.state });
    }.bind(this));
  }
  componentWillUnmount(){
    
  }

  setStatePass(object){
    this.setState(object)
  }
  render() {
    return (
        <div>
         
          <Route exact path="/" render={(props) => <HomePage {...props} state = {this.state} setState={this.setStatePass.bind(this)} />}/>
          <Route path="/about" render={(props) => <About {...props} state = {this.state} setState={this.setStatePass.bind(this)} />}/>
          <Route path="/contact" render={(props) => <Contact {...props} state = {this.state} setState={this.setStatePass.bind(this)} />}/>
          <Route path="/survey" render={(props) => <Survey {...props} state = {this.state} setState={this.setStatePass.bind(this)} />}/>
        </div>
    )
  }
}
const root = (<Router><Route path = "/" component = {Wrapper} /></Router>)
ReactDOM.render(root, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();