import React, { Component } from "react";
import Detail from "../components/Detail";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import * as actions from "../actions/index.js";

class DetailContainer extends Component {
  fetchData = async () => {
    const { Actions } = this.props;
    let { pollData } = this.props.location.state;
    let targetId = pollData.id;
    try {
      await Actions.getCandidates(targetId);
    } catch (e) {
      console.log(e);
    }
  };

  voteToCandidate = async candidateId => {
    const { Actions } = this.props;

    try {
      await Actions.vote(candidateId);
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { pollData } = this.props.location.state;

    let candidates = this.props.candidates;

    return (
      <Detail
        name={pollData.name}
        candidates={candidates}
        vote={this.voteToCandidate}
      />
    );
  }
}

export default connect(
  state => ({
    candidates: state.candidates.candidates,
    loading: state.pender.pending["GET_CANDIDATES"],
    error: state.pender.failure["GET_CANDIDATES"]
  }),
  dispatch => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(DetailContainer);
