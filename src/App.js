import React from "react";
import axios from "axios";
import "./App.css";
import LoginPage from "./pages/loginpage";
import HomePage from "./pages/homepage";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./pages/UserProfilePage";

class App extends React.Component {
  state = {
    parentUsers: []
  };
  componentDidMount() {
    // performing a GET requestt

    axios
      .get(`https://insta.nextacademy.com/api/v1/users`)
      .then(result => {
        // console.log(result.data);

        // If successful, we do stuffs with 'result'
        this.setState({ parentUsers: result.data });
      })

      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }

  signUpUser = data => {
    axios
      .post("https://insta.nextacademy.com/api/v1/users/", data)
      .then(result => {
        console.log(JSON.stringify(result.data));
        // console.log(result);
      });
  };

  render() {
    const { parentUsers } = this.state;

    return (
      <>
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return <HomePage childUsers={parentUsers} />;
            }}
          />
          <Route
            path="/user/:id"
            component={props => {
              return <UserProfile {...props} users={parentUsers} />;
            }}
          />
          <Route
            path="/login"
            component={props => (
              <LoginPage {...props} signUpUser={this.signUpUser} />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default App;
