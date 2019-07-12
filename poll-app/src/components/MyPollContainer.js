import React, { Component } from "react";
import axios from "axios";
import api from "../lib/api.js";

import MyPoll from "./MyPoll";
import PollItem from "./PollItem";

class MyPollContainer extends Component {
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
    return <MyPoll polls={this.state.polls} deletePoll={this.deletePoll} />;
  }
}

export default MyPollContainer;
