import React, { Component } from "react";

import CreatePoll from "./CreatePoll";
import { connect } from "react-redux";
import { createPoll } from "../actions/index";

class CreatePollContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      candidates: []
    };
  }

  /// handle Input change로 할 것인가...

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
    const request = {
      poll: {
        name: this.state.name,
        candidates_attributes: this.state.candidates
      }
    };
    return (
      <CreatePoll
        name={this.state.name}
        handleNameChange={this.handleNameChange}
        handleCandidateChange={this.handleCandidateChange}
        createPoll={() => this.props.createPoll(request)}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    polls: state.polls
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createPoll: request => dispatch(createPoll(request))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePollContainer);
