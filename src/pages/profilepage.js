import React from "react";
import axios from "axios";
import Image from "react-graceful-image";
import LoadingIndicator from "../components/LoadingIndicator";
import ImageUpload from "../containers/imageupload";

class ProfilePage extends React.Component {
  state = {
    images: [],
    user: [],
    isLoading: false
  };

  userImageRecall = () => {
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
  };

  componentDidMount() {
    this.userImageRecall();
  }
  render() {
    const { images, user, isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <div className="container-fluid justify-content-center">
            <div height="600" className="d-flex justify-content-center">
              <Image
                src={user.profile_picture}
                retry={{ count: 10, delay: 2 }}
              />
              <h1 className="p-5">{user.username}</h1>
            </div>
            <div style={UserIndexFeature} className="container-fluid border">
              <div style={UserIndexFeature} className="row my-2">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="img-responsive col-xl-3 col-lg-4 col-sm-6 col-12 mb-2"
                  >
                    {" "}
                    <Image
                      src={image}
                      width="300vw"
                      className="user-images m-1"
                      retry={{ count: 10, delay: 2 }}
                      alt={`Image from ${user.username} `}
                    />{" "}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <ImageUpload userImageRecall={this.userImageRecall} />
      </>
    );
  }
}

export default ProfilePage;
const UserIndexFeature = { backgroundColor: "#efefef" };
