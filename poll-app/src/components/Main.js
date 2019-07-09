import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import Login from "./Login.js";
import PollList from "./PollList.js";

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
  </Router>
);

export default Main;