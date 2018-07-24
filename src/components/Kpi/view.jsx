import React from "react";

import SectionTitle from "../SectionTitle";
import UsersTable from "./UsersTable";

import styles from "./styles.less";

const View = ({ users }) => {
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
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <SectionTitle>Week Overview</SectionTitle>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <hr />
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3 col-lg-3">100</div>
            <div className="col-3 col-sm-3 col-md-3 col-lg-3">60%</div>
            <div className="col-3 col-sm-3 col-md-3 col-lg-3">50%</div>
            <div className="col-3 col-sm-3 col-md-3 col-lg-3">20%</div>
          </div>
          <hr />
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
