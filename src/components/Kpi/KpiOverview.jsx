import React from "react";

import KpiStat from "./KpiStat";

import styles from "./styles.less";

const KpiOverview = ({ actualKpi, kpi, usersQuantity }) => (
  <div className={`row ${styles.kpiContainer}`}>
    <div className="col-3 col-sm-3 col-md-3 col-lg-3">
      <span className={styles.kpiMainStat}>{usersQuantity}</span>
      <span className={styles.kpiLabel}>NEW USERS</span>
    </div>
    <div className="col-3 col-sm-3 col-md-3 col-lg-3">
      <KpiStat
        mainStat={kpi !== null ? kpi.connected_users_pct : "?"}
        label={"CONNECTED"}
        secondaryStat={actualKpi.connected_users_pct}
      />
    </div>
    <div className="col-3 col-sm-3 col-md-3 col-lg-3">
      <KpiStat
        mainStat={kpi !== null ? kpi.started_journey_pct : "?"}
        label={"STARTED JOURNEY"}
        secondaryStat={actualKpi.started_journey_pct}
      />
    </div>
    <div className="col-3 col-sm-3 col-md-3 col-lg-3">
      <KpiStat
        mainStat={kpi !== null ? kpi.joined_team_pct : "?"}
        label={"JOINED TEAMS"}
        secondaryStat={actualKpi.joined_team_pct}
      />
    </div>
  </div>
);

export default KpiOverview;
