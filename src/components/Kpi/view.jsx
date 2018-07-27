import React from "react";

import SectionTitle from "../SectionTitle";
import UsersTable from "./UsersTable";
import KpiOverview from "./KpiOverview";
import Button from "../Button";

import styles from "./styles.less";

const View = ({
  actualKpi,
  currentWeek,
  currentYear,
  handleChange,
  kpi,
  users,
  refreshInfo
}) => {
  const returnConnectionData = account => {
    if (account.club !== null && account.application === null) {
      return <span className={styles.application}>{account.club.name}</span>;
    } else if (account.application !== null) {
      return (
        <span className={styles.application}>{account.application.name}</span>
      );
    }
    return <span className={styles.red}>None</span>;
  };

  const getTeamsNumber = teams => {
    if (teams.length > 0) {
      return <span>{teams.length}</span>;
    }
    return <span className={styles.red}>None</span>;
  };

  const parseDatenumber = number => {
    return "";
  };

  return (
    <div id="kpis">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <SectionTitle>Week Overview</SectionTitle>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <form className={styles.getWeekForm} onSubmit={refreshInfo}>
            <span className={styles.currentWeekLabel}>Current Week</span>
            <input
              className={styles.weekInput}
              name="week"
              id="week"
              type="text"
              onChange={handleChange}
              placeholder={currentWeek}
            />
            <input
              className={styles.yearInput}
              name="year"
              id="year"
              type="text"
              onChange={handleChange}
              placeholder={currentYear}
            />
            <div className={styles.getWeekWrapper}>
              <Button color="yellow" size="small">
                Get Week
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <hr className={styles.hr} />
          <KpiOverview
            actualKpi={actualKpi}
            usersQuantity={users.length}
            kpi={kpi}
          />
          <hr className={styles.hr} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <UsersTable
            users={users}
            returnConnectionData={returnConnectionData}
            getTeamsNumber={getTeamsNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default View;
