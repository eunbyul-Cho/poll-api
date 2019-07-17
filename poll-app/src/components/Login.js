import React from "react";

const Login = props => {
  const { handleInputChange, login } = props;
  return (
    <>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="email"
          name="email"
          maxLength="50"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          maxLength="50"
          onChange={handleInputChange}
        />
        <button onClick={login}>submit</button>
      </div>
    </>
  );
};

export default Login;
