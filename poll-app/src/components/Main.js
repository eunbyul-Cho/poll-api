import React, { Component } from "react";
import axios from "axios";
class DbContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: [],
      inputValue: ""
    };
  }
  getVotes() {
    axios
      .get("/polls")
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
        <div className="inputContainer">
          <input
            className="taskInput"
            type="text"
            placeholder="Add a vote"
            maxLength="50"
            onKeyPress={this.createVote}
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </div>
        <div className="listWrapper">
          <ul className="taskList" />
        </div>
      </div>
    );
  }
}

export default DbContainer;
