import React, { Component } from "react";

import api from "../lib/api.js";
import { Route, Redirect } from "react-router";

class SignUp extends Component {
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
      <>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="name"
            maxLength="50"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input
            type="text"
            placeholder="email"
            maxLength="50"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <input
            type="text"
            placeholder="password"
            maxLength="50"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <input
            type="text"
            placeholder="passwordConfirmation"
            maxLength="50"
            value={this.state.passwordConfirmation}
            onChange={this.handlePasswordConfirmationChange}
          />
          <button onClick={this.signup}>submit</button>
        </div>
      </>
    );
  }
}

export default SignUp;
