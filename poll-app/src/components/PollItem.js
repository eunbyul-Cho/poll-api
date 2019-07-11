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

  render() {
    const data = this.state.data;
    return (
      <Link to={{ pathname: "/detail" }}>
        <div>
          <div>{this.props.poll.name}</div>
        </div>
      </Link>
    );
  }
}

export default PollItem;
