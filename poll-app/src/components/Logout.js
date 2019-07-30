import React from "react";

const Logout = props => {
  const { logout } = props;

  return (
    <>
      <div className="inputContainer">
        Are you sure you want to log out?
        <button className="logoutBtn" onClick={logout}>
          LOGOUT
        </button>
      </div>
    </>
  );
};

export default Logout;
