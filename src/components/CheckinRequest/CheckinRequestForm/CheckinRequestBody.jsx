import React, { Component } from "react";

import request from "../../../helpers/request";

import Events from "./Events";
import EventsForm from "./Events/EventsForm";

export default class CheckinRequestBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: props.checkinRequest.user.events,
      eventSelected: {},
      showEventForm: false
    };
    this.closeEditForm = this.closeEditForm.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.showUpdateForm = this.showUpdateForm.bind(this);
  }

  closeEditForm() {
    this.setState({ showEventForm: false, eventSelected: {} });
  }

  showUpdateForm(id) {
    console.log(id);
    const [event] = this.state.events.filter(event => event.id === id);
    console.log(events);
    console.log(event);
    this.setState({ eventSelected: event, showEventForm: true });
  }

  deleteEvent(id) {
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

  render() {
    return (
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <Events
            events={this.state.events}
            deleteEvent={this.deleteEvent}
            showUpdateForm={this.showUpdateForm}
          />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          {this.state.showEventForm === true && (
            <EventsForm
              checkinSpotName={this.props.checkinRequest.spot.name}
              checkinLocal={this.props.checkinRequest.local_date}
              checkinClub={this.props.checkinRequest.club.id}
              checkinSpot={this.props.checkinRequest.spot.id}
              clubs={this.props.clubs}
              spots={this.props.spots}
              eventSelected={this.state.eventSelected}
              closeForm={this.closeEditForm}
              closeAfterUpdateEvent={this.closeEditForm}
              userId={0}
              fetch_events={() => "s"}
            />
          )}
        </div>
      </div>
    );
  }
}
