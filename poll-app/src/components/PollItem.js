import React from "react";
import { Link } from "react-router-dom";

const PollItem = props => {
  const { poll } = props;
  return (
    <Link to={{ pathname: "/detail", state: { pollData: poll } }}>
      <div>
        <div>{poll.name}</div>
      </div>
    </Link>
  );
};
export default PollItem;
