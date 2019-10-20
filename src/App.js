import React from "react";
import axios from "axios";
import "./App.css";
import LoginPage from "./pages/loginpage";
import HomePage from "./pages/homepage";
import ProfilePage from "./pages/profilepage";
import { Route, Switch, withRouter } from "react-router-dom";
import UserProfile from "./pages/UserProfilePage";
import NavBar from "./components/navbar";

class App extends React.Component {
  state = {
    parentUsers: [],
    currentUser: { isLogin: false }
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
        console.log(error.response);
      });
  }

  signUpUser = data => {
    axios
      .post("https://insta.nextacademy.com/api/v1/users/", data)
      .then(result => {
        console.log(result.data);
        localStorage.setItem("userToken", result.data.auth_token);
        localStorage.setItem("userData", JSON.stringify(result.data.user));
        this.setState(
          {
            currentUser: { ...result.data.user, isLogin: true }
          },
          () => {
            this.props.history.push(`/user/${result.data.user.id}`);
          }
        );
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  loginUser = data => {
    console.log(data);
    axios
      .post("https://insta.nextacademy.com/api/v1/login", data)
      .then(response => {
        // console.log(response);
        localStorage.setItem("userToken", response.data.auth_token);
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        this.setState(
          {
            currentUser: { ...response.data.user, isLogin: true }
          },
          () => {
            this.props.history.push("/profile");
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

  LogOut = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    this.setState({
      currentUser: { isLogin: false }
    });
    console.log(this.state.currentUser);
  };

  render() {
    const { parentUsers, currentUser } = this.state;

    return (
      <>
        <NavBar LogOut={this.LogOut} currentUser={currentUser} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return <HomePage childUsers={parentUsers} />;
            }}
          />
          <Route path="/profile" component={ProfilePage} />
          <Route
            path="/user/:id"
            component={props => {
              return <UserProfile {...props} users={parentUsers} />;
            }}
          />
          <Route
            path="/login"
            component={props => (
              <LoginPage
                {...props}
                signUpUser={this.signUpUser}
                loginUser={this.loginUser}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
