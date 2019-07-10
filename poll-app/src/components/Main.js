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
        <div className="container">
          <AppRouter />
        </div>
      </Router>
    );
  }
}
const AppRouter = () => (
  <Router>
    <Route exact path="/pollList" component={PollList} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/detail" component={Detail} />
    <Route exact path="/signup" component={SignUp} />
  </Router>
);

export default Main;
