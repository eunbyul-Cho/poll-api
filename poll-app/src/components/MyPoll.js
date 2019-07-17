import React from "react";
import PollItem from "./PollItem";

const MyPoll = props => {
  const { polls } = props;
  if (polls.length < 1) {
    return <div>No data</div>;
  }
  return (
    <>
      <h1>My Poll List</h1>

      <div className="listWrapper">
        {polls.map(poll => (
          <div key={poll.name}>
            <PollItem poll={poll} />
            <button onClick={() => props.deletePoll(poll.id)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyPoll;
