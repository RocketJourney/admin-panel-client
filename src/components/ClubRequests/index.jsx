import React, { Component } from "react";
import PropTypes from "prop-types";

import View from "./view";

import { logOut } from "../../helpers/auth";
import request from "../../helpers/request";

export default class ClubRequests extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      requests: [],
      totalPages: 0,
      totalEntries: 0,
      pageSize: 25,
      activePage: 1
    };
    this.archive = this.archive.bind(this);
    this.getNextRequests = this.getNextRequests.bind(this);
  }

  componentDidMount() {
    request("/club-requests")
      .then(res =>
        this.setState({
          requests: res.data.data,
          totalPages: res.data.total_pages,
          totalEntries: res.data.total_entries,
          pageSize: res.data.page_size,
          activePage: res.data.page_number
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
    request(`/club-requests?page=${page}`)
      .then(res =>
        this.setState({
          requests: res.data.data,
          totalPages: res.data.total_pages,
          totalEntries: res.data.total_entries,
          pageSize: res.data.page_size,
          activePage: res.data.page_number
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

  archive(id) {
    request(`/club-requests/${id}`, {
      method: "PATCH",
      data: { club_request: { read: true } }
    })
      .then(() => {
        this.props.getNotifications();
        const requests = this.state.requests.filter(r => r.id !== id);
        this.setState({ requests });
      })
      .catch(err => console.warn(err));
  }

  render() {
    return (
      <div>
        <View
          archive={this.archive}
          clubRequests={this.state.requests}
          totalPages={this.state.totalPages}
          totalEntries={this.state.totalEntries}
          pageSize={this.state.pageSize}
          activePage={this.state.activePage}
          getNextRequests={this.getNextRequests}
        />
      </div>
    );
  }
}
