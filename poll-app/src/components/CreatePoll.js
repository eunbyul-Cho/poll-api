import React from "react";

const CreatePoll = props => {
  const { handleInputChange, createPoll } = props;
  return (
    <>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="pollName"
          name="name"
          maxLength="50"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="candidate1"
          name="candidate1"
          maxLength="50"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="candidate2"
          name="candidate2"
          maxLength="50"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="candidate3"
          name="candidate3"
          maxLength="50"
          onChange={handleInputChange}
        />
        <button onClick={createPoll}>submit</button>
      </div>
    </>
  );
};
export default CreatePoll;
