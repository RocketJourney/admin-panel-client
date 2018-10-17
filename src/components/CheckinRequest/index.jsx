import React, { Component } from "react";

import View from "./view";

import request from "../../helpers/request";
import { logOut } from "../../helpers/auth";
import loader from "../../img/spinner-100px.gif";
import styles from "./styles.less";

export default class CheckinRequest extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      checkinRequests: [],
      fetchingData: true
    };
    this.fetchCheckInRequests = this.fetchCheckInRequests.bind(this);
  }

  componentDidMount() {
    this.fetchCheckInRequests();
  }

  fetchCheckInRequests() {
    request("/checkin-requests")
      .then(res => {
        this.setState({ checkinRequests: res.data.data, fetchingData: false });
      })
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
    const { fetchingData, checkinRequests } = this.state;

    if (fetchingData) {
      return <img className={styles.loader} src={loader} alt="loader" />;
    }
    return <View checkinRequests={checkinRequests} />;
  }
}
