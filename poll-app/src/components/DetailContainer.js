import React, { Component } from "react";
import Detail from "./Detail";

import { connect } from "react-redux";
import { candidatesFetchData, voteData } from "../actions/index";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index.js";

class DetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      candidates: []
    };
  }
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
  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { pollData } = this.props.location.state;

    const candidates = this.props.candidates;

    return (
      <Detail
        pollData={pollData}
        candidates={candidates}
        vote={this.props.vote}
      />
    );
  }
}
/*
const mapStateToProps = state => {
  return {
    candidates: state.candidates,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: targetId => dispatch(candidatesFetchData(targetId)),
    vote: candidateId => dispatch(voteData(candidateId))
  };
};
*/

export default connect(
  state => ({
    candidates: state.candidates.candidates,
    loading: state.pender.pending["PENDER_TEST"],
    error: state.pender.failure["PENDER_TEST"]
  }),
  dispatch => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(DetailContainer);
