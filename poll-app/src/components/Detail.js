import React, { Component } from "react";
import Chart from "./Chart";
import axios from "axios";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      candidates: {}
    };
  }
  getCandidate() {
    // props 정보는 id, name만 포함하므로 poll id를 가지고 candidate정보를 불러옴
    let { pollData } = this.props.location.state;
    let targetId = pollData.id;
    let token = "Bearer " + localStorage.getItem("jwt");

    axios
      .get(`api/polls/${targetId}`, { headers: { Authorization: token } })
      .then(response => {
        this.setState({
          candidates: response.data.candidates,
          isLoading: false
        });
      })
      .catch(error => console.log(error));
  }

  vote = candidateId => {
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
        this.setState({ candidates: response.data });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.getCandidate();
  }

  render() {
    const { pollData } = this.props.location.state;
    const candidates = this.state.candidates;

    if (this.state.isLoading) {
      return <div>loading</div>;
    }
    return (
      <div>
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
      </div>
    );
  }
}

export default Detail;
