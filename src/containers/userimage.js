import React from "react";
import axios from "axios";
import Image from "react-graceful-image";

class UserImages extends React.Component {
  state = {
    userImages: [],
    isLoading: true,
    userId: null
  };

  componentDidMount() {
    const userId = this.props.userId;
    // GET request to Nextagram API
    // console.log(userId);
    axios
      .get(`https://insta.nextacademy.com/api/v1/images?userId=${userId}`)
      .then(result => {
        // console.log(result.data);
        // If successful, load users array with profile data
        this.setState({
          userImages: result.data,
          userId: userId,
          isLoading: false
        });
      })
      .catch(error => {
        // If unsuccessful, console log error
        console.log("ERROR: ", error);
      });
  }

  render() {
    const { userImages } = this.state;
    return (
      <>
        <div className="col">
          <div className="row">
            {userImages.map((image, index) => (
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
      </>
    );
  }
}

export default UserImages;
