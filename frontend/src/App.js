import React from "react";
import "./App.css";
import HomePage from "./Components/Home/HomePage";

class App {}
App.backendURL = "/api/";

//ONLY GETS CALLED WHEN IT IS BOUND TO A COMPONENT'S THIS
App.googleResponseSuccess = function(response) {
  console.log(response);

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
        return resp.text();
      } else {
        throw "shit";
      }
    })
    .then(
      function(resp) {
        //console.log(response)
        this.setState({
          state: Object.assign(this.state.state, {
            loggedIn: true,
            email: response.profileObj.email,
            accessToken: response.accessToken,
            firstName: response.profileObj.givenName,
            lastName: response.profileObj.familyName
          })
        });
      }.bind(this)
    )
    .catch(function(error) {
      console.log(error);
    });
};
export default App;
