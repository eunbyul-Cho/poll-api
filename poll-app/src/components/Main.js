import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./Home.js";
import Login from "./Login.js";
import PollListContainer from "./PollListContainer.js";
import DetailContainer from "./DetailContainer.js";
import SignUp from "./SignUp";
import CreatePoll from "./CreatePoll";
import MyPoll from "./MyPoll";

const Nav = props => {
  const logout = () => {
    localStorage.removeItem("jwt");
  };
  //TODO
  const auth = props.isLoggedIn ? "logout" : "login";
  return (
    <ul>
      <li>
        <NavLink to="pollList">Polls</NavLink>
      </li>
      <li>
        <NavLink to={`/${auth}`}>{auth}</NavLink>
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
    <Route exact path="/" component={Home} />
    <Route path="/pollList" component={PollListContainer} />
    <Route path="/login" component={Login} />
    <Route path="/detail" component={DetailContainer} />
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
    let isLoggedIn = localStorage.getItem("jwt") ? true : false;

    return (
      <Router>
        <Nav isLoggedIn={isLoggedIn} />
        <div className="container">
          <AppRouter />
        </div>
      </Router>
    );
  }
}

export default Main;
