import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
//import { Provider } from 'react-redux'
//import { createStore } from 'redux'
//import start from "./leaves/leaves.js"
//require('./leaves/leaves.js')
import classes from "./index.module.css";
// import App from "./App";
import HomePage from "./Components/Home/HomePage";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Survey from "./Components/Survey/Survey.js";
import State from "./State.js";

import * as serviceWorker from "./serviceWorker";

const proxy = require("http-proxy-middleware");

class Wrapper extends React.Component {
  //start the leaf scene falling leaves animation 
  componentDidMount() {
    startUp()
  }
  componentWillMount() {
    //if there is already a state in the location (e.g. after a reload), use it. or else make a new one 
    if (this.props.location.state == null) {
      this.setState({
        state: new State()
      });
    } else {
      this.setState({
        state: this.props.location.state.state
      });
    }

    //if on iphone or ipad, beforeunload does not work, so use pagehide
    var isOnIOS = navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i);
    var eventName = isOnIOS ? "pagehide" : "beforeunload";
    //save the state in the location history on a reload 
    window.addEventListener(eventName, function (event) {
      this.props.history.replace(window.location.pathname, { state: this.state.state });
    }.bind(this));

    //IF YOU DONT DO THIS, YOU GET A WHITE SCREEN ON MOBILE BUT IT WORKS ON DESKTOP
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Mobile|Silk|Opera Mini/i.test(navigator.userAgent)) {

      document.getElementsByTagName("body")[0].style.height="100%"
      document.getElementsByTagName("body")[0].style.width="100%"
      document.getElementsByTagName("html")[0].style.height="100%"
      document.getElementsByTagName("html")[0].style.width="100%"
    }
  }

  //function to pass as setState to child components to set the global state
  setStatePass(object) {
    this.setState(object)
  }

  render() {
    //outer div is leaves
    //inside the routes, enclose divs to make it work well with leaves. custom one alreadu in survey prop
    //inside routes, pass state and setstate bound to this into props of component
    return (
      <div className={classes.fallingLeaves} id="leafdiv">
        <Route exact path="/" render={(props) => (<div className={classes.enclosedDiv} ><HomePage {...props} state={this.state} setState={this.setStatePass.bind(this)} /> </div>)} />
        <Route path="/about" render={(props) => (<div className={classes.enclosedDiv} ><About {...props} state={this.state} setState={this.setStatePass.bind(this)} /> </div>)} />
        <Route path="/contact" render={(props) => (<div className={classes.enclosedDiv} ><Contact {...props} state={this.state} setState={this.setStatePass.bind(this)} /></div>)} />
        <Route path="/survey" render={(props) => <Survey {...props} state={this.state} setState={this.setStatePass.bind(this)} />} />
      </div>
    )
  }
}

//weird javascript class stuff to make this work 
var vars = new defineVars()
function startUp() {
  start(vars.LeafScene)
}

