import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch, Link } from "react-router-dom";

import request from "../../helpers/request";

// import Login from "../Login";
import Navbar from "../Navbar";
import NavbarItem from "../Navbar/NavbarItem";
import LeftSideItems from "../Navbar/LeftSideItems";
import RightSideItems from "../Navbar/RightSideItems";
import CheckinRequest from "../CheckinRequest";
import Feedback from "../Feedback";
import Leads from "../Leads";
import ClubRequests from "../ClubRequests";
import Overview from "../Overview";
import SpotMonitor from "../SpotMonitor";

import styles from "./styles.less";
import logo from "../../img/group-copy.svg";

export default class AdminApp extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      totalCheckInRequests: 0,
      totalFeedback: 0,
      totalLeads: 0,
      totalClubRequests: 0
    };
    this.getNotifications = this.getNotifications.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    this.getNotifications();
  }

  getNotifications() {
    request("/notifications")
      .then(res =>
        this.setState({
          totalCheckInRequests: res.data.data.check_in_requests,
          totalFeedback: res.data.data.feedback,
          totalLeads: res.data.data.leads,
          totalClubRequests: res.data.data.club_requests
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
              section="/"
            >
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
        <Switch>
          <Route exact path="/checkin-requests" component={CheckinRequest} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/leads" component={Leads} />
          <Route exact path="/club-requests" component={ClubRequests} />
          <Route exact path="/spot-monitor" component={SpotMonitor} />
          <Route exact path="/" component={Overview} />
        </Switch>
      </div>
    );
  }
}
