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
  <Switch>
    <Route exact path="/home" component={PollList} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Main;
