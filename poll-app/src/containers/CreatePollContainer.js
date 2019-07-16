import React, { Component } from "react";

import CreatePoll from "../components/CreatePoll";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import * as actions from "../actions/index.js";
class CreatePollContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      candidate1: "",
      candidate2: "",
      candidate3: ""
    };
  }

  /// handle Input change로 할 것인가... ????

  handleInputChange = event => {
    console.log(event.target);
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  };

  handleNameChange = e => {
    e.persist();
    this.setState({ name: e.target.value });
  };
  handleCandidateChange = (e, i) => {
    e.persist();
    if (!this.state.candidates[i]) {
      let newCandidate = { name: e.target.value, count: 0 };
      let updatedCandidates = this.state.candidates.concat(newCandidate);
      this.setState({ candidates: updatedCandidates });
    } else {
      let targetCandidate = this.state.candidates[i];
      targetCandidate.name = e.target.value;
    }
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
    return (
      <CreatePoll
        name={this.state.name}
        handleInputChange={this.handleInputChange}
        handleNameChange={this.handleNameChange}
        handleCandidateChange={this.handleCandidateChange}
        createPoll={() => this.props.Actions.createPoll(request)}
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
