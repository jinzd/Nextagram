import React from "react";
import Logo from "../Icons/logo.gif";
import { Link } from "react-router-dom";
import { Button, Collapse } from "react-bootstrap";
class NavBar extends React.Component {
  state = { open: false };

  render() {
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
            AnGram
          </Link>
        </div>
        <button className="navbar-toggler" onClick={this.state.open}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <Collapse in={this.state.open}>
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
                <Button
                  color="primary"
                  className="btn btn-outline-dark my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </Button>
              </form>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="//" className="nav-link">
                    Users <span className="sr-only">(current)</span>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Sign in
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Collapse>
      </nav>
    );
  }
}

export default NavBar;
let style = {
  width: 50,
  marginRight: 5
};
