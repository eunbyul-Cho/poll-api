import React from "react";
import Chart from "./Chart";

const Detail = props => (
  <>
    <div className="detail-header">{props.pollData.name}</div>
    <div className="candidates-container">
      <div>
        {props.candidates.map(candidate => (
          <div key={candidate.name} className="candidate-container">
            <div>{`${candidate.name}:${candidate.count}`}</div>
            <button
              className="vote-btn"
              onClick={() => props.vote(candidate.id)}
            >
              투표하기
            </button>
          </div>
        ))}
      </div>
      <Chart candidates={props.candidates} />
      <div />
    </div>
  </>
);
export default Detail;
