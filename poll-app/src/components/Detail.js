import React, { Component } from "react";
import axios from "axios";
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  getPollData() {
    let token = "Bearer " + localStorage.getItem("jwt");
    const { poll } = this.props.location.state;
    let targetId = poll.id;
    axios
      .get(`api/polls/${targetId}`, { headers: { Authorization: token } })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.log(error));
  }
  componentDidMount() {
    this.getPollData();
  }
  render() {
    const { poll } = this.props.location.state;

    return (
      <div>
        <div>{poll.name}</div>
      </div>
    );
  }
}

export default Detail;
