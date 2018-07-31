import React from "react";

import styles from "./styles.less";

const KpiStat = ({ mainStat, secondaryStat, label }) => (
  <div>
    <div>
      {mainStat === "?" ? (
        <span className={styles.emptyKpi}>{mainStat}</span>
      ) : (
        <span className={styles.kpiMainStat}>{mainStat}%</span>
      )}
      <span className={styles.kpiSecondaryStat}>{secondaryStat}%</span>
    </div>
    <span className={styles.kpiLabel}>{label}</span>
  </div>
);

export default KpiStat;
