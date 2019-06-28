import React from "react";
import "./App.css";
import HomePage from "./Components/Home/HomePage";

class App  {

 //backendURL = "hi"
  /*
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }*/
}
App.backendURL = "http://localhost:4000/api"
App.googleResponseSuccess = (response) =>{
  console.log(response)
}
export default App;
