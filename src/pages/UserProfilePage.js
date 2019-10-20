import React from "react";
import axios from "axios";
import LoadingIndicator from "../components/LoadingIndicator";
import Image from "react-graceful-image";

class UserProfile extends React.Component {
  state = {
    userProfile: [],
    isLoading: true,
    username: "",
    profileimage: ""
  };

  componentDidMount() {
    const { users } = this.props;
    // this.setState({ isLoading: true });
    // performing a GET requestt
    users.forEach(user => {
      if (user.id === parseInt(this.props.match.params.id)) {
        this.setState({
          username: user.username,
          profileimage: user.profileImage
        });
      }
    });

    axios
      .get(
        `https://insta.nextacademy.com/api/v1/images?userId=${this.props.match.params.id}`
      )
      .then(result => {
        console.log(result.data);
        // If successful, we do stuffs with 'result'
        // this.userProfile = { result };
        this.setState({
          userProfile: result.data,
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
    const { username, profileimage, isLoading, userProfile } = this.state;
    return (
      <>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <>
            <div className="container-fluid justify-content-center">
              <div style={UserIndexFeature} className="container-fluid border">
                <Image
                  className="col-sm-3 border rounded border-dark m-3"
                  style={MyProfileImage}
                  src={profileimage}
                  alt="profileimage"
                />
                <h2 className="col-6 d-inline">{`@${username.toUpperCase()}`}</h2>
                <div style={UserIndexFeature} className="row my-2">
                  {userProfile.map((image, index) => (
                    <div key={index} className="col-sm-4 mb-2">
                      <Image
                        src={image}
                        className="img-fluid"
                        width="400"
                        height="400"
                        alt="userImage"
                        retry={{ count: 10, delay: 2 }}
                        key={index}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default UserProfile;

const MyProfileImage = {
  backgroundColor: "#fffff",
  borderRadius: 4,
  height: "auto",
  maxWidth: 300
};
const UserIndexFeature = { backgroundColor: "#efefef" };
