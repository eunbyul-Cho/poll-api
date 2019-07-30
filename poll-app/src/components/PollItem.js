import React from "react";
import { Link } from "react-router-dom";

const PollItem = props => {
  const { poll } = props;
  return (
    <div className="poll_list_item">
      <Link to={{ pathname: "/detail", state: { pollData: poll } }}>
        <div className="poll_list_name-container">
          <div className="poll_list_name"> {poll.name}</div>
        </div>
      </Link>
    </div>
  );
};
export default PollItem;
