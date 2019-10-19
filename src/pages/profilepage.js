import React from "react";
import axios from "axios";
import Image from "react-graceful-image";
import LoadingIndicator from "../components/LoadingIndicator";
class ProfilePage extends React.Component {
  state = {
    images: [],
    user: [],
    isLoading: false
  };

  componentDidMount() {
    const jwt = localStorage.getItem("userToken");

    // console.log(jwt);

    axios
      .get("https://insta.nextacademy.com/api/v1/images/me", {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      })
      .then(response => {
        const userData = localStorage.getItem("userData");
        const user = JSON.parse(userData);
        // console.log(response);

        this.setState({
          images: response.data,
          user: user,
          isLoading: false
        });
      });
  }
  render() {
    const { images, user, isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <div>
            <h1>{user.username}'s Profile</h1>
            <Image src={user.profile_picture} />
            {images.map(image => (
              <div sm={4} className="mb-2">
                {" "}
                <Image
                  src={image}
                  className="user-images"
                  alt={`Image from ${user.username} `}
                />{" "}
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
}

export default ProfilePage;
