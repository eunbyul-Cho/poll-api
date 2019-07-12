import React from "react";

const SignUp = props => (
  <>
    <div className="inputContainer">
      <input
        type="text"
        placeholder="name"
        maxLength="50"
        value={props.values.name}
        onChange={props.handleNameChange}
      />
      <input
        type="text"
        placeholder="email"
        maxLength="50"
        value={props.values.email}
        onChange={props.handleEmailChange}
      />
      <input
        type="text"
        placeholder="password"
        maxLength="50"
        value={props.values.password}
        onChange={props.handlePasswordChange}
      />
      <input
        type="text"
        placeholder="passwordConfirmation"
        maxLength="50"
        value={props.values.passwordConfirmation}
        onChange={props.handlePasswordConfirmationChange}
      />
      <button onClick={props.signup}>submit</button>
    </div>
  </>
);
export default SignUp;
