import React, { Component } from "react";

import CreatePoll from "../components/CreatePoll";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import * as actions from "../actions/index.js";
class CreatePollContainer extends Component {
  state = {
    name: "",
    candidate1: "",
    candidate2: "",
    candidate3: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  };

  render() {
    const candidates_attributes = [
      { name: this.state.candidate1, count: 0 },
      { name: this.state.candidate2, count: 0 },
      { name: this.state.candidate3, count: 0 }
    ].filter(candidate => candidate.name);

    const request = {
      poll: {
        name: this.state.name,
        candidates_attributes
      }
    };
    const { name } = this.state;
    const { createPoll } = this.props.Actions;
    return (
      <CreatePoll
        name={name}
        handleInputChange={this.handleInputChange}
        handleNameChange={this.handleNameChange}
        handleCandidateChange={this.handleCandidateChange}
        createPoll={() =>
          createPoll(request).then(this.props.history.push("/pollList"))
        }
      />
    );
  }
}

export default connect(
  state => ({
    polls: state.polls.polls,
    loading: state.pender.pending["CREATE_POLL"],
    error: state.pender.failure["CREATE_POLL"]
  }),
  dispatch => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(CreatePollContainer);
