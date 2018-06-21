import React, { Component } from "react";

import CheckIn from "./CheckIn";
import WeekSeparator from "./WeekSeparator";
import RjRun from "./RjRun";
import CheatDay from "./CheatDay";
import StreakStarted from "./StreakStarted";
import StreakLost from "./StreakLost";
import TeamEvents from "./TeamEvents";
import StravaBike from "./StravaBike";
import StravaRun from "./StravaRun";

import styles from "./styles.less";
import weekSeparator from "./img/i-week_separator.svg";
import run from "./img/i-run.svg";
import cheatDay from "./img/i-cheat_day.svg";
import teamEvent from "./img/i-team_event.svg";
import bike from "./img/i-bike.svg";
import strava from "./img/i-app-strava.png";

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.renderEvents = this.renderEvents.bind(this);
  }

  renderEvents(event) {
    switch (event.event_type_id) {
      case 1:
        return (
          <CheckIn
            id={event.id}
            updateAction={this.props.showUpdateForm}
            deleteAction={this.props.deleteEvent}
            key={event.id}
            badgeUrl={event.badge_url}
            name={event.name}
            insertedAt={event.inserted_at}
          />
        );
      case 2:
        return (
          <WeekSeparator
            id={event.id}
            updateAction={this.props.showUpdateForm}
            deleteAction={this.props.deleteEvent}
            key={event.id}
            insertedAt={event.inserted_at}
            weeks={event.duration}
            weekSeparator={weekSeparator}
          />
        );
      case 3:
        return (
          <RjRun
            id={event.id}
            updateAction={this.props.showUpdateForm}
            deleteAction={this.props.deleteEvent}
            badgeUrl={run}
            key={event.id}
            insertedAt={event.inserted_at}
            distance={event.distance}
            duration={event.duration}
          />
        );
      case 4:
        return (
          <CheatDay
            key={event.id}
            id={event.id}
            updateAction={this.props.showUpdateForm}
            deleteAction={this.props.deleteEvent}
            badgeUrl={cheatDay}
            insertedAt={event.inserted_at}
            duration={event.duration}
          />
        );
      case 5:
        return (
          <StreakStarted
            id={event.id}
            updateAction={this.props.showUpdateForm}
            deleteAction={this.props.deleteEvent}
            key={event.id}
            insertedAt={event.inserted_at}
          />
        );
      case 6:
        return (
          <StreakLost
            id={event.id}
            updateAction={this.props.showUpdateForm}
            deleteAction={this.props.deleteEvent}
            key={event.id}
            insertedAt={event.inserted_at}
          />
        );
      case 7:
        return (
          <TeamEvents
            id={event.id}
            updateAction={this.props.showUpdateForm}
            deleteAction={this.props.deleteEvent}
            badgeUrl={teamEvent}
            description={event.description}
            name={event.name}
            key={event.id}
            insertedAt={event.inserted_at}
          />
        );
      case 8:
        return (
          <StravaBike
            id={event.id}
            updateAction={this.props.showUpdateForm}
            deleteAction={this.props.deleteEvent}
            badgeUrl={bike}
            key={event.id}
            strava={strava}
            distance={event.distance}
            duration={event.duration}
            insertedAt={event.inserted_at}
          />
        );
      case 9:
        return (
          <StravaRun
            id={event.id}
            updateAction={this.props.showUpdateForm}
            deleteAction={this.props.deleteEvent}
            badgeUrl={run}
            key={event.id}
            strava={strava}
            distance={event.distance}
            duration={event.duration}
            insertedAt={event.inserted_at}
          />
        );
      default:
        return <p>Event cannot been displayed</p>;
    }
  }

  render() {
    return (
      <div id="events-wrapper" className="col-lg-12 col-md-12 col-sm-12">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <p className={styles["gray-bold-title"]}>Events</p>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12">
            <button
              className={styles.addEventButton}
              onClick={this.props.newEvent}
            >
              <i className="fa fa-plus-circle" />
              Add Event
            </button>
          </div>
        </div>
        <div className="row">
          <div
            id="events"
            className={`col-lg-12 col-md-12 col-sm-12 ${styles.events}`}
          >
            {this.props.events.map(this.renderEvents)}
          </div>
        </div>
      </div>
    );
  }
}
