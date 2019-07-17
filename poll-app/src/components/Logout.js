import React from "react";

const Logout = props => {
  const { logout } = props;

  return (
    <>
      <div className="inputContainer">
        Are you sure you want to log out?
        <button onClick={logout}>logout???</button>
      </div>
    </>
  );
};

export default Logout;
