import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class PollItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  getPollData() {
    let token = "Bearer " + localStorage.getItem("jwt");
    const { poll } = this.props;
    let targetId = poll.id;
    axios
      .get(`api/polls/${targetId}`, { headers: { Authorization: token } })
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => console.log(error));
  }
  componentDidMount() {
    this.getPollData();
  }
  render() {
    const data = this.state.data;
    return (
      <Link to={{ pathname: "/detail", state: { pollData: data } }}>
        <div>
          <div>{this.props.poll.name}</div>
        </div>
      </Link>
    );
  }
}

export default PollItem;
