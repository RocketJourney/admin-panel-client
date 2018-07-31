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
          {data.spots_main_metric}
          <small
            className={`${styles.deltaIndicator} ${
              data.spots_secondary_metric > 0
                ? styles.deltaPositive
                : styles.deltaNegative
            }`}
          >
            {data.spots_secondary_metric}
          </small>
        </h3>
        <span className={styles.numberLabel}>SPOTS</span>
      </div>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3">
        <h3 className={styles.number}>
          {data.users_main_metric}
          <small
            className={`${styles.deltaIndicator} ${
              data.users_secondary_metric > 0
                ? styles.deltaPositive
                : styles.deltaNegative
            }`}
          >
            {data.users_secondary_metric}
          </small>
        </h3>
        <span className={styles.numberLabel}>USERS</span>
      </div>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3">
        <h3 className={styles.number}>
          {data.active_users_main_metric}
          <small className={`${styles.deltaIndicator} ${styles.activeUsers}`}>
            {data.active_users_secondary_metric}%
          </small>
        </h3>
        <span className={styles.numberLabel}>ACTIVE USERS</span>
      </div>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3">
        <h3 className={styles.number}>
          {data.teams_main_metric}
          <small
            className={`${styles.deltaIndicator} ${
              data.teams_secondary_metric > 0
                ? styles.deltaPositive
                : styles.deltaNegative
            }`}
          >
            {data.teams_secondary_metric}
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
