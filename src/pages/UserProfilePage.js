import React from "react";
import axios from "axios";
import LoadingIndicator from "../components/LoadingIndicator";
import NavBar from "../components/navbar.js";

class UserProfile extends React.Component {
  state = {
    userProfile: [],
    isLoading: true,
    username: ""
  };

  componentDidMount() {
    const { users } = this.props;
    // this.setState({ isLoading: true });
    // performing a GET requestt
    users.forEach(user => {
      if (user.id === parseInt(this.props.match.params.id)) {
        this.setState({ username: user.username });
      }
    });

    axios
      .get(
        `https://insta.nextacademy.com/api/v1/images?userId=${this.props.match.params.id}`
      )
      .then(result => {
        console.log(result);
        // If successful, we do stuffs with 'result'
        this.setState({
          userProfile: result,
          isLoading: false,
          users: users
        });
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }

  render() {
    const { username, isLoading } = this.state;
    return (
      <>
        <NavBar />
        {isLoading ? <LoadingIndicator /> : null}
        <h1>User Profile Page</h1>
        <h2>{username}</h2>
        <div>hello</div>
      </>
    );
  }
}

export default UserProfile;

const MyProfileImage = {
  padding: 4,
  backgroundColor: "#fffff",

  borderRadius: 4,
  height: "auto",
  maxWidth: 100
};
const UserIndexFeature = { backgroundColor: "#efefef" };
