import React, { Component } from "react";
import PropTypes from "prop-types";

import View from "./view";

import request from "../../helpers/request";
import { logOut } from "../../helpers/auth";

export default class CheckinRequest extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      checkinRequests: [],
      clubs: [],
      spots: [],
      error: false
    };
    this.getClubsAndSpots = this.getClubsAndSpots.bind(this);
  }

  componentDidMount() {
    request("/checkin-requests")
      .then(res =>
        this.setState({ checkinRequests: res.data.data }, this.getClubsAndSpots)
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

  render() {
    const { checkinRequests, clubs, spots } = this.state;
    return (
      <View checkinRequests={checkinRequests} clubs={clubs} spots={spots} />
    );
  }
}
