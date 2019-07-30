import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Home from "./Home.js";
import LogoutContainer from "../containers/LogoutContainer";
import LoginContainer from "../containers/LoginContainer";
import PollListContainer from "../containers/PollListContainer.js";
import DetailContainer from "../containers/DetailContainer.js";
import SignUpContainer from "../containers/SignUpContainer";
import CreatePollContainer from "../containers/CreatePollContainer";
import MyPollContainer from "../containers/MyPollContainer";
import NavContainer from "../containers/NavContainer";

const AppRouter = props => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (props.isLoggedIn ? <Redirect to="/pollList" /> : <Home />)}
    />
    <Route path="/pollList" component={PollListContainer} />
    <Route
      path="/login"
      render={props => (
        <LoginContainer {...props} toggleLogIn={props.toggleLogIn} />
      )}
    />
    <Route
      path="/logout"
      render={props => (
        <LogoutContainer {...props} toggleLogIn={props.toggleLogIn} />
      )}
    />
    <Route path="/detail" component={DetailContainer} />
    <Route path="/signup" component={SignUpContainer} />
    <Route path="/createPoll" component={CreatePollContainer} />
    <Route path="/myPoll" component={MyPollContainer} />
  </Switch>
);
class Main extends Component {
  state = {
    isLoggedIn: localStorage.jwt ? true : false,
    modalShow: false
  };
  toggleLogIn = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };
  toggleModal = () => {
    const { modalShow } = this.state;
    this.setState({ modalShow: !modalShow });
  };
  render() {
    const { modalShow, isLoggedIn } = this.state;
    return (
      <Router>
        <NavContainer
          toggleLogIn={this.toggleLogIn}
          isLoggedIn={this.state.isLoggedIn}
        />
        <div className="container">
          <AppRouter
            toggleModal={this.toggleModal}
            modalShow={modalShow}
            isLoggedIn={isLoggedIn}
            toggleLogIn={this.toggleLogIn}
          />
        </div>
      </Router>
    );
  }
}

export default Main;
