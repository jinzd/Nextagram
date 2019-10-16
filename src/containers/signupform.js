import React from "react";
import { Link } from "react-router-dom";

class SignUpForm extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    Btn: true
  };
  passwordMatch = () => {
    this.setState = {
      Btn: false
    };
  };
  handleSubmit = e => {
    e.preventDefault();
    const { username, password, email } = this.state;
    this.props.signUpUser({
      username: username,
      password: password,
      email: email
    });
  };
  handleInput = (name, value) => {
    this.setState({
      [name]: value
    });
  };
  render() {
    const { username, password, email } = this.state;
    return (
      <>
        <h1>SignUp</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            name="username"
            placeholder="enter your username"
            value={username}
            onChange={e => this.handleInput(e.target.name, e.target.value)}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="min 6 character"
            value={password}
            onChange={e => this.handleInput(e.target.name, e.target.value)}
          ></input>

          <input
            type="email"
            name="email"
            placeholder="example@domain.com"
            value={email}
            onChange={e => this.handleInput(e.target.name, e.target.value)}
          ></input>
          <button>Submit</button>
        </form>
        <Link to="/login" onClick={this.props.toggleLogin}>
          Already Sign Up? click to login
        </Link>
      </>
    );
  }
}

export default SignUpForm;
