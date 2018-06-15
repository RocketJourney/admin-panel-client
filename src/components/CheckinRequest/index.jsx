import React, { Component } from "react";
import PropTypes from "prop-types";

import View from "./view";

import request from "../../helpers/request";

export default class CheckinRequest extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      checkinRequests: []
    };
  }

  componentDidMount() {
    request("/checkin-requests")
      .then(res => this.setState({ checkinRequests: res.data.data }))
      .catch(err => console.warn(err));
  }

  render() {
    return <View checkinRequests={this.state.checkinRequests} />;
  }
}
