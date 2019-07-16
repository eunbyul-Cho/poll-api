import React from "react";
import PollItem from "./PollItem";

const PollList = props => {
  if (props.polls.length < 1) {
    return <div>No data</div>;
  }
  return (
    <>
      <h1>Poll List</h1>

      <div className="listWrapper">
        {props.polls.map(poll => <PollItem poll={poll} key={poll.name} />)}
      </div>
    </>
  );
};
export default PollList;