//this werid route inception is just so we have access to the props.location used above in the reload code that react router so nicely provides to us 
const root = (<Router><Route path="/" component={Wrapper} /></Router>)
ReactDOM.render(root, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//DO NOT WORRY ABOUT THE BELOW. IT IS WACK

function defineVars() {
  this.LeafScene = function (el) {
    this.viewport = el;
    this.world = document.createElement('div');
    this.leaves = [];

    this.options = {
      numLeaves: 20,
      wind: {
        magnitude: 1.2,
        maxSpeed: 12,
        duration: 300,
        start: 0,
        speed: 0
      },
    };

    this.width = this.viewport.offsetWidth;
    this.height = this.viewport.offsetHeight;
    //this.width = 800;
    //this.height = 800;

    // animation helper
    this.timer = 0;

    this._resetLeaf = function (leaf) {

      // place leaf towards the top left
      leaf.x = this.width * 2 - Math.random() * this.width * 1.75;
      leaf.y = -10;
      leaf.z = Math.random() * 200;
      if (leaf.x > this.width) {
        leaf.x = this.width + 10;
        leaf.y = Math.random() * this.height / 2;
      }
      // at the start, the leaf can be anywhere
      if (this.timer == 0) {
        leaf.y = Math.random() * this.height;
      }

      // Choose axis of rotation.
      // If axis is not X, chose a random static x-rotation for greater variability
      leaf.rotation.speed = Math.random() * 10;
      var randomAxis = Math.random();
      if (randomAxis > 0.5) {
        leaf.rotation.axis = 'X';
      } else if (randomAxis > 0.25) {
        leaf.rotation.axis = 'Y';
        leaf.rotation.x = Math.random() * 180 + 90;
      } else {
        leaf.rotation.axis = 'Z';
        leaf.rotation.x = Math.random() * 360 - 180;
        // looks weird if the rotation is too fast around this axis
        leaf.rotation.speed = Math.random() * 3;
      }

      // random speed
      leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
      leaf.ySpeed = Math.random() + 1.5;

      return leaf;
    }

    this._updateLeaf = function (leaf) {
      var leafWindSpeed = this.options.wind.speed(this.timer - this.options.wind.start, leaf.y);

      var xSpeed = leafWindSpeed + leaf.xSpeedVariation;
      leaf.x -= xSpeed;
      leaf.y += leaf.ySpeed;
      leaf.rotation.value += leaf.rotation.speed;

      var t = 'translateX( ' + leaf.x + 'px ) translateY( ' + leaf.y + 'px ) translateZ( ' + leaf.z + 'px )  rotate' + leaf.rotation.axis + '( ' + leaf.rotation.value + 'deg )';
      if (leaf.rotation.axis !== 'X') {
        t += ' rotateX(' + leaf.rotation.x + 'deg)';
      }
      leaf.el.style.webkitTransform = t;
      leaf.el.style.MozTransform = t;
      leaf.el.style.oTransform = t;
      leaf.el.style.transform = t;

      // reset if out of view
      if (leaf.x < -10 || leaf.y > this.height + 10) {
        this._resetLeaf(leaf);
      }
    }

    this._updateWind = function () {
      // wind follows a sine curve: asin(b*time + c) + a
      // where a = wind magnitude as a function of leaf position, b = wind.duration, c = offset
      // wind duration should be related to wind magnitude, e.g. higher windspeed means longer gust duration

      if (this.timer === 0 || this.timer > (this.options.wind.start + this.options.wind.duration)) {

        this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
        this.options.wind.duration = this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
        this.options.wind.start = this.timer;

        var screenHeight = this.height;

        this.options.wind.speed = function (t, y) {
          // should go from full wind speed at the top, to 1/2 speed at the bottom, using leaf Y
          var a = this.magnitude / 2 * (screenHeight - 2 * y / 3) / screenHeight;
          return a * Math.sin(2 * Math.PI / this.duration * t + (3 * Math.PI / 2)) + a;
        }
      }
    }
  }

  this.LeafScene.prototype.init = function () {

    for (var i = 0; i < this.options.numLeaves; i++) {
      var leaf = {
        el: document.createElement('div'),
        x: 0,
        y: 0,
        z: 0,
        rotation: {
          axis: 'X',
          value: 0,
          speed: 0,
          x: 0
        },
        xSpeedVariation: 0,
        ySpeed: 0,
        path: {
          type: 1,
          start: 0,

        },
        image: 1
      };
      this._resetLeaf(leaf);
      this.leaves.push(leaf);
      this.world.appendChild(leaf.el);
    }

    this.world.className = classes.leafScene;
    this.viewport.appendChild(this.world);
    //document.body.appendChild(this.world)
    // set perspective
    this.world.style.webkitPerspective = "400px";
    this.world.style.MozPerspective = "400px";
    this.world.style.oPerspective = "400px";
    this.world.style.perspective = "400px";

    // reset window height/width on resize
    var self = this;
    window.onresize = function (event) {
      self.width = self.viewport.offsetWidth;
      self.height = self.viewport.offsetHeight;
    };
  }

  this.LeafScene.prototype.render = function () {
    this._updateWind();
    for (var i = 0; i < this.leaves.length; i++) {
      this._updateLeaf(this.leaves[i]);
    }

    this.timer++;

    requestAnimationFrame(this.render.bind(this));
    console.log("dund")
  }
}
// start up leaf scene
function start(scene) {
  console.log("start")
  var leafContainer = document.getElementById("leafdiv")
  var leaves = new scene(leafContainer);

  leaves.init();
  leaves.render();
}
