import React from "react";
import { Form, FormGroup, Button, Input, FormFeedback } from "reactstrap";
class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.loginUser({
      username: username,
      password: password
    });
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <>
        <h1>Login</h1>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <FormGroup>
            <Input
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={e => this.handleInput(e)}
            />

            <FormFeedback></FormFeedback>
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={e => this.handleInput(e)}
            />

            <FormFeedback></FormFeedback>
          </FormGroup>
          <Button>Login</Button>
          <button className="btn btn-link" onClick={this.props.toggleLogin}>
            Haven't Signup? Stop dreamingg!!!
          </button>
        </Form>
      </>
    );
  }
}

export default LoginForm;
