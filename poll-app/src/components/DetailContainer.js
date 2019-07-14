import React, { Component } from "react";

import Detail from "./Detail";
import api from "../lib/api.js";
import { connect } from "react-redux";
import { candidatesFetchData } from "../actions/index";

class DetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      candidates: []
    };
  }

  vote = candidateId => {
    api.vote(candidateId).then(data => this.setState({ candidates: data }));
  };

  componentDidMount() {
    let { pollData } = this.props.location.state;
    let targetId = pollData.id;
    this.props.fetchData(targetId);
  }

  render() {
    const { pollData } = this.props.location.state;

    const candidates = this.props.candidates;

    return (
      <Detail pollData={pollData} candidates={candidates} vote={this.vote} />
    );
  }
}

const mapStateToProps = state => {
  return {
    candidates: state.candidates,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: targetId => dispatch(candidatesFetchData(targetId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailContainer);
