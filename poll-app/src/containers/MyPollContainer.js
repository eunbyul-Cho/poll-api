import React, { Component } from "react";

import MyPoll from "../components/MyPoll";
import { connect } from "react-redux";
import { myPollsFetchData, deletePollData } from "../actions/index";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index.js";

class MyPollContainer extends Component {
  fetchData = async () => {
    const { Actions } = this.props;

    try {
      await Actions.getMyPolls();
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <MyPoll polls={this.props.polls} deletePoll={this.props.deletePoll} />
    );
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
)(MyPollContainer);
