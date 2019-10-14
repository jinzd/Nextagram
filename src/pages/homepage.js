import React from "react";
import UserImages from "../containers/userimage";
import Image from "react-graceful-image";
import NavBar from "../components/navbar.js";
import UserComments from "../containers/usercomment";

const HomePage = prop => {
  return (
    <>
      <div className="container-fluid">
        <NavBar />
        {prop.childUsers.map((user, index) => (
          <div
            style={UserIndexFeature}
            className="container-fluid row border border-0 ml-2 mb-5 rounded py-3"
            key={index}
          >
            <div className="col-sm-2 mb-5">
              <a href={user.id}>{user.username} </a>
              <UserComments />
              <Image
                src={user.profileImage}
                alt="profileImage"
                className="rounded-circle mb-5"
                style={MyProfileImage}
              />
              <a href={user.id} className="btn btn-primary btn-block">
                See More
              </a>
            </div>
            <UserImages userId={user.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;

const MyProfileImage = {
  padding: 4,
  backgroundColor: "#fffff",

  borderRadius: 4,
  height: "auto",
  maxWidth: 100
};
const UserIndexFeature = { backgroundColor: "#efefef" };
