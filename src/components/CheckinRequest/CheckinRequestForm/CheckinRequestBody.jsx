import React, { Component } from "react";

import request from "../../../helpers/request";

import Events from "./Events";
import EventsForm from "./Events/EventsForm";
import UserStatusForm from "./UserStatusForm";

import styles from "./styles.less";
import loader from "../../../img/spinner-100px.gif";

export default class CheckinRequestBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      events,
      closeEditForm,
      deleteEvent,
      showUpdateForm,
      showNewEventForm,
      refreshEvents,
      handleChange,
      handleChangeCheckbox,
      checkinRequest,
      clubs,
      spots,
      showEventForm,
      eventSelected,
      isFetchingEvents,
      setIsFetchingEvents,
      isFetchingUserStatus
    } = this.props;

    return (
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          {isFetchingEvents ? (
            <img
              className={`align-middle ${styles.loader}`}
              src={loader}
              alt="loading..."
            />
          ) : (
            <Events
              events={events}
              deleteEvent={deleteEvent}
              showUpdateForm={showUpdateForm}
              newEvent={showNewEventForm}
            />
          )}
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          {showEventForm === true && (
            <EventsForm
              setIsFetchingEvents={setIsFetchingEvents}
              refreshEvents={refreshEvents}
              checkinSpotName={checkinRequest.spot.name}
              checkinLocal={checkinRequest.local_date}
              checkinClub={checkinRequest.club.id}
              checkinSpot={checkinRequest.spot.id}
              clubs={clubs}
              spots={spots}
              eventSelected={eventSelected}
              closeForm={closeEditForm}
              closeAfterUpdateEvent={closeEditForm}
              userId={checkinRequest.user.user_id}
            />
          )}
          {isFetchingUserStatus === true && (
            <img
              className={`align-middle ${styles.loader}`}
              src={loader}
              alt="loading..."
            />
          )}
          {showEventForm === false &&
            isFetchingUserStatus === false && (
              <UserStatusForm
                {...this.props}
                reason={checkinRequest.reason}
                weekDays={0}
                handleChange={handleChange}
                handleChangeCheckbox={handleChangeCheckbox}
              />
            )}
        </div>
      </div>
    );
  }
}
