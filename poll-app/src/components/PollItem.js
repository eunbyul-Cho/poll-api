import React from "react";
import { Link } from "react-router-dom";

const PollItem = props => {
  return (
    <Link to={{ pathname: "/detail", state: { pollData: props.poll } }}>
      <div>
        <div>{props.poll.name}</div>
      </div>
    </Link>
  );
};
export default PollItem;
