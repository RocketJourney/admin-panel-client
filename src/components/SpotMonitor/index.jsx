import React, { Component } from "react";
import PropTypes from "prop-types";

import request from "../../helpers/request";
import { logOut } from "../../helpers/auth";

import Loader from "../Loader";
import View from "./view";

import styles from "./styles.less";

export default class SpotMonitor extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      totalPages: 0,
      totalEntries: 0,
      pageSize: 15,
      activePage: 1,
      isFetchingData: true
    };
    this.getNextRequests = this.getNextRequests.bind(this);
  }

  componentDidMount() {
    request("/spot-monitor?page=1&page_size=15")
      .then(res =>
        this.setState({
          data: res.data.data,
          totalPages: res.data.total_pages,
          totalEntries: res.data.total_entries,
          pageSize: res.data.page_size,
          activePage: res.data.page_number,
          isFetchingData: false
        })
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

  getNextRequests(page) {
    request(`/spot-monitor?page=${page}&page_size=15`)
      .then(res =>
        this.setState({
          data: res.data.data,
          totalPages: res.data.total_pages,
          totalEntries: res.data.total_entries,
          pageSize: res.data.page_size,
          activePage: res.data.page_number,
          isFetchingData: false
        })
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
          <View
            data={this.state.data}
            totalPages={this.state.totalPages}
            totalEntries={this.state.totalEntries}
            pageSize={this.state.pageSize}
            activePage={this.state.activePage}
            getNextRequests={this.getNextRequests}
          />
        )}
      </div>
    );
  }
}
