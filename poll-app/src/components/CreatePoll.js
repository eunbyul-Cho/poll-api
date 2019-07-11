import React, { Component } from "react";
import axios from "axios";

class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      candidates: []
    };
  }

  createPoll = e => {
    let token = "Bearer " + localStorage.getItem("jwt");
    const request = {
      poll: {
        name: this.state.name,
        candidates_attributes: this.state.candidates
      }
    };
    console.log(request);

    axios
      .post("/api/polls", request, { headers: { Authorization: token } })
      .then(response => {
        console.log(response);
        this.setState({
          name: "",
          candidates: []
        });
      })
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
      <>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="pollName"
            maxLength="50"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input
            type="text"
            placeholder="candidate1"
            maxLength="50"
            onChange={e => this.handleCandidateChange(e, 0)}
          />
          <input
            type="text"
            placeholder="candidate2"
            maxLength="50"
            onChange={e => this.handleCandidateChange(e, 1)}
          />
          <input
            type="text"
            placeholder="candidate3"
            maxLength="50"
            onChange={e => this.handleCandidateChange(e, 2)}
          />
          <button onClick={this.createPoll}>submit</button>
        </div>
      </>
    );
  }
}

export default CreatePoll;
