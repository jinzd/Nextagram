import React from "react";
import LoginForm from "../containers/Loginform";
import SignUpForm from "../containers/signupform";

class LoginPage extends React.Component {
  state = {
    isLogin: false
  };

  toggleLogin = () => {
    this.setState({
      isLogin: !this.state.isLogin
    });
  };

  render() {
    const { isLogin } = this.state;
    return (
      <>
        <div>
          {isLogin ? (
            <LoginForm toggleLogin={this.toggleLogin} />
          ) : (
            <SignUpForm
              toggleLogin={this.toggleLogin}
              signUpUser={this.props.signUpUser}
            />
          )}
        </div>
      </>
    );
  }
}

export default LoginPage;
