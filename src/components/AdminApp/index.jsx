import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch, Link } from "react-router-dom";

import request from "../../helpers/request";
import { logOut } from "../../helpers/auth";

import { Consumer, Provider } from "./notification_context";
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
import KPI from "../Kpi";

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

  shouldComponentUpdate(nextProps, nextState) {
    console.log("admin nextProps", nextProps);
    console.log("admin this.props", this.props);
    console.log("admin nextState", nextState);
    console.log("admin this.state", this.state);
    console.log(nextProps === this.props);
    console.log(nextState === this.state);
    // alert("parent");
    return true;
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
      <Provider
        value={{
          getNotifications: this.getNotifications
        }}
      >
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
            <NavbarItem
              currentSection={this.props.location.pathname}
              section="/spot-monitor"
            >
              <Link to="/kpis" className="nav-option">
                KPI'S
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
          <Route
            exact
            path="/checkin-requests"
            component={props => (
              <CheckinRequest getNotifications={this.getNotifications} />
            )}
          />
          <Route
            exact
            path="/feedback"
            component={props => (
              <Feedback getNotifications={this.getNotifications} {...props} />
            )}
          />
          <Route
            exact
            path="/leads"
            component={props => (
              <Leads getNotifications={this.getNotifications} {...props} />
            )}
          />
          <Route
            exact
            path="/club-requests"
            component={props => (
              <ClubRequests
                getNotifications={this.getNotifications}
                {...props}
              />
            )}
          />
          <Route exact path="/kpis" component={KPI} />
          <Route exact path="/spot-monitor" component={SpotMonitor} />
          <Route exact path="/" component={Overview} />
        </Switch>
      </Provider>
    );
  }
}
