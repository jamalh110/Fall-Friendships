import React from "react";
import "./App.css";
import HomePage from "./Components/Home/HomePage";

class App  {

}
App.backendURL = "http://localhost:4000/api"

//ONLY GETS CALLED WHEN IT IS BOUND TO A COMPONENT'S THIS
App.googleResponseSuccess = function (response) {
  console.log(response)
  this.setState({
    state: Object.assign(this.state.state, {
      loggedIn: true, 
      email: response.profileObj.email, 
      accessToken: response.accessToken,
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName

    })
  })
}
export default App;
