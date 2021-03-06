import React from "react";

const SignUp = props => {
  const { handleInputChange, signup } = props;
  return (
    <>
      <div className="inputContainer">
        <input
          type="text"
          name="name"
          placeholder="name"
          maxLength="50"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          maxLength="50"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          maxLength="50"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="passwordConfirmation"
          maxLength="50"
          onChange={handleInputChange}
        />
        <input
          onClick={signup}
          className="submitBtn"
          value="SIGN UP"
          type="submit"
        />
      </div>
    </>
  );
};
export default SignUp;
