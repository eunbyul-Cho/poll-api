import React, { Component } from "react";
import Chart from "./Chart";

import api from "../lib/api.js";
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      candidates: []
    };
  }

  vote = candidateId => {
    api.vote(candidateId).then(data => this.setState({ candidates: data }));
  };

  componentDidMount() {
    let { pollData } = this.props.location.state;
    let targetId = pollData.id;

    api
      .getCandidates(targetId)
      .then(data =>
        this.setState({
          candidates: data.candidates,
          isLoading: false
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    const { pollData } = this.props.location.state;

    const candidates = this.state.candidates;

    if (this.state.isLoading) {
      return <div>loading</div>;
    }
    return (
      <>
        <div className="detail-header">{pollData.name}</div>
        <div className="candidates-container">
          <div>
            {candidates.map(candidate => (
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
          <Chart candidates={candidates} />
          <div />
        </div>
      </>
    );
  }
}

export default Detail;
