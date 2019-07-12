import React, { Component } from "react";

import api from "../lib/api.js";

import Login from "./Login.js";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  login = () => {
    const request = {
      email: this.state.email,
      password: this.state.password
    };
    api
      .login(request)
      .then(data => {
        console.log(data);
        localStorage.setItem("jwt", data.auth_token);

        this.setState({
          inputValue: ""
        });
      })
      .catch(error => console.log(error));
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <Login
        email={this.state.email}
        password={this.state.password}
        handleEmailChange={this.handleEmailChange}
        handlePasswordChange={this.handlePasswordChange}
        login={this.login}
      />
    );
  }
}

export default LoginContainer;
