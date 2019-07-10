import React, { Component } from "react";
import Chart from "./Chart";
import axios from "axios";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: this.props.location.state.pollData.candidates
    };
  }
  vote = candidateId => {
    //TODO: PUT 확인받기
    let token = "Bearer " + localStorage.getItem("jwt");
    axios
      .put(
        `api/candidates/${candidateId}`,
        { id: candidateId },
        {
          headers: { Authorization: token }
        }
      )
      .then(response => {
        console.log(response.data);
        this.setState({ candidates: response.data });
      })
      .catch(error => console.log(error));
  };
  render() {
    const { pollData } = this.props.location.state;
    return (
      <div>
        <div className="detail-header">{pollData.name}</div>
        <div className="candidates-container">
          <div>
            {this.state.candidates.map(candidate => (
              <div key={candidate.name} className="candidate-container">
                <div>{`${candidate.name}:${candidate.count}`}</div>
                <button
                  className="vote-btn"
                  onClick={() => this.vote(candidate.id)}
                >
                  투표하기
                </button>
              </div>
            ))}
          </div>
          <Chart candidates={this.state.candidates} />
          <div />
        </div>
      </div>
    );
  }
}

export default Detail;
