import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  render() {
    return (
      <>
        <h1>Login</h1>
        <from>
          <input></input>
          <input></input>
        </from>
        <Link onClick={this.props.toggleLogin}>
          Haven't Signup? Stop dreamingg!!!
        </Link>
      </>
    );
  }
}

export default LoginForm;
