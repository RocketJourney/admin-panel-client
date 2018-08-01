import React from "react";

import styles from "./styles.less";

const WeekSeparator = ({
  weeks,
  insertedAt,
  weekSeparator,
  id,
  updateAction,
  deleteAction,
  manuallyAdded
}) => {
  const updateEvent = () => {
    updateAction(id);
  };

  const deleteEvent = () => {
    deleteAction(id);
  };

  return (
    <div
      className={`${styles.event} ${
        styles["event-week-separator"]
      } row no-gutters`}
    >
      <div className={`col-lg-9 col-md-9 col-sm-12 ${styles["event-content"]}`}>
        <div>
          <img
            src="https://assets.rocketjourney.com/admin-panel/assets/i-week_separator.svg"
            alt=""
          />
        </div>
        <div>
          <p className={styles.title}>{weeks} weeks</p>
          <div className={styles.insertedAtWrapper}>
            <p className={styles.date}>{insertedAt}</p>
            {manuallyAdded === true && <span className={styles.manual}>M</span>}
          </div>
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

export default WeekSeparator;
