import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import View from "./view";
import { loggedIn } from "../../helpers/auth";

export default class Login extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.domain = "http://localhost:4000/api";
    this.state = {
      email: "",
      password: ""
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    if (loggedIn()) {
      this.props.history.push("/checkin-requests");
      return true;
    }
    return false;
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value
    });
  }

  login(e) {
    e.preventDefault();
    axios
      .post("/auth", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        localStorage.adminPanelToken = res.data.data.jwt;
        localStorage.adminPanelTokenemail = res.data.data.user;
        this.props.history.push("/checkin-requests");
      })
      .catch(err => {
        console.warn(err);
        alert("Invalid user/password llllll");
      });
  }

  render() {
    return (
      <div>
        <View handleChange={this.handleChange} login={this.login} />
      </div>
    );
  }
}
