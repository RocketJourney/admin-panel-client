import React, { Component } from "react";

import request from "../../helpers/request";

import View from "./view";

class Kpi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
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
  }

  render() {
    return (
      <div>
        <View users={this.state.users} />
      </div>
    );
  }
}

export default Kpi;
