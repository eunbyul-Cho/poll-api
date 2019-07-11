import React, { Component, Fragment } from "react";
import axios from "axios";
import PollItem from "./PollItem";
class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: [],
      inputValue: ""
    };
  }
  getPolls() {
    let token = "Bearer " + localStorage.getItem("jwt");
    axios
      .get("api/polls", { headers: { Authorization: token } })
      .then(response => {
        this.setState({ polls: response.data });
      })
      .catch(error => console.log(error));
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  componentDidMount() {
    this.getPolls();
  }
  render() {
    return (
      <Fragment>
        <h1>Poll List</h1>

        <div className="listWrapper">
          {this.state.polls.map(poll => (
            <PollItem
              poll={poll}
              handleItemClick={this.handleItemClick}
              key={poll.name}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Poll;
