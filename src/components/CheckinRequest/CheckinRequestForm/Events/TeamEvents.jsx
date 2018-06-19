import React from "react";

import styles from "./styles.less";

const TeamEvents = ({
  badgeUrl,
  insertedAt,
  description,
  name,
  id,
  updateAction,
  deleteAction
}) => {
  const updateEvent = () => {
    updateAction(id);
  };

  const deleteEvent = () => {
    deleteAction(id);
  };

  return (
    <div className={`${styles.event} ${styles["team-events"]} row no-gutters`}>
      <div className={`col-lg-9 col-md-9 col-sm-12 ${styles["event-content"]}`}>
        <div>
          <img
            src="https://assets.rocketjourney.com/admin-panel/assets/i-team_event.svg"
            alt=""
          />
        </div>
        <div>
          <p className={styles.title}>
            {`${description.charAt(0).toUpperCase()}${description.slice(
              1
            )} ${name}`}
          </p>
          <p className={styles.date}>{insertedAt}</p>
        </div>
      </div>
      <div className={`col-lg-3 col-md-3 col-sm-12 ${styles["edit-actions"]}`}>
        <i
          onClick={updateEvent}
          className={`fa fa-pencil ${styles["update-button"]}`}
          aria-hidden="true"
        />
        <i
          onClick={deleteEvent}
          className={`fa fa-trash ${styles["delete-button"]}`}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default TeamEvents;
