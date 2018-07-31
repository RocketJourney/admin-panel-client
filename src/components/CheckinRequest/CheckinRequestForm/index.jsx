import React, { Component } from "react";

import request from "../../../helpers/request";

import CheckinRequestHeader from "./CheckinRequestHeader";
import CheckinRequestFooter from "./CheckinRequestFooter";
import CheckinRequestBody from "./CheckinRequestBody";
import Button from "../../Button";

import styles from "./styles.less";

export default class CheckinRequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetchingEvents: true,
      isFetchingUserStatus: true,
      events: props.checkinRequest.user.events,
      eventSelected: {},
      showEventForm: false,
      editedForm: false,
      requestId: { value: props.checkinRequest.id, modified: false }
    };
    this.closeEditForm = this.closeEditForm.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.showUpdateForm = this.showUpdateForm.bind(this);
    this.showNewEventForm = this.showNewEventForm.bind(this);
    this.refreshEvents = this.refreshEvents.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    this.sendData = this.sendData.bind(this);
    this.nextCheckin = this.nextCheckin.bind(this);
    this.archiveRequest = this.archiveRequest.bind(this);
    this.verifyCheckin = this.verifyCheckin.bind(this);
    this.setIsFetchingEvents = this.setIsFetchingEvents.bind(this);
    this.setEditedForm = this.setEditedForm.bind(this);
    this.fetchEvents = this.fetchEvents.bind(this);
    this.fetchUserInfo = this.fetchUserInfo.bind(this);
    this.getInfo = this.getInfo.bind(this);
  }

  getInfo() {
    this.fetchEvents();
    this.fetchUserInfo();
  }

  handleChange({ target: { name, value } }) {
    const input = this.state[name];
    input.value = value;
    input.modified = !(value == input.originalValue);
    this.setState({ [name]: input, editedForm: true }, this.setEditedForm);
  }

  handleChangeCheckbox({ target: { name } }) {
    this.setState(prevState => {
      prevState[name].value = !prevState[name].value;
      prevState[name].modified = !(
        prevState[name].value === prevState[name].originalValue
      );
      return { [name]: prevState[name] };
    }, this.setEditedForm);
  }

  setEditedForm() {
    const keys = [
      "userName",
      "statusId",
      "thisWeek",
      "weekDays",
      "cheatProgress",
      "dangerZone",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday"
    ];
    const result = keys.filter(key => this.state[key].modified);
    if (result.length) {
      this.setState({ editedForm: true });
    } else {
      this.setState({ editedForm: false });
    }
  }

  fetchUserInfo() {
    request(`/users/${this.props.checkinRequest.user.user_id}/status`)
      .then(res => {
        const user = res.data.data;
        this.setState({
          userId: {
            value: user.user_id,
            modified: false
          },
          weekScoresId: user.week_score_id,
          userName: {
            value: user.user_name,
            modified: false,
            originalValue: user.user_name
          },
          statusId: {
            value: user.status_id,
            modified: false,
            originalValue: user.status_id
          },
          thisWeek: {
            value: user.status.week_streak,
            modified: false,
            originalValue: user.status.week_streak
          },
          weekDays: {
            value: this.props.weekDays,
            modified: false,
            originalValue: this.props.weekDays
          },
          streak: {
            value: user.streak,
            modified: false,
            originalValue: user.streak
          },
          maxStreak: {
            value: user.max_streak,
            modified: false,
            originalValue: user.max_streak
          },
          cheatProgress: {
            value: user.cheat_progress,
            modified: false,
            originalValue: user.cheat_progress
          },
          cheatDays: {
            value: user.cheat_days,
            modified: false,
            originalValue: user.cheat_days
          },
          dangerZone: {
            value: user.status.danger_zone || false,
            modified: false,
            originalValue: user.status.danger_zone || false
          },
          monday: {
            value: user.monday,
            modified: false,
            originalValue: user.monday
          },
          tuesday: {
            value: user.tuesday,
            modified: false,
            originalValue: user.tuesday
          },
          wednesday: {
            value: user.wednesday,
            modified: false,
            originalValue: user.wednesday
          },
          thursday: {
            value: user.thursday,
            modified: false,
            originalValue: user.thursday
          },
          friday: {
            value: user.friday,
            modified: false,
            originalValue: user.friday
          },
          saturday: {
            value: user.saturday,
            modified: false,
            originalValue: user.saturday
          },
          sunday: {
            value: user.sunday,
            modified: false,
            originalValue: user.sunday
          },
          isFetchingUserStatus: false
        });
      })
      .catch(err => console.warn(err));
  }

  fetchEvents() {
    this.setState({ isFetchingEvents: true });
    request(`/users/${this.props.checkinRequest.user.user_id}/events`)
      .then(res =>
        this.setState({ events: res.data.data, isFetchingEvents: false })
      )
      .catch(err => console.warn(err));
  }

  closeEditForm() {
    this.setState({ showEventForm: false, eventSelected: {} });
  }

  showUpdateForm(id) {
    const [event] = this.state.events.filter(event => event.id === id);
    console.log(event);
    this.setState({ eventSelected: event, showEventForm: true });
  }

  refreshEvents(event, action) {
    const events = this.state.events;
    if (action === "new") {
      events.push(event);
      const sortedEvents = events.sort((first, second) => {
        const firstDate = new Date(first.inserted_at);
        const secondDate = new Date(second.inserted_at);
        if (firstDate < secondDate) {
          return 1;
        } else if (firstDate > secondDate) {
          return -1;
        }
        return 0;
      });
      this.setState({ events: sortedEvents, isFetchingEvents: false });
    } else {
      const filterEvents = events.filter(e => e.id !== event.id);
      filterEvents.push(event);
      const sortedEvents = filterEvents.sort((first, second) => {
        const firstDate = new Date(first.inserted_at);
        const secondDate = new Date(second.inserted_at);
        if (firstDate < secondDate) {
          return 1;
        } else if (firstDate > secondDate) {
          return -1;
        }
        return 0;
      });
      this.setState({ events: sortedEvents, isFetchingEvents: false });
    }
  }

  showNewEventForm() {
    const eventSelected = {
      id: undefined,
      user_id: this.props.checkinRequest.user.user_id,
      event_type_id: 1,
      club_id: this.props.checkinRequest.club.checkinClub,
      spot_id: this.props.checkinRequest.spot.id,
      inserted_at: this.props.checkinRequest.local_date
    };
    this.setState({ showEventForm: true, eventSelected });
  }

  deleteEvent(id) {
    console.log(id);
    request(`/events/${id}`, { method: "DELETE" })
      .then(() => {
        const events = this.state.events.filter(event => event.id !== id);
        this.setState({ events });
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

  sendData() {
    const data = {
      status_id: this.state.statusId.value,
      status: {
        week_streak: this.state.thisWeek.value,
        streak: this.state.streak.value,
        max_streak: this.state.maxStreak.value,
        danger_zone: this.state.dangerZone.value
      },
      week_score_id: this.state.weekScoresId,
      week_scores: {
        monday: this.state.monday.value,
        tuesday: this.state.tuesday.value,
        wednesday: this.state.wednesday.value,
        thursday: this.state.thursday.value,
        friday: this.state.friday.value,
        saturday: this.state.saturday.value,
        sunday: this.state.sunday.value,
        score: this.state.thisWeek.value
      },
      user_id: this.state.userId.value,
      user: {
        cheat_days: this.state.cheatDays.value,
        cheat_progress: this.state.cheatProgress.value
      }
    };

    request(`/check-in-requests/${this.state.requestId.value}`, {
      method: "PUT",
      data
    })
      .then(() => {
        this.setState(prevState => {
          prevState.requestId.modified = false;
          prevState.userId.modified = false;
          prevState.userName.modified = false;
          prevState.statusId.modified = false;
          prevState.thisWeek.modified = false;
          prevState.weekDays.modified = false;
          prevState.streak.modified = false;
          prevState.maxStreak.modified = false;
          prevState.cheatProgress.modified = false;
          prevState.cheatDays.modified = false;
          prevState.dangerZone.modified = false;
          prevState.monday.modified = false;
          prevState.tuesday.modified = false;
          prevState.wednesday.modified = false;
          prevState.thursday.modified = false;
          prevState.friday.modified = false;
          prevState.saturday.modified = false;
          prevState.sunday.modified = false;
          return {
            requestId: prevState.requestId,
            userId: prevState.userId,
            userName: prevState.userName,
            statusId: prevState.statusId,
            thisWeek: prevState.thisWeek,
            weekDays: prevState.weekDays,
            streak: prevState.streak,
            maxStreak: prevState.maxStreak,
            cheatProgress: prevState.cheatProgress,
            cheatDays: prevState.cheatDays,
            dangerZone: prevState.dangerZone,
            monday: prevState.monday,
            tuesday: prevState.tuesday,
            wednesday: prevState.wednesday,
            thursday: prevState.thursday,
            friday: prevState.friday,
            saturday: prevState.saturday,
            sunday: prevState.sunday
          };
        });
        this.verifyCheckin();
        this.nextCheckin();
      })
      .catch(err => {
        console.log(err);
        console.log("ya fallo");
      });
  }

  nextCheckin() {
    this.props.openNextCheckin(
      this.props.index,
      `#${this.props.checkinRequest.id}`,
      this.props.checkinRequest.id
    );
  }

  archiveRequest() {
    this.verifyCheckin();
    this.nextCheckin();
  }

  verifyCheckin() {
    const data = { user_check_in_request: { verified: true } };
    request(`/check-in-requests/${this.props.checkinRequest.id}`, {
      method: "PATCH",
      data
    });
  }

  setIsFetchingEvents(value) {
    this.setState({ isFetchingEvents: value });
  }

  render() {
    const { checkinRequest, clubs, spots } = this.props;

    return (
      <div>
        <Button
          id={`checkin-${checkinRequest.id}`}
          size="small"
          color="yellow"
          data-toggle="modal"
          onClick={this.getInfo}
          data-target={`#${checkinRequest.id}`}
        >
          Resolve
        </Button>

        <div
          className="modal fade"
          id={checkinRequest.id}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className={`modal-dialog ${styles.modalDialog}`} role="document">
            <div className={`modal-content ${styles.modalContent}`}>
              <CheckinRequestHeader
                checkinRequest={checkinRequest}
                sendData={this.sendData}
                archiveRequest={this.archiveRequest}
                editedForm={this.state.editedForm}
              />
              <div className="modal-body">
                <CheckinRequestBody
                  setIsFetchingEvents={this.setIsFetchingEvents}
                  events={this.state.events}
                  closeEditForm={this.closeEditForm}
                  deleteEvent={this.deleteEvent}
                  showUpdateForm={this.showUpdateForm}
                  showNewEventForm={this.showNewEventForm}
                  refreshEvents={this.refreshEvents}
                  handleChange={this.handleChange}
                  handleChangeCheckbox={this.handleChangeCheckbox}
                  checkinRequest={checkinRequest}
                  clubs={clubs}
                  spots={spots}
                  showEventForm={this.state.showEventForm}
                  eventSelected={this.state.eventSelected}
                  {...this.state}
                />
              </div>
              <CheckinRequestFooter user={checkinRequest.user} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
