import React, { Component } from "react";
const Detail = props => {
  const { poll } = props.location.state;
  console.log(props.location.state.poll);
  return <div>{poll.name}</div>;
};

export default Detail;
