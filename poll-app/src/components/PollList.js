import React from "react";
import PollItem from "./PollItem";

const PollList = props => {
  const { polls } = props;
  let isLoggedIn = localStorage.jwt ? true : false;
  if (!isLoggedIn) {
    return <div>LogIn first</div>;
  }
  if (polls.length < 1) {
    return <div>No data</div>;
  }
  return (
    <>
      <h1>Poll List</h1>

      <div className="listWrapper">
        {polls.map(poll => (
          <PollItem poll={poll} key={poll.name} />
        ))}
      </div>
    </>
  );
};
export default PollList;
