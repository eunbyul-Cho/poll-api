import React, { Component } from "react";
import api from "../lib/api.js";
import Login from "../components/Login.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index.js";

class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  login = () => {
    const { getPolls } = this.props.Actions;

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
        getPolls();
        this.props.history.push("/pollList");
      })
      .catch(error => {
        alert("Authentication failed");
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
export default connect(
  state => ({
    polls: state.polls.polls,
    loading: state.pender.pending["GET_POLLS"],
    error: state.pender.failure["GET_POLLS"]
  }),
  dispatch => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(LoginContainer);
