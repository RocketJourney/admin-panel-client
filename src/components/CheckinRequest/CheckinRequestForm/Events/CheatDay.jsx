import React from "react";

import styles from "./styles.less";

const CheatDay = ({
  badgeUrl,
  duration,
  insertedAt,
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
    <div
      className={`${styles.event} ${styles["event-cheat-day"]} row no-gutters`}
    >
      <div className={`col-lg-9 col-md-9 col-sm-12 ${styles["event-content"]}`}>
        <div>
          <img
            src="https://assets.rocketjourney.com/admin-panel/assets/i-cheat_day.svg"
            alt=""
          />
        </div>
        <div>
          <p className={styles.title}>Cheat Day Used: {duration}</p>
          <p className={styles.date}>{insertedAt}</p>
        </div>
      </div>
      <div className={`col-lg-3 col-md-3 col-sm-12 ${styles["edit-actions"]}`}>
        <i
          onClick={updateEvent}
          className={`fas fa-pencil-alt ${styles["update-button"]}`}
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

export default CheatDay;
