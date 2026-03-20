import React, { Component } from "react";
import PropTypes from "prop-types";

import request from "../../helpers/request";
import { logOut } from "../../helpers/auth";

import View from "./view";
import Loader from "../Loader";

import styles from "./styles.less";

export default class Leads extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      leads: [],
      isFetchingData: true
    };
    this.archive = this.archive.bind(this);
  }

  componentDidMount() {
    console.log("did mount again");
    request("/leads")
      .then(res =>
        this.setState({ leads: res.data.data, isFetchingData: false })
      )
      .catch(err => {
        if (err.response && err.response.status === 401) {
          logOut();
          this.props.history.replace("/login");
        } else {
          this.setState({ error: true, isFetchingData: false });
        }
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("=====>");
    console.log(nextProps);
    console.log(this.props);
    console.log(nextState);
    console.log(this.state);
    console.log(nextProps === this.props);
    console.log(nextState === this.state);
    return true;
  }

  archive(id) {
    const data = { lead: { closed: true } };
    request(`/leads/${id}`, { method: "PATCH", data })
      .then(() => {
        this.props.getNotifications();
        const leads = this.state.leads.filter(l => l.id != id);
        this.setState({ leads, isFetchingData: false });
      })
      .catch(err => {
        alert("Ocurrió un error");
        console.warn(err);
      });
  }

  render() {
    console.log("render leads");
    if (this.state.error) {
      return (
        <div className={styles.loader}>
          Failed to load data. Please check your connection and try again.
        </div>
      );
    }
    return (
      <div>
        {this.state.isFetchingData ? (
          <Loader className={styles.loader} />
        ) : (
          <View leads={this.state.leads} archive={this.archive} />
        )}
      </div>
    );
  }
}
