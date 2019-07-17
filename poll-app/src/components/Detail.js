import React from "react";
import Chart from "./Chart";

const Detail = props => {
  const { name, candidates, vote } = props;
  return (
    <>
      <div className="detail-header">{name}</div>
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
    </>
  );
};

export default Detail;
