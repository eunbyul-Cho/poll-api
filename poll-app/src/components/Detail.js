import React from "react";
import Chart from "./Chart";

const Detail = props => {
  const { name, candidates, vote } = props;
  return (
    <>
      <div className="detail-header">{name}</div>
      <div className="candidates-container">
        <div className="candidates-result-list">
          {candidates.map(candidate => (
            <div key={candidate.name} className="candidate-item">
              <div>{`${candidate.name}:${candidate.count}`}</div>
              <button className="vote-btn" onClick={() => vote(candidate.id)}>
                투표하기
              </button>
            </div>
          ))}
        </div>
        <div className="chart">
          <Chart candidates={candidates} />
        </div>
        <div />
      </div>
    </>
  );
};

export default Detail;
