import React from "react";
import Input from "../../../Input";

import styles from "./styles.less";

const UserStatusForm = ({
  thisWeek,
  streak,
  maxStreak,
  cheatProgress,
  cheatDays,
  dangerZone,
  weekDays,
  handleChange,
  handleChangeCheckbox,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
  sendData
}) => (
  <div>
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <p className={styles["gray-bold-title"]}>User Status</p>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-12">
        <Input
          inputClassName={thisWeek.modified ? "edited" : ""}
          type="text"
          id="week_streak"
          labelText="This Week"
          name="thisWeek"
          value={thisWeek.value}
          onChange={handleChange}
        />
      </div>
      <div
        id="weekdays"
        className={`col-lg-9 col-md-9 col-sm-12 ${styles.weekdays}`}
      >
        <p id="weekdays-title" className={styles["weekdays-title"]}>
          Weekdays
        </p>
        <div className={styles["weekday-checkbox-wrapper"]}>
          <Input
            inputClassName={monday.modified ? "edited" : ""}
            type="checkbox"
            id="monday"
            name="monday"
            onChange={handleChangeCheckbox}
            value={monday.value}
            defaultChecked={monday.value === true}
          />
          <span className={monday.modified ? "edited" : ""}>MON</span>
        </div>
        <div className={styles["weekday-checkbox-wrapper"]}>
          <Input
            inputClassName={tuesday.modified ? "edited" : ""}
            type="checkbox"
            id="tuesday"
            name="tuesday"
            onChange={handleChangeCheckbox}
            defaultChecked={tuesday.value === true}
          />
          <span className={tuesday.modified ? "edited" : ""}>TUE</span>
        </div>
        <div className={styles["weekday-checkbox-wrapper"]}>
          <Input
            inputClassName={wednesday.modified ? "edited" : ""}
            type="checkbox"
            id="wednesday"
            name="wednesday"
            onChange={handleChangeCheckbox}
            defaultChecked={wednesday.value === true}
          />
          <span className={wednesday.modified ? "edited" : ""}>WED</span>
        </div>
        <div className={styles["weekday-checkbox-wrapper"]}>
          <Input
            inputClassName={thursday.modified ? "edited" : ""}
            type="checkbox"
            id="thursday"
            name="thursday"
            onChange={handleChangeCheckbox}
            defaultChecked={thursday.value === true}
          />
          <span className={thursday.modified ? "edited" : ""}>THU</span>
        </div>
        <div className={styles["weekday-checkbox-wrapper"]}>
          <Input
            inputClassName={friday.modified ? "edited" : ""}
            type="checkbox"
            id="friday"
            name="friday"
            onChange={handleChangeCheckbox}
            defaultChecked={friday.value === true}
          />
          <span className={friday.modified ? "edited" : ""}>FRI</span>
        </div>
        <div className={styles["weekday-checkbox-wrapper"]}>
          <Input
            inputClassName={saturday.modified ? "edited" : ""}
            type="checkbox"
            id="saturday"
            name="saturday"
            onChange={handleChangeCheckbox}
            defaultChecked={saturday.value === true}
          />
          <span className={saturday.modified ? "edited" : ""}>SAT</span>
        </div>
        <div className={styles["weekday-checkbox-wrapper"]}>
          <Input
            inputClassName={sunday.modified ? "edited" : ""}
            type="checkbox"
            id="sunday"
            name="sunday"
            onChange={handleChangeCheckbox}
            defaultChecked={sunday.value === true}
          />
          <span className={sunday.modified ? "edited" : ""}>SUN</span>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-12">
        <Input
          inputClassName={streak.modified ? "edited" : ""}
          type="text"
          id="streak"
          labelText="Streak"
          name="streak"
          value={streak.value}
          onChange={handleChange}
        />
      </div>
      <div className="col-lg-9 col-md-9 col-sm-12">
        <Input
          inputClassName={maxStreak.modified ? "edited" : ""}
          type="text"
          id="maxStreak"
          labelText="Max Streak"
          name="maxStreak"
          value={maxStreak.value}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-12">
        <Input
          inputClassName={cheatProgress.modified ? "edited" : ""}
          id="cheatProgress"
          type="text"
          labelText="Cheat Progress"
          name="cheatProgress"
          value={cheatProgress.value}
          onChange={handleChange}
        />
      </div>
      <div className="col-lg-9 col-md-9 col-sm-12">
        <Input
          inputClassName={cheatDays.modified ? "edited" : ""}
          id="cheatDays"
          type="text"
          labelText="Cheat Days"
          name="cheatDays"
          value={cheatDays.value}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="row">
      <div className="row col-lg-12 col-md-12 col-sm-12">
        <label htmlFor="danger-zone">Danger Zone</label>
      </div>
      <div
        className={`col-lg-6 col-md-6 col-sm-12 ${
          dangerZone.value ? styles["dz-true"] : styles["dz-false"]
        }`}
      >
        <input
          className={dangerZone.modified ? "edited" : ""}
          id="danger-zone"
          type="checkbox"
          name="dangerZone"
          defaultChecked={dangerZone.value}
          onChange={handleChangeCheckbox}
        />
        &nbsp;
        <span className={styles["check-title"]}>
          <span className={`${dangerZone.modified ? "edited" : ""}`}>
            Danger zone:
          </span>{" "}
          {dangerZone.value ? "True" : "False"}
        </span>
      </div>
    </div>
  </div>
);

export default UserStatusForm;
