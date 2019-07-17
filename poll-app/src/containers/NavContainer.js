import React, { Component } from "react";

import Nav from "../components/Nav";

class NavContainer extends Component {
  render() {
    return (
      <Nav
        isLoggedIn={this.props.isLoggedIn}
        toggleLogIn={this.props.toggleLogIn}
      />
    );
  }
}

export default NavContainer;
