import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom";

import Login from "./Login.js";
import PollList from "./PollList.js";
import Detail from "./Detail.js";
import SignUp from "./SignUp";
import CreatePoll from "./CreatePoll";
import MyPoll from "./MyPoll";

const Nav = () => {
  const logout = () => {
    localStorage.removeItem("jwt");
  };

  return (
    <ul>
      <li>
        <NavLink to="pollList">Polls</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/signup">SignUp</NavLink>
      </li>
      <li>
        <NavLink to="/createPoll">CreatePoll</NavLink>
      </li>
      <li>
        <NavLink to="/myPoll">MyPoll</NavLink>
      </li>
      <button onClick={logout}>logout</button>
    </ul>
  );
};
const AppRouter = () => (
  <Switch>
    <Route path="/pollList" component={PollList} />
    <Route path="/login" component={Login} />
    <Route path="/detail" component={Detail} />
    <Route path="/signup" component={SignUp} />
    <Route path="/createPoll" component={CreatePoll} />
    <Route path="/myPoll" component={MyPoll} />
  </Switch>
);

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Nav />
        <div className="container">
          <AppRouter />
        </div>
      </Router>
    );
  }
}

export default Main;
