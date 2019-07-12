import React, { Component } from "react";

import PollItem from "./PollItem";
import api from "../lib/api.js";
class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: [],
      inputValue: ""
    };
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  componentDidMount() {
    api
      .getPolls()
      .then(data => this.setState({ polls: data }))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <>
        <h1>Poll List</h1>

        <div className="listWrapper">
          {this.state.polls.map(poll => (
            <PollItem
              poll={poll}
              handleItemClick={this.handleItemClick}
              key={poll.name}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Poll;
