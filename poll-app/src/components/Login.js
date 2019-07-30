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
          type="password"
          placeholder="password"
          name="password"
          maxLength="50"
          onChange={handleInputChange}
        />
        <input
          onClick={login}
          type="submit"
          className="submitBtn"
          value="SUBMIT"
        />
      </div>
    </>
  );
};

export default Login;
