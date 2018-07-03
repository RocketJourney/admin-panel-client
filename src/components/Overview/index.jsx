import React, { Component } from "react";
import PropTypes from "prop-types";

import request from "../../helpers/request";
import { logOut } from "../../helpers/auth";

import View from "./view";

export default class Overview extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    request("/overview")
      .then(res => this.setState({ data: res.data.data }))
      .catch(err => {
        if (err.response.status === 401) {
          logOut();
          this.props.history.replace("/login");
        } else {
          this.setState({ error: true });
        }
      });
  }

  render() {
    return (
      <div>
        <View data={this.state.data} />
      </div>
    );
  }
}
