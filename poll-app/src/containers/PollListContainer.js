import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index.js";

import PollList from "../components/PollList";

class PollListContainer extends Component {
  componentDidMount() {
    const { getPolls } = this.props.Actions;
    getPolls();
  }
  render() {
    const { polls } = this.props;
    return <PollList polls={polls} />;
  }
}

export default connect(
  state => ({
    polls: state.polls.polls,
    loading: state.pender.pending["GET_POLLS"],
    error: state.pender.failure["GET_POLLS"]
  }),
  dispatch => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(PollListContainer);
