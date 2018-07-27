import React, { Component } from "react";
import moment from "moment";

import request from "../../helpers/request";

import View from "./view";

class Kpi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      date: moment(),
      week: moment().format("W"),
      year: moment().format("YYYY"),
      actualKpi: {
        connected_users_count: 0,
        connected_users_pct: 0,
        id: 0,
        joined_team_count: 0,
        joined_team_pct: 0,
        new_users_count: 0,
        started_journey_count: 0,
        started_journey_pct: 0,
        week: 3,
        year: 2018
      },
      kpi: {
        connected_users_count: 0,
        connected_users_pct: 0,
        id: 2,
        joined_team_count: 0,
        joined_team_pct: 0,
        new_users_count: 1,
        started_journey_count: 0,
        started_journey_pct: 0,
        week: 29,
        year: 2018
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.getKpi = this.getKpi.bind(this);
    this.getUses = this.getUsers.bind(this);
    this.refreshInfo = this.refreshInfo.bind(this);
  }

  componentDidMount() {
    this.getUsers(this.state.week, this.state.year);
    this.getKpi(this.state.week, this.state.year);
  }

  refreshInfo(e) {
    e.preventDefault();
    const week = this.state.week || moment().format("W");
    const year = this.state.year || moment().format("YYYY");
    this.getUsers(week, year);
    this.getKpi(week, year);
  }

  handleChange({ target: { name: name, value: value } }) {
    this.setState({ [name]: value });
  }

  getUsers(week, year) {
    request(`/users-history?week=${week}&year=${year}`)
      .then(res => this.setState({ users: res.data.data }))
      .catch(err => {
        if (err.response.status === 401) {
          logOut();
          this.props.history.replace("/login");
        } else {
          alert("Ocurrió un error");
          this.setState({ error: true });
        }
      });
  }

  getKpi(week, year) {
    request(`/kpis?week=${week}&year=${year}`)
      .then(res => this.setState({ kpi: res.data.data }))
      .catch(err => {
        if (err.response.status === 401) {
          logOut();
          this.props.history.replace("/login");
        } else {
          alert("Ocurrió un error");
          this.setState({ error: true });
        }
      });
  }

  render() {
    return (
      <div>
        <View
          kpi={this.state.kpi}
          users={this.state.users}
          currentWeek={this.state.week}
          currentYear={this.state.year}
          handleChange={this.handleChange}
          refreshInfo={this.refreshInfo}
        />
      </div>
    );
  }
}

export default Kpi;
