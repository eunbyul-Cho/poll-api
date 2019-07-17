import React from "react";

import { Link } from "react-router-dom";
const Nav = props => {
  const auth = props.isLoggedIn ? "logout" : "login";

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="pollList">Polls</Link>
      </li>
      <li>
        <Link
          to={{
            pathname: `/${auth}`,
            props: { toggleLogIn: props.toggleLogIn }
          }}
        >
          {auth}{" "}
        </Link>
      </li>
      <li>
        <Link to="/signup">SignUp</Link>
      </li>
      <li>
        <Link to="/createPoll">CreatePoll</Link>
      </li>
      <li>
        <Link to="/myPoll">MyPoll</Link>
      </li>
    </ul>
  );
};

export default Nav;
