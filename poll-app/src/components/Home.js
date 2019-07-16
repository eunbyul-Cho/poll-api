import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <h2>YOU MUST LOGIN FIRST</h2>
    <Link to="login">
      <button id="puibic-toLoginBtn" type="submit">
        Click to Login
      </button>
    </Link>
  </>
);
export default Home;
