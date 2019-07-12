import React, { Component } from "react";

import Detail from "./Detail";
import api from "../lib/api.js";

class DetailContainer extends Component {
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
      <Detail pollData={pollData} candidates={candidates} vote={this.vote} />
    );
  }
}

export default DetailContainer;
