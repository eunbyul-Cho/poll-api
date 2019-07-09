import React, { Component } from "react";
import axios from "axios";
class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: [],
      inputValue: ""
    };
  }
  getVotes() {
    let token = "Bearer " + localStorage.getItem("jwt");
    axios
      .get({
        method: "get",
        url: "/api/polls",
        headers: { Authorization: token }
      })
      .then(response => {
        this.setState({ polls: response.data });
      })
      .catch(error => console.log(error));
  }
  createVote = e => {
    if (e.key === "Enter" && !(e.target.value === "")) {
      axios
        .post("/polls", { polls: { name: e.target.value, user_id: 1 } })
        .then(response => {
          this.setState({
            inputValue: ""
          });
        })
        .catch(error => console.log(error));
    }
  };
  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  componentDidMount() {
    this.getVotes();
  }
  render() {
    return (
      <div>
        <div className="listWrapper">
          <ul className="taskList" />
        </div>
      </div>
    );
  }
}

export default Poll;
