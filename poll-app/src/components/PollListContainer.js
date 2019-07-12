import React, { Component } from "react";

import PollList from "./PollList";

import api from "../lib/api.js";

class PollListContainer extends Component {
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
    return <PollList polls={this.state.polls} />;
  }
}

export default PollListContainer;

/*
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

*/
