import React, { Component } from "react";
import PropTypes from "prop-types";

import View from "./view";

import request from "../../helpers/request";
import { setTimeZone } from "../../helpers/utils";
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
  }

  render() {
    const { fetchingData } = this.state;

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
