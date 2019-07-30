import React from "react";

const CreatePoll = props => {
  const { handleInputChange, createPoll, handleModalClose } = props;
  return (
    <div className="create_poll_container">
      <div className="modalContainer">
        <button className="close" onClick={handleModalClose}>
          X
        </button>
        <h1>CREATE POLL</h1>
        <input
          className="create_poll"
          type="text"
          placeholder="PollName"
          name="name"
          maxLength="50"
          onChange={handleInputChange}
        />
        <input
          className="create_poll"
          type="text"
          placeholder="Candidate1"
          name="candidate1"
          maxLength="50"
          onChange={handleInputChange}
        />
        <input
          className="create_poll"
          type="text"
          placeholder="Candidate2"
          name="candidate2"
          maxLength="50"
          onChange={handleInputChange}
        />
        <input
          className="create_poll"
          type="text"
          placeholder="Candidate3"
          name="candidate3"
          maxLength="50"
          onChange={handleInputChange}
        />
        <input
          type="submit"
          onClick={createPoll}
          className="submitBtn"
          value="SUBMIT"
        />
      </div>
    </div>
  );
};
export default CreatePoll;
