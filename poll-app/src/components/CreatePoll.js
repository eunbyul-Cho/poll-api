import React from "react";

const CreatePoll = props => (
  <>
    <div className="inputContainer">
      <input
        type="text"
        placeholder="pollName"
        name="name"
        maxLength="50"
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        placeholder="candidate1"
        name="candidate1"
        maxLength="50"
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        placeholder="candidate2"
        name="candidate2"
        maxLength="50"
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        placeholder="candidate3"
        name="candidate3"
        maxLength="50"
        onChange={props.handleInputChange}
      />
      <button onClick={props.createPoll}>submit</button>
    </div>
  </>
);

export default CreatePoll;
