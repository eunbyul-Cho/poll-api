import React, { Component } from "react";
import api from "../lib/api.js";
import CreatePoll from "./CreatePoll";

class CreatePollContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      candidates: []
    };
  }

  createPoll = e => {
    const request = {
      poll: {
        name: this.state.name,
        candidates_attributes: this.state.candidates
      }
    };
    api
      .createPoll(request)
      .then(data =>
        this.setState({
          name: "",
          candidates: []
        })
      )
      .catch(error => console.log(error));
  };
  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleCandidateChange = (e, i) => {
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
    return (
      <CreatePoll
        name={this.state.name}
        handleNameChange={this.handleNameChange}
        handleCandidateChange={this.handleCandidateChange}
        createPoll={this.createPoll}
      />
    );
  }
}

export default CreatePollContainer;
