import React, { Component } from "react";
import api from "../lib/api.js";

import PollItem from "./PollItem";

class MyPoll extends Component {
  state = {
    polls: []
  };

  deletePoll = pollId => {
    api
      .deletePoll(pollId)
      .then(response => {
        const updatedPolls = this.state.polls.filter(
          poll => poll.id !== pollId
        );
        this.setState({ polls: updatedPolls });
      })
      .catch(error => console.log(error));
  };
  getMyPoll = e => {
    api
      .getMyPoll()
      .then(response => {
        this.setState({ polls: response.data });
      })
      .catch(error => console.log(error));
  };
  componentDidMount() {
    this.getMyPoll();
  }

  render() {
    return (
      <>
        <h1>My Poll List</h1>

        <div className="listWrapper">
          {this.state.polls.map(poll => (
            <div key={poll.name}>
              <PollItem poll={poll} handleItemClick={this.handleItemClick} />
              <button onClick={() => this.deletePoll(poll.id)}>delete</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default MyPoll;
