import React, { Component } from "react";

import api from "../lib/api.js";

import { Route, Redirect } from "react-router";

const Login = props => (
  <>
    <div className="inputContainer">
      <input
        type="text"
        placeholder="email"
        maxLength="50"
        value={props.email}
        onChange={props.handleEmailChange}
      />
      <input
        type="text"
        placeholder="password"
        maxLength="50"
        value={props.password}
        onChange={props.handlePasswordChange}
      />
      <button onClick={props.login}>submit</button>
    </div>
  </>
);

export default Login;
