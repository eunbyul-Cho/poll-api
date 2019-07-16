import React, { Component } from "react";

import MyPoll from "../components/MyPoll";
import { connect } from "react-redux";

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
      <MyPoll
        polls={this.props.polls}
        deletePoll={this.props.Actions.deletePoll}
      />
    );
  }
}

export default connect(
  state => ({
    polls: state.polls.polls,
    loading: state.pender.pending["GET_MY_POLLS"],
    error: state.pender.failure["GET_MY_POLLS"]
  }),
  dispatch => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(MyPollContainer);
