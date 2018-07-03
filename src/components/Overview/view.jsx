import React from "react";

import SectionTitle from "../SectionTitle";

import styles from "./styles.less";

const View = ({ data }) => (
  <div id="overview" className={styles.view}>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <SectionTitle>Overview</SectionTitle>
      </div>
    </div>
    <div className="row">
      <div className={styles.hrDivider}>
        <h3 className={styles.hrDividerTitle}>ROCKET STATS</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-3 col-lg-3">
        <h3 class="statcard-number">
          {data.active_clubs}
          <small class={`delta-indicator`}>
            {data.active_clubs_last_thirty_days}
          </small>
        </h3>
        <span>Clubs</span>
      </div>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3" />
      <div className="col-12 col-sm-12 col-md-3 col-lg-3" />
      <div className="col-12 col-sm-12 col-md-3 col-lg-3" />
    </div>
  </div>
);

export default View;
