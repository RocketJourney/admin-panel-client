import React, { Component } from "react";

import View from "./view";

import request from "../../helpers/request";
import loader from "../../img/spinner-100px.gif";

class ChallengeVerifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      verifications: [],
      fetchingData: true
    };
    this.fetchVerifications = this.fetchVerifications.bind(this);
    this.removeVerification = this.removeVerification.bind(this);
  }

  componentDidMount() {
    this.fetchVerifications();
  }

  fetchVerifications() {
    request("/challenge-verifications")
      .then(res => {
        this.setState({ verifications: res.data.data, fetchingData: false });
      })
      .catch(err => {
        if (err.response.status === 401) {
          logOut();
          this.props.history.replace("/login");
        } else {
          this.setState({ error: true });
        }
      });
  }

  removeVerification(id) {
    const verifications = this.state.verifications.filter(
      verification => verification.id !== id
    );
    this.setState({ verifications });
  }

  render() {
    return (
      <View
        remove_verification={this.removeVerification}
        verifications={this.state.verifications}
      />
    );
  }
}

export default ChallengeVerifications;
