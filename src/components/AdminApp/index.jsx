import React, { Component } from "react";
import PropTypes from "prop-types";

import { Route, Switch, Link } from "react-router-dom";

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
              section="/"
            >
              <Link to="/" className="nav-option">
                Overview
              </Link>
            </NavbarItem>
            <NavbarItem
              currentSection={this.props.location.pathname}
              section="/checkin-requests"
            >
              <Link to="/checkin-requests" className="nav-option">
                Check-in Requests
              </Link>
            </NavbarItem>
            <NavbarItem
              currentSection={this.props.location.pathname}
              section="/feedback"
            >
              <Link to="/feedback" className="nav-option">
                Feedback
              </Link>
            </NavbarItem>
            <NavbarItem
              currentSection={this.props.location.pathname}
              section="/leads"
            >
              <Link to="/leads" className="nav-option">
                Leads
              </Link>
            </NavbarItem>
            <NavbarItem
              currentSection={this.props.location.pathname}
              section="/club-requests"
            >
              <Link to="/club-requests" className="nav-option">
                Club Requests
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
          <Route exact path="/" component={Overview} />
        </Switch>
      </div>
    );
  }
}
