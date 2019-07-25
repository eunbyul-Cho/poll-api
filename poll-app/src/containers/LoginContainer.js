import React, { Component } from "react";
import api from "../lib/api.js";
import Login from "../components/Login.js";
import axios from "axios";
class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  login = () => {
    const request = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post(
        `http://pollEnv.pewgvymnw4.us-west-2.elasticbeanstalk.com/auth/login`,
        request
      )
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(error => {
        throw error;
      });
    /*
    api
      .login(request)
      .then(data => {
        console.log("data from front", data);
        localStorage.setItem("jwt", data.auth_token);

        this.setState({
          inputValue: ""
        });

        alert("logged in");
        this.props.location.props.toggleLogIn();
        this.props.history.push("/pollList");
      })
      .catch(error => console.log(error));
      */
  };

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  };
  render() {
    let { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      return (
        <Login
          handleInputChange={this.handleInputChange}
          email={this.state.email}
          password={this.state.password}
          isLoggedIn={this.props.isLoggedIn}
          login={this.login}
        />
      );
    }
  }
}

export default LoginContainer;
