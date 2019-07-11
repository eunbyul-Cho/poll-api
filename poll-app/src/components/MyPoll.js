import React, { Component, Fragment } from "react";
import axios from "axios";
import PollItem from "./PollItem";

class MyPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: []
    };
  }
  deletePoll = pollId => {
    console.log(pollId);

    let token = "Bearer " + localStorage.getItem("jwt");
    axios
      .delete(`api/polls/${pollId}`, { headers: { Authorization: token } })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };
  getMyPoll = e => {
    let token = "Bearer " + localStorage.getItem("jwt");
    axios
      .get("/api/mypoll", { headers: { Authorization: token } })
      .then(response => {
        console.log(response);
        this.setState({ polls: response.data });
      })
      .catch(error => console.log(error));
  };
  componentDidMount() {
    this.getMyPoll();
  }

  render() {
    return (
      <Fragment>
        <h1>Poll List</h1>

        <div className="listWrapper">
          {this.state.polls.map(poll => (
            <Fragment>
              <PollItem
                poll={poll}
                handleItemClick={this.handleItemClick}
                key={poll.name}
              />
              <button onClick={() => this.deletePoll(poll.id)}>delete</button>
            </Fragment>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default MyPoll;
