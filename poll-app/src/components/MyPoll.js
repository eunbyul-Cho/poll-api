import React, { Component } from "react";
import axios from "axios";
import PollItem from "./PollItem";

class MyPoll extends Component {
  state = {
    polls: []
  };

  deletePoll = pollId => {
    let token = "Bearer " + localStorage.getItem("jwt");
    axios
      .delete(`api/polls/${pollId}`, { headers: { Authorization: token } })
      .then(response => {
        const updatedPolls = this.state.polls.filter(
          poll => poll.id !== pollId
        );
        this.setState({ polls: updatedPolls });
      })
      .catch(error => console.log(error));
  };
  getMyPoll = e => {
    let token = "Bearer " + localStorage.getItem("jwt");
    axios
      .get("/api/mypoll", { headers: { Authorization: token } })
      .then(response => {
        this.setState({ polls: response.data });
      })
      .catch(error => console.log(error));
  };
  componentDidMount() {
    this.getMyPoll();
  }

  render() {
    return (
      <>
        <h1>My Poll List</h1>

        <div className="listWrapper">
          {this.state.polls.map(poll => (
            <div key={poll.name}>
              <PollItem poll={poll} handleItemClick={this.handleItemClick} />
              <button onClick={() => this.deletePoll(poll.id)}>delete</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default MyPoll;
