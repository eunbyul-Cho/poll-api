import React from "react";

const Login = props => (
  <>
    <div className="inputContainer">
      <input
        type="text"
        placeholder="email"
        name="email"
        maxLength="50"
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        placeholder="password"
        name="password"
        maxLength="50"
        onChange={props.handleInputChange}
      />
      <button onClick={props.login}>submit</button>
    </div>
  </>
);

export default Login;
