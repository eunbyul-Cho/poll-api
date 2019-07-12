import React from "react";

const SignUp = props => (
  <>
    <div className="inputContainer">
      <input
        type="text"
        name="name"
        placeholder="name"
        maxLength="50"
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        maxLength="50"
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        maxLength="50"
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        name="passwordConfirmation"
        placeholder="passwordConfirmation"
        maxLength="50"
        onChange={props.handleInputChange}
      />
      <button onClick={props.signup}>submit</button>
    </div>
  </>
);
export default SignUp;
