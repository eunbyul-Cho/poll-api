import React, { Component } from "react";

import PollItem from "./PollItem";
import api from "../lib/api.js";

const PollList = props => (
  <>
    <h1>Poll List</h1>

    <div className="listWrapper">
      {props.polls.map(poll => (
        <PollItem
          poll={poll}
          handleItemClick={this.handleItemClick}
          key={poll.name}
        />
      ))}
    </div>
  </>
);
export default PollList;
