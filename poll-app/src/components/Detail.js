import React from "react";
import Chart from "./Chart";
const Detail = props => {
  const { pollData } = props.location.state;
  const candidates = pollData.candidates;
  return (
    <div>
      <div className="detail-header">{pollData.name}</div>
      <div className="candidates-container">
        <div>
          {candidates.map(candidate => (
            <div key={candidate.name} classNmae="candidate-container">
              <div>{`${candidate.name}:${candidate.count}`}</div>
              <button className="vote-btn">투표하기</button>
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
