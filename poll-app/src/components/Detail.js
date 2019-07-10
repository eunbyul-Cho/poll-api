import React from "react";
import Chart from "./Chart";
import axios from "axios";

const Detail = props => {
  const { pollData } = props.location.state;
  const candidates = pollData.candidates;

  const vote = candidateId => {
    //TODO: PUT  고치기

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
        console.log(response);
      })
      .catch(error => console.log(error));
  };
  return (
    <div>
      <div className="detail-header">{pollData.name}</div>
      <div className="candidates-container">
        <div>
          {candidates.map(candidate => (
            <div key={candidate.name} className="candidate-container">
              <div>{`${candidate.name}:${candidate.count}`}</div>
              <button className="vote-btn" onClick={() => vote(candidate.id)}>
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
};
export default Detail;
