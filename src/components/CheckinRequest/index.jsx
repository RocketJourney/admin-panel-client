import React, { Component } from "react";
import PropTypes from "prop-types";

import View from "./view";

import request from "../../helpers/request";
import { setTimeZone } from "../../helpers/utils";
import { logOut } from "../../helpers/auth";
import loader from "../../img/spinner.svg";
import styles from "./styles.less";

export default class CheckinRequest extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      checkinRequests: [],
      clubs: [],
      spots: [],
      fetchingData: true,
      error: false
    };
    this.getClubsAndSpots = this.getClubsAndSpots.bind(this);
    this.openNextCheckin = this.openNextCheckin.bind(this);
    setTimeZone();
  }

  componentDidMount() {
    this.getClubsAndSpots();
    request("/checkin-requests")
      .then(res =>
        this.setState({ checkinRequests: res.data.data, fetchingData: false })
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

  getClubsAndSpots() {
    request("/events/clubs/")
      .then(res =>
        this.setState({
          clubs: res.data.data.clubs,
          spots: res.data.data.spots
        })
      )
      .catch(err => console.warn(err));
  }

  openNextCheckin(prevIndex, prevModalId, prevCheckinId) {
    $(prevModalId).modal("hide");
    const checkins = this.state.checkinRequests.filter(checkin => {
      return checkin.id !== prevCheckinId;
    });
    this.setState({ checkinRequests: checkins });
    if (checkins.length > 0) {
      console.log(`#${checkins[0].id}`);
      $(`#${checkins[0].id}`).modal("show");
    }
  }

  render() {
    const { checkinRequests, clubs, spots, fetchingData } = this.state;

    if (fetchingData) {
      return <img className={styles.loader} src={loader} alt="loader" />;
    }
    return (
      <View
        checkinRequests={checkinRequests}
        clubs={clubs}
        openNextCheckin={this.openNextCheckin}
        spots={spots}
      />
    );
  }
}
