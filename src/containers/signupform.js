import React from "react";
// import ReactPasswordStrength from "react-password-strength";
import Axios from "axios";
import { Form, FormGroup, Button, Input, FormFeedback } from "reactstrap";

class SignUpForm extends React.Component {
  state = {
    username: "",
    password: "",
    email: ""
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
  // handleInput = (name, value) => {
  //   this.setState({
  //     [name]: value
  //   });
  // };
  handleInput = e => {
    let x = { ...e };
    if (x.target.name === "username") {
      let delay = setTimeout(() => this.handleUsernameCheck(x), 300);
      this.setState({
        [e.target.name]: e.target.value,
        delay
      });
    } else if (x.target.name === "password") {
      let delay = setTimeout(() => this.handlePasswordCheck(x), 300);
      // Check password
      this.setState({
        [e.target.name]: e.target.value,
        delay
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };
  handleUsernameCheck = e => {
    const newUsername = e.target.value;
    if (newUsername.length >= 6) {
      Axios.get(
        `https://insta.nextacademy.com/api/v1/users/check_name?username=${newUsername}`
      )
        .then(resp => {
          // console.log(resp);
          if (resp.data.valid) {
            this.setState({
              usernameValid: true
            });
          } else {
            this.setState({
              usernameValid: false
            });
          }
        })
        .catch(error => {
          // If unsuccessful, we notify users what went wrong
          console.log(error.response);
        });
    }
  };

  handlePasswordCheck = e => {
    const newPassword = e.target.value;
    if (newPassword.length >= 6) {
    }
  };
  render() {
    const { username, password, email, usernameValid } = this.state;
    return (
      <>
        <h1>SignUp</h1>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <FormGroup>
            <Input
              type="text"
              name="username"
              placeholder="Choose a username min 6 characters"
              value={username}
              onChange={e => {
                if (this.state.delay) {
                  clearTimeout(this.state.delay);
                }
                this.handleInput(e);
              }}
              {...(username.length >= 6
                ? usernameValid
                  ? { valid: true }
                  : { invalid: true }
                : username.length > 0
                ? { invalid: true }
                : "")}
            />

            <FormFeedback
              {...(username.length > 0 && username.length >= 6
                ? usernameValid
                  ? { valid: true }
                  : { invalid: true }
                : { invalid: true })}
            >
              {username.length >= 6
                ? usernameValid
                  ? "Sweet, this username is available!"
                  : "Sorry, this username is taken!"
                : "Must be minimum 6 characters"}
            </FormFeedback>
          </FormGroup>

          <FormGroup>
            <Input
              type="password"
              name="password"
              placeholder="min 6 character"
              value={password}
              onChange={e => this.handleInput(e)}
            />

            <FormFeedback></FormFeedback>
          </FormGroup>

          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="example@domain.com"
              value={email}
              onChange={e => this.handleInput(e)}
            />
            <FormFeedback></FormFeedback>
          </FormGroup>

          <Button>Submit</Button>
        </Form>
        <button className="btn btn-link" onClick={this.props.toggleLogin}>
          Already Sign Up? click to login
        </button>
      </>
    );
  }
}

export default SignUpForm;
