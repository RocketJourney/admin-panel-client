import React from "react";

const RjRun = ({
  badgeUrl,
  insertedAt,
  distance,
  duration,
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
    <div className={`${styles.event} ${styles["event-rj-run"]} row no-gutters`}>
      <div className={`col-lg-9 col-md-9 col-sm-12 ${styles["event-content"]}`}>
        <div>
          <img
            src="https://assets.rocketjourney.com/admin-panel/assets/i-run.svg"
            alt=""
          />
        </div>
        <div>
          <p className={styles.title}>
            {(distance / 1000).toFixed(2)}km{" "}
            {(duration / 60)
              .toFixed(2)
              .toString()
              .replace(".", ":")}{" "}
            min/km
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

export default RjRun;
