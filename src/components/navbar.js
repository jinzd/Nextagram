import React from "react";
import Logo from "../Icons/mestagram.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <img
          className="rounded-circle"
          style={style}
          src={Logo}
          alt="LOGO"
        ></img>
        <Link to="/" className="navbar-brand ">
          Andy-gram
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <div className="d-flex">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="//" className="nav-link">
                Users <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="//" className="nav-link">
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link to="//" className="nav-link">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

let style = {
  width: 50,
  marginRight: 5
};

export default NavBar;
