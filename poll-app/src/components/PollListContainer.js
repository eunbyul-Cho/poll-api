import React, { Component } from "react";
import PollList from "./PollList";

import { connect } from "react-redux";
import { pollsFetchData } from "../actions/index";

class PollListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: [],
      inputValue: ""
    };
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return <PollList polls={this.props.polls} />;
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
    fetchData: () => dispatch(pollsFetchData())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollListContainer);
