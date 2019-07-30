import React from "react";

import { Link } from "react-router-dom";
const Nav = props => {
  const auth = props.isLoggedIn ? "Logout" : "Login";

  return (
    <nav
      className="
    nav-container"
    >
      <div className="nav-item">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-item">
        <Link to="pollList">Polls</Link>
      </div>
      <div className="nav-item">
        <Link
          to={{
            pathname: `/${auth}`,
            props: { toggleLogIn: props.toggleLogIn }
          }}
        >
          {auth}{" "}
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/signup">SignUp</Link>
      </div>
      <div className="nav-item">
        <Link to="/createPoll">CreatePoll</Link>
      </div>
      <div className="nav-item">
        <Link to="/myPoll">MyPolls</Link>
      </div>
    </nav>
  );
};

export default Nav;
