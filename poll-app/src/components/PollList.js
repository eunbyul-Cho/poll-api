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
  getPolls() {
    let token = "Bearer " + localStorage.getItem("jwt");
    console.log(token);
    axios
      .get("api/polls", { headers: { Authorization: token } })
      .then(response => {
        this.setState({ polls: response.data });
        console.log(response);
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
      <div>
        <h1>Poll List</h1>
        <div className="listWrapper">
          <ul className="taskList" />
        </div>
      </div>
    );
  }
}

export default Poll;