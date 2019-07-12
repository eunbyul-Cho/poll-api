import React, { Component } from "react";
import SignUp from "./SignUp";
import api from "../lib/api.js";
import { Route, Redirect } from "react-router";

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    };
  }

  signup = () => {
    const request = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    api
      .signup(request)
      .then(data => {
        localStorage.setItem("jwt", data.auth_token);
        this.setState({
          inputValue: ""
        });
      })
      .catch(error => console.log(error));
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };
  handlePasswordConfirmationChange = e => {
    this.setState({ passwordConfirmation: e.target.value });
  };
  render() {
    return (
      <SignUp
        values={this.state}
        handleNameChange={this.handleNameChange}
        handleEmailChange={this.handleEmailChange}
        handlePasswordChange={this.handlePasswordChange}
        handlePasswordConfirmationChange={this.handlePasswordConfirmationChange}
        signup={this.signup}
      />
    );
  }
}

export default SignUpContainer;
