import React, { Component } from "react";
import PropTypes from "prop-types";

import { Route, Switch, Link } from "react-router-dom";

import Login from "../Login";
import Navbar from "../Navbar";
import NavbarItem from "../Navbar/NavbarItem";
import LeftSideItems from "../Navbar/LeftSideItems";
import RightSideItems from "../Navbar/RightSideItems";
import CheckinRequest from "../CheckinRequest";

import styles from "./styles.less";
import logo from "../../img/group-copy.svg";

export default class AdminApp extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    localStorage.removeItem("adminPanelToken");
    localStorage.removeItem("adminPanelTokenemail");
    this.props.history.push("/login");
  }

  render() {
    return (
      <div>
        <Navbar logo={logo}>
          <LeftSideItems>
            <NavbarItem
              currentSection={this.props.location.pathname}
              section="/checkin-requests"
            >
              <Link to="/checkin-requests" className="nav-option">
                Checkin Requests
              </Link>
            </NavbarItem>
          </LeftSideItems>
          <RightSideItems>
            <button
              onClick={this.signOut}
              className={`nav-option ${styles.sigout}`}
            >
              signout
            </button>
          </RightSideItems>
        </Navbar>
        <Switch>
          <Route exact path="/checkin-requests" component={CheckinRequest} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    );
  }
}
