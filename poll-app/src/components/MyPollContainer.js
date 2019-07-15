import React, { Component } from "react";

import MyPoll from "./MyPoll";
import { connect } from "react-redux";
import { myPollsFetchData, deletePollData } from "../actions/index";

class MyPollContainer extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <MyPoll polls={this.props.polls} deletePoll={this.props.deletePoll} />
    );
  }
}
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
