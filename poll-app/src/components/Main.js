import React from "react";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Home from "./Home.js";
import LoginContainer from "../containers/LoginContainer";
import PollListContainer from "../containers/PollListContainer.js";
import DetailContainer from "../containers/DetailContainer.js";
import SignUpContainer from "../containers/SignUpContainer";
import CreatePollContainer from "../containers/CreatePollContainer";
import MyPollContainer from "../containers/MyPollContainer";

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
    <Route path="/login" component={LoginContainer} />
    <Route path="/detail" component={DetailContainer} />
    <Route path="/signup" component={SignUpContainer} />
    <Route path="/createPoll" component={CreatePollContainer} />
    <Route path="/myPoll" component={MyPollContainer} />
  </Switch>
);
const Main = props => {
  let isLoggedIn = localStorage.getItem("jwt") ? true : false;

  return (
    <Router>
      <Nav isLoggedIn={isLoggedIn} />
      <div className="container">
        <AppRouter />
      </div>
    </Router>
  );
};

export default Main;
