import React, { Component } from "react";

import MyPoll from "./MyPoll";
import { connect } from "react-redux";
import { myPollsFetchData, deletePollData } from "../actions/index";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index.js";

class MyPollContainer extends Component {
  fetchData = async () => {
    const { Actions } = this.props;

    try {
      await Actions.getMyPolls();
      console.log("data is fetched!");
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount() {
    //  this.props.fetchData();
    this.fetchData();
  }

  render() {
    return (
      <MyPoll polls={this.props.polls} deletePoll={this.props.deletePoll} />
    );
  }
}
/*
const mapStateToProps = state => {
  return {
    polls: state.polls,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(myPollsFetchData()),
    deletePoll: pollId => dispatch(deletePollData(pollId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPollContainer);
*/
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
