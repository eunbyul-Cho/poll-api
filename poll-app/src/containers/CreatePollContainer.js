import React, { Component } from "react";

import CreatePoll from "../components/CreatePoll";
import { connect } from "react-redux";
import { createPoll } from "../actions/index";

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
    ];
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
