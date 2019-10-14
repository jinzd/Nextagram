import React from "react";
import UserImages from "../containers/userimage";
import Image from "react-graceful-image";
import NavBar from "../components/navbar.js";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const HomePage = props => {
  return (
    <>
      <div className="container-fluid">
        <NavBar />
        {props.childUsers.map((user, index) => (
          <div
            style={UserIndexFeature}
            className="container-fluid row border border-0 ml-2 mb-5 rounded py-3"
            key={index}
          >
            <div className="column col-sm-2 mb-5">
              <Button color="primary" tag={Link} to={`/user/${user.id}`}>
                {user.username}
              </Button>
              <Image
                src={user.profileImage}
                alt="profileImage"
                className="rounded-circle mb-5 mt-3"
                style={MyProfileImage}
              />
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
