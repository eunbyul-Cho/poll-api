import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index.js";

import PollList from "./PollList";
import { pollsFetchData } from "../actions/index";

class PollListContainer extends Component {
  fetchData = async () => {
    const { Actions } = this.props;

    try {
      await Actions.getPolls();
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return <PollList polls={this.props.polls} />;
  }
}

export default connect(
  state => ({
    polls: state.polls.polls,
    loading: state.pender.pending["PENDER_TEST"],
    error: state.pender.failure["PENDER_TEST"]
  }),
  dispatch => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(PollListContainer);
