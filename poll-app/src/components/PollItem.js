import React from "react";

const PollItem = props => {
  const { poll } = props;

  return <div>{poll.name}</div>;
};
export default PollItem;
