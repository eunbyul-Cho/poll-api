import React, { Component } from "react";
import api from "../lib/api.js";
import Login from "../components/Login.js";

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
        localStorage.setItem("jwt", data.auth_token);

        this.setState({
          inputValue: ""
        });

        alert("logged in");
        this.props.location.props.toggleLogIn();
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
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
