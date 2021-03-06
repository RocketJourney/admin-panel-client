import React from "react";

import styles from "./styles.less";

const CheckIn = ({
  badgeUrl,
  name,
  insertedAt,
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
      className={`${styles.event} ${styles["event-check-in"]} row no-gutters`}
    >
      <div className={`col-lg-9 col-md-9 col-sm-12 ${styles["event-content"]}`}>
        <div>
          <img src={badgeUrl} alt="" />
        </div>
        <div>
          {name.length > 25 ? (
            <p className={styles.title}>{name.slice(0, -10)}</p>
          ) : (
            <p className={styles.title}>{name}</p>
          )}
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

export default CheckIn;
