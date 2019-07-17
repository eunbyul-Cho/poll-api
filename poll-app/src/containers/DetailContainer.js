import React, { Component } from "react";
import Detail from "../components/Detail";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import * as actions from "../actions/index.js";

class DetailContainer extends Component {
  componentDidMount() {
    let { pollData } = this.props.location.state;
    let targetId = pollData.id;
    this.props.Actions.getCandidates(targetId);
  }

  render() {
    const voteToCandidate = this.props.Actions.vote;
    const { pollData } = this.props.location.state;

    let candidates = this.props.candidates;

    return (
      <Detail
        name={pollData.name}
        candidates={candidates}
        vote={voteToCandidate}
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
