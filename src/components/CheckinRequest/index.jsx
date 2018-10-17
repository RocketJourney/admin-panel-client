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
      fetchingData: true,
      updateResult: "",
      updateResultClass: "normal"
    };
    this.fetchCheckInRequests = this.fetchCheckInRequests.bind(this);
    this.updateCheckInRequest = this.updateCheckInRequest.bind(this);
    this.removeCheckInRequest = this.removeCheckInRequest.bind(this);
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

  updateCheckInRequest(id) {
    request(`/checkin-requests/${id}`, { method: "PATCH" })
      .then(res => {
        this.setState(
          { updateResult: res.data.message, updateResultClass: "success" },
          () => this.removeCheckInRequest(id)
        );
      })
      .catch(err => {
        this.setState(
          {
            updateResult: err.response.data.reason,
            updateResultClass: "normal"
          },
          () => this.removeCheckInRequest(id)
        );
      });
  }

  removeCheckInRequest(id) {
    const checkinRequests = this.state.checkinRequests.filter(
      checkIn => checkIn.id !== id
    );
    this.setState({ checkinRequests });
  }

  render() {
    const {
      fetchingData,
      checkinRequests,
      updateResult,
      updateResultClass
    } = this.state;

    if (fetchingData) {
      return <img className={styles.loader} src={loader} alt="loader" />;
    }
    return (
      <View
        updateResult={updateResult}
        updateResultClass={updateResultClass}
        checkinRequests={checkinRequests}
        updateCheckInRequest={this.updateCheckInRequest}
      />
    );
  }
}
