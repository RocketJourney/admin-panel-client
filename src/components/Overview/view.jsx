import React from "react";

import Table from "../Table";
import Thead from "../Table/Thead";
import Tbody from "../Table/Tbody";
import Td from "../Table/Td";
import Th from "../Table/Th";
import SectionTitle from "../SectionTitle";
import Button from "../Button";

import styles from "./styles.less";

const View = ({ data }) => (
  <div id="overview" className={styles.view}>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <SectionTitle>Mision Control</SectionTitle>
      </div>
    </div>
    <div className="row">
      <div className={styles.hrDivider}>
        <h3 className={styles.hrDividerTitle}>ROCKET STATS</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-3 col-lg-3">
        <h3 className={styles.number}>
          {data.active_clubs}
          <small
            className={`${styles.deltaIndicator} ${
              data.active_clubs_last_thirty_days > 0
                ? styles.deltaPositive
                : styles.deltaNegative
            }`}
          >
            {data.active_clubs_last_thirty_days}
          </small>
        </h3>
        <span className={styles.numberLabel}>CLUBS</span>
      </div>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3">
        <h3 className={styles.number}>
          {data.total_users}
          <small
            className={`${styles.deltaIndicator} ${
              data.total_users_last_thirty_days > 0
                ? styles.deltaPositive
                : styles.deltaNegative
            }`}
          >
            {data.total_users_last_thirty_days}
          </small>
        </h3>
        <span className={styles.numberLabel}>USERS</span>
      </div>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3">
        <h3 className={styles.number}>
          {data.active_users}
          <small
            className={`${styles.deltaIndicator} ${
              data.active_users_percentage > 0
                ? styles.deltaPositive
                : styles.deltaNegative
            }`}
          >
            {data.active_users_percentage}
          </small>
        </h3>
        <span className={styles.numberLabel}>ACTIVE USERS</span>
      </div>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3">
        <h3 className={styles.number}>
          {data.total_teams}
          <small
            className={`${styles.deltaIndicator} ${
              data.total_teams_created_thirty_days > 0
                ? styles.deltaPositive
                : styles.deltaNegative
            }`}
          >
            {data.total_teams_created_thirty_days}
          </small>
        </h3>
        <span className={styles.numberLabel}>TEAMS</span>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <div className={styles.hrDivider} />
      </div>
    </div>
  </div>
);

export default View;
