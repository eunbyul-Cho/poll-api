import React from "react";
import PollItem from "./PollItem";

const MyPoll = props => {
  const { polls } = props;
  if (polls.length < 1) {
    return <div>No data</div>;
  }
  return (
    <>
      <h1>My Poll Lists</h1>
      <div className="poll-listContainer">
        <div className="listWrapper">
          {polls.map(poll => (
            <div key={poll.name} className="mypoll_item">
              <PollItem poll={poll} />

              <input
                type="submit"
                className="deleteBtn"
                onClick={() => props.deletePoll(poll.id)}
                value="DELETE"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyPoll;
