import React, { Component } from "react";

import request from "../../helpers/request";

import View from "./view";

class Kpi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
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
    this.getKpi = this.getKpi.bind(this);
  }

  componentDidMount() {
    request("/users-history?week=29&year=2018")
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
    this.getKpi();
  }

  getKpi() {
    request("/kpis?week=29&year=2018")
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
        <View kpi={this.state.kpi} users={this.state.users} />
      </div>
    );
  }
}

export default Kpi;
