import React, { Component } from "react";
import PropTypes from "prop-types";

import View from "./view";
import Loader from "../Loader";
import request from "../../helpers/request";
import { logOut } from "../../helpers/auth";

import styles from "./styles.less";

export default class Feedback extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      isFetchingData: true,
      feedback: []
    };
    this.archive = this.archive.bind(this);
  }

  componentDidMount() {
    request("/feedback")
      .then(res =>
        this.setState({ feedback: res.data.data, isFetchingData: false })
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

  archive(id) {
    const data = { feedback: { read: true } };
    request(`/feedback/${id}`, { method: "PATCH", data })
      .then(() => {
        this.props.getNotifications();
        const feedback = this.state.feedback.filter(f => f.id != id);
        this.setState({ feedback });
      })
      .catch(err => {
        console.warn(err);
        alert("Hubo un error");
      });
  }

  render() {
    const { isFetchingData, feedback } = this.state;
    if (isFetchingData) {
      return <Loader atl="cargando..." className={styles.loader} />;
    }
    return <View feedback={feedback} archive={this.archive} />;
  }
}
