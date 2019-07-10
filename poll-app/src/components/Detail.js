import React from "react";

const Detail = props => {
  const { pollData } = props.location.state;
  const candidates = pollData.candidates;
  return (
    <div>
      <div>{pollData.name}</div>
      <div>
        <div>
          {candidates.map(candidate => (
            <div key={candidate.name}>
              <div>{candidate.name}</div>
              <div>{candidate.count}</div>
            </div>
          ))}
        </div>
        <div />
      </div>
    </div>
  );
};
export default Detail;
