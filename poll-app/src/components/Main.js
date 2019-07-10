import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import Login from "./Login.js";
import PollList from "./PollList.js";
import Detail from "./Detail.js";
import SignUp from "./SignUp";
class Main extends Component {
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
const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink to="pollList">Polls</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );
};
const AppRouter = () => (
  <Switch>
    <Route path="/pollList" component={PollList} />
    <Route path="/login" component={Login} />
    <Route path="/detail" component={Detail} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);

export default Main;
