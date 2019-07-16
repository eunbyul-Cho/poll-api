import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index.js";

import PollList from "../components/PollList";

class PollListContainer extends Component {
  ///TODO
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
    loading: state.pender.pending["GET_POLLS"],
    error: state.pender.failure["GET_POLLS"]
  }),
  dispatch => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(PollListContainer);
