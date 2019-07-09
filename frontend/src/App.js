import React from "react";
import "./App.css";
import HomePage from "./Components/Home/HomePage";

class App {}
App.backendURL = "/api/";

//ONLY GETS CALLED WHEN IT IS BOUND TO A COMPONENT'S THIS
App.googleResponseSuccess = function(response) {
  //console.log(response);

  fetch(App.backendURL + "authenticate_login_token", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: response.profileObj.email,
      token: response.accessToken
    })
  })
    .then(function(resp) {
      if (resp.ok) {
        return resp.json();
      } else {
        throw "shit";
      }
    })
    .then(
      function(resp) {
        //console.log(response)
        this.props.setState({
          state: Object.assign(this.props.state.state, {
            loggedIn: true,
            email: response.profileObj.email,
            accessToken: response.accessToken,
            firstName: response.profileObj.givenName,
            lastName: response.profileObj.familyName,
            hasTaken: resp.has_submitted,
            response: resp.data
          })
        });
      }.bind(this)
    )
    .catch(function(error) {
      console.log(error);
    });
};
export default App;
