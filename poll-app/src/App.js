import React from "react";

import Main from "./components/Main";
import PollList from "./components/PollList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Poll</h1>
      </div>
      <Main />
    </div>
  );
}

export default App;
