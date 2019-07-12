import React, { Component } from "react";
import api from "../lib/api.js";
const CreatePoll = props => (
  <>
    <div className="inputContainer">
      <input
        type="text"
        placeholder="pollName"
        maxLength="50"
        value={props.name}
        onChange={props.handleNameChange}
      />
      <input
        type="text"
        placeholder="candidate1"
        maxLength="50"
        onChange={e => props.handleCandidateChange(e, 0)}
      />
      <input
        type="text"
        placeholder="candidate2"
        maxLength="50"
        onChange={e => props.handleCandidateChange(e, 1)}
      />
      <input
        type="text"
        placeholder="candidate3"
        maxLength="50"
        onChange={e => props.handleCandidateChange(e, 2)}
      />
      <button onClick={props.createPoll}>submit</button>
    </div>
  </>
);

export default CreatePoll;
