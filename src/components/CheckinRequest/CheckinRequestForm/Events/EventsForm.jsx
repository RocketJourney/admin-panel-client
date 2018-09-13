import React, { Component } from "react";
import PropTypes from "prop-types";
import DayPicker from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";

import request from "../../../../helpers/request";

import Button from "../../../Button";
import Input from "../../../Input";
import Select from "../../../Select";
import styles from "./styles.less";

export default class EventsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
      eventTypeOptions: [
        { value: 1, optionLabel: "Check-in" },
        { value: 2, optionLabel: "Week Separator" },
        { value: 3, optionLabel: "Rj Run" },
        { value: 4, optionLabel: "Cheat Day Event" },
        { value: 5, optionLabel: "Streak Started" },
        { value: 6, optionLabel: "Streak Lost" },
        { value: 7, optionLabel: "Team Event" },
        { value: 8, optionLabel: "Strava Bike" },
        { value: 9, optionLabel: "Strava Run" }
      ],
      event_type_id: {
        value: props.eventSelected.event_type_id || 1,
        modified: false,
        originalValue: props.eventSelected.event_type_id || 0
      },
      club: {
        value: this.props.eventSelected.club_id || this.props.checkinClub,
        modified: false,
        originalValue: this.props.eventSelected.club_id || 0
      },
      spot: {
        value: this.props.eventSelected.spot_id || this.props.checkinSpot,
        modified: false,
        originalValue: this.props.eventSelected.spot_id || null
      },
      inserted_at: {
        value: this.props.eventSelected.inserted_at || this.props.checkinLocal,
        modified: false,
        originalValue: this.props.eventSelected.inserted_at
      },
      weeks: {
        value: this.props.eventSelected.weeks || 0,
        modified: false,
        originalValue: this.props.eventSelected.weeks || 0
      },
      duration: {
        value: this.props.eventSelected.duration || 0,
        modified: false,
        originalValue: this.props.eventSelected.duration || 0
      },
      clubs: [],
      spots: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleChangeClub = this.handleChangeClub.bind(this);
    this.sendData = this.sendData.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.createEvent = this.createEvent.bind(this);
  }

  componentDidMount() {
    const spots = this.props.spots.map(spot => ({
      value: spot.id,
      optionLabel: spot.name
    }));
    this.setState({ spots });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.eventSelected.id !== this.props.eventSelected.id) {
      const { event_type_id, club, spot, weeks, duration } = this.state;
      event_type_id.value = this.props.eventSelected.event_type_id;
      event_type_id.modified = false;
      event_type_id.originalValue = this.props.eventSelected.event_type_id;
      club.value = 0;
      club.modified = false;
      club.originalValue = 0;
      spot.value = this.props.eventSelected.spot_id;
      spot.modified = false;
      spot.originalValue = this.props.eventSelected.spot_id;
      inserted_at.value = this.props.eventSelected.inserted_at;
      inserted_at.modified = false;
      inserted_at.originalValue = this.props.eventSelected.inserted_at;
      weeks.value = this.props.eventSelected.weeks;
      weeks.modified = false;
      weeks.originalValue = this.props.eventSelected.weeks;
      duration.value = this.props.eventSelected.duration;
      duration.modified = false;
      duration.originalValue = this.props.eventSelected.duration;
      this.setState({
        event_type_id,
        club,
        spot,
        weeks,
        duration,
        inserted_at
      });
    }
  }

  handleChange({ target: { value, name } }) {
    this.setState(prevState => {
      prevState[name].value = value;
      prevState[name].modified = !(value == prevState[name].originalValue);
      return { [name]: prevState[name], disabled: false };
    });
  }

  handleDayChange(day) {
    this.setState(prevState => {
      prevState.inserted_at.value = value;
      prevState.inserted_at.modified = !(
        day == prevState.inserted_at.originalValue
      );
      return { inserted_at: prevState.inserted_at };
    });
  }

  handleChangeClub({ target: { value } }) {
    this.setState(prevState => {
      prevState.spot.value = spots[0].value;
      return {
        club: prevState.club,
        spots,
        disabled: false,
        spot: prevState.spot
      };
    });
  }

  sendData() {
    this.props.setIsFetchingEvents(true);
    if (this.props.eventSelected.id === undefined) {
      this.createEvent();
    } else {
      this.updateEvent();
    }
  }

  createEvent() {
    const data = {
      event: {
        user_id: this.props.userId,
        event_type_id: this.state.event_type_id.value,
        club_id: this.state.club.value,
        spot_id: this.state.spot.value,
        inserted_at: this.state.inserted_at.value,
        weeks: this.state.weeks.value,
        duration: this.state.duration.value
      }
    };
    this.props.closeAfterUpdateEvent();
    request("/events", { method: "POST", data: data })
      .then(res => {
        this.props.refreshEvents(res.data.data, "new");
      })
      .catch(err => {
        console.warn(err);
      });
  }

  updateEvent() {
    const data = {
      id: this.props.eventSelected.id,
      event: {
        event_type_id: this.state.event_type_id.value,
        club_id: this.state.club.value,
        spot_id: this.state.spot.value,
        inserted_at: this.state.inserted_at.value,
        weeks: this.state.weeks.value,
        duration: this.state.duration.value
      }
    };
    if (data["event"]["spot_id"] === "0" || data["event"]["spot_id"] === 0) {
      data["event"]["spot_id"] = null;
    }
    this.props.closeAfterUpdateEvent();
    request(`/events/${this.props.eventSelected.id}`, {
      method: "PUT",
      data: data
    })
      .then(res => {
        this.props.refreshEvents(res.data.data, "update");
      })
      .catch(err => {
        console.warn(err);
      });
  }

  renderForm(id) {
    const event = parseInt(id);
    switch (event) {
      case 1:
        return (
          <div>
            <div className="row">
              <div className="col-lg-12">
                <Select
                  selectedValue={this.state.spot.value}
                  handleChange={this.handleChange}
                  modified={this.state.spot.modified}
                  id="spot"
                  name="spot"
                  options={this.state.spots}
                  defaultOption={"Select a Location"}
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="row">
              <div className="col-lg-12">
                <Input
                  id="weeks"
                  name="weeks"
                  value={`${this.state.weeks.value}`}
                  onChange={this.handleChange}
                  placeholder={"Week Number"}
                  inputClassName={this.state.weeks.modified ? "edited" : ""}
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <div className="row">
              <div className="col-lg-12">
                <Input
                  id="duration"
                  name="duration"
                  value={`${this.state.duration.value}`}
                  onChange={this.handleChange}
                  placeholder={"Cheat Days Used"}
                  inputClassName={this.state.duration.modified ? "edited" : ""}
                />
              </div>
            </div>
          </div>
        );
      default:
        break;
    }
  }

  render() {
    return (
      <div id="events-form-wrapper" className={styles.eventsFormWrapper}>
        <div className={`row ${styles.editFormHeader}`}>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <p className={`${styles.editEvent} ${styles["gray-bold-title"]}`}>
              Edit Event
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Button color="red" size="small" onClick={this.props.closeForm}>
              Cancel
            </Button>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Button
              color="green"
              size="small"
              disabled={this.state.disabled}
              onClick={this.sendData}
            >
              Create Event
            </Button>
          </div>
        </div>
        <div id="events-form" className={styles.eventsForm}>
          <div className="row">
            <div className="col-lg-12">
              <Select
                selectedValue={this.state.event_type_id.value}
                handleChange={this.handleChange}
                modified={this.state.event_type_id.modified}
                id="event_type_id"
                name="event_type_id"
                options={this.state.eventTypeOptions}
                defaultOption={"Select Event Type"}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">Event Parameters</div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Input
                id="inserted_at"
                name="inserted_at"
                value={`${this.state.inserted_at.value}`}
                onChange={this.handleChange}
                placeholder={"YYYY-MM-DDTHH:MM:SS"}
                inputClassName={this.state.inserted_at.modified ? "edited" : ""}
              />
            </div>
          </div>
          {this.renderForm(this.state.event_type_id.value)}
        </div>
      </div>
    );
  }
}
