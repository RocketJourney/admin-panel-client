import React, { Component } from "react";
import PropTypes from "prop-types";

import request from "../../helpers/request";
import { logOut } from "../../helpers/auth";

import Loader from "../Loader";
import View from "./view";

import styles from "./styles.less";

export default class Overview extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isFetchingData: true
    };
  }

  componentDidMount() {
    request("/overview")
      .then(res =>
        this.setState({ data: res.data.data, isFetchingData: false })
      )
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
        {this.state.isFetchingData ? (
          <Loader className={styles.loader} />
        ) : (
          <View data={this.state.data} />
        )}
      </div>
    );
  }
}
