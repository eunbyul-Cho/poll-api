import React, { Component } from "react";

import Logout from "../components/Logout";

class LogoutContainer extends Component {
  logout = () => {
    localStorage.removeItem("jwt");
    alert("logged out");
    this.props.location.props.toggleLogIn();
    this.props.history.push("/");
  };

  render() {
    return <Logout logout={this.logout} />;
  }
}

export default LogoutContainer;
