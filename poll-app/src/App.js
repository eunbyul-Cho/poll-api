import React from "react";

import Main from "./components/Main";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Poll</h1>
      </div>
      <Login />
    </div>
  );
}

export default App;
