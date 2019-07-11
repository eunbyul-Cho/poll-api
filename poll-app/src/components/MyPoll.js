import React, { Component } from "react";
import axios from "axios";

class MyPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: []
    };
  }
  getUser = e => {
    let token = "Bearer " + localStorage.getItem("jwt");
    axios
      .get("/currentuser", { headers: { Authorization: token } })
      .then(response => {
        console.log(response);
        localStorage.setItem("currentUser", response.data.id);
      })
      .catch(error => console.log(error));
  };
  componentDidMount() {
    this.getUser();
  }
  render() {
    return <div>mypoll</div>;
  }
}

export default MyPoll;
