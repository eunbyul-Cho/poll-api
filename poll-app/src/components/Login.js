import React, { Component, Fragment } from "react";
import axios from "axios";
import { Route, Redirect } from "react-router";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  login = e => {
    const request = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("/auth/login", request)
      .then(response => {
        console.log(response);
        localStorage.setItem("jwt", response.data.auth_token);
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
      <Fragment>
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
      </Fragment>
    );
  }
}

export default Login;
