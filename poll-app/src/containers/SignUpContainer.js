import React, { Component } from "react";
import SignUp from "../components/SignUp";
import api from "../lib/api.js";

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
        this.props.history.push("/pollList");
      })
      .catch(error => {
        alert("Enter name, email, password");
        console.log(error);
      });
  };

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  };

  render() {
    return (
      <SignUp signup={this.signup} handleInputChange={this.handleInputChange} />
    );
  }
}

export default SignUpContainer;
