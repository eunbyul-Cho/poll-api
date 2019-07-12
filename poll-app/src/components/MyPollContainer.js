import React, { Component } from "react";
import api from "../lib/api.js";
import MyPoll from "./MyPoll";
import { connect } from "react-redux";
import { myPollsFetchData } from "../actions/index";
class MyPollContainer extends Component {
  state = {
    polls: []
  };

  deletePoll = pollId => {
    api
      .deletePoll(pollId)
      .then(response => {
        const updatedPolls = this.state.polls.filter(
          poll => poll.id !== pollId
        );
        this.setState({ polls: updatedPolls });
      })
      .catch(error => console.log(error));
  };
  getMyPoll = e => {
    api
      .getMyPoll()
      .then(response => {
        this.setState({ polls: response.data });
      })
      .catch(error => console.log(error));
  };
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return <MyPoll polls={this.props.polls} deletePoll={this.deletePoll} />;
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
    fetchData: () => dispatch(myPollsFetchData())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPollContainer);
