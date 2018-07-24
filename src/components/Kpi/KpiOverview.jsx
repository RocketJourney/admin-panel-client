import React from "react";

import KpiStat from "./KpiStat";

import styles from "./styles.less";

const KpiOverview = ({ kpi }) => (
  <div className={`row ${styles.kpiContainer}`}>
    <div className="col-3 col-sm-3 col-md-3 col-lg-3">
      <span className={styles.kpiMainStat}>{kpi.new_users_count}</span>
      <span className={styles.kpiLabel}>NEW USERS</span>
    </div>
    <div className="col-3 col-sm-3 col-md-3 col-lg-3">
      <KpiStat
        mainStat={kpi.connected_users_pct}
        label={"CONNECTED"}
        secondaryStat={0}
      />
    </div>
    <div className="col-3 col-sm-3 col-md-3 col-lg-3">
      <KpiStat
        mainStat={kpi.started_journey_pct}
        label={"STARTED JOURNEY"}
        secondaryStat={0}
      />
    </div>
    <div className="col-3 col-sm-3 col-md-3 col-lg-3">
      <KpiStat
        mainStat={kpi.joined_team_pct}
        label={"JOINED TEAMS"}
        secondaryStat={0}
      />
    </div>
  </div>
);

export default KpiOverview;
