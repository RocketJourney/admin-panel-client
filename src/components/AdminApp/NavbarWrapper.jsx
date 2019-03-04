import React, { Component } from "react";
import PropTypes from "prop-types";

import Navbar from "../Navbar";
import NavbarItem from "../Navbar/NavbarItem";
import LeftSideItems from "../Navbar/LeftSideItems";
import RightSideItems from "../Navbar/RightSideItems";

import logo from "../../img/group-copy.svg";
import styles from "./styles.less";

export default class NavbarWrapper extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      totalCheckInRequests: 0,
      totalFeedback: 0,
      totalLeads: 0,
      totalClubRequests: 0,
      totalVerifications: 0
    };
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    localStorage.removeItem("adminPanelToken");
    localStorage.removeItem("adminPanelTokenemail");
    this.props.history.push("/login");
  }

  render() {
    return (
      <Navbar logo={logo}>
        <LeftSideItems>
          <NavbarItem currentSection={this.props.location.pathname} section="/">
            <Link to="/" className="nav-option">
              Overview
            </Link>
          </NavbarItem>
          <NavbarItem
            currentSection={this.props.location.pathname}
            notification={this.state.totalCheckInRequests}
            section="/checkin-requests"
          >
            <Link to="/checkin-requests" className="nav-option">
              Check-in Requests
            </Link>
          </NavbarItem>
          <NavbarItem
            currentSection={this.props.location.pathname}
            notification={this.state.totalFeedback}
            section="/feedback"
          >
            <Link to="/feedback" className="nav-option">
              Feedback
            </Link>
          </NavbarItem>
          <NavbarItem
            currentSection={this.props.location.pathname}
            notification={this.state.totalLeads}
            section="/leads"
          >
            <Link to="/leads" className="nav-option">
              Leads
            </Link>
          </NavbarItem>
          <NavbarItem
            currentSection={this.props.location.pathname}
            notification={this.state.totalClubRequests}
            section="/club-requests"
          >
            <Link to="/club-requests" className="nav-option">
              Club Requests
            </Link>
          </NavbarItem>
          <NavbarItem
            currentSection={this.props.location.pathname}
            section="/spot-monitor"
          >
            <Link to="/spot-monitor" className="nav-option">
              Spot Monitor
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
    );
  }
}
