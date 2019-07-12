import React, { Component } from "react";

import api from "../lib/api.js";

import { Route, Redirect } from "react-router";
class Login extends Component {
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
      <>
        <div className="inputContainer">
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
          <button onClick={this.login}>submit</button>
        </div>
      </>
    );
  }
}

export default Login;
