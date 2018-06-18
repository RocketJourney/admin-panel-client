import React from "react";

import styles from "./styles.less";

const CheckinRequestFooter = ({ user }) => (
  <div className={`modal-footer ${styles.modalFooter}`}>
    <div id="user-agent" className="col-lg-6 col-md-6 col-sm-12 col-12">
      <p className={styles.footerBold}>User Agent</p>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <p className={styles.footerNormal}>
            Manufacturer:{" "}
            <span className={styles.footerBold}>
              {user.manufacturer || "None"}
            </span>
          </p>
          <p className={styles.footerNormal}>
            Model:{" "}
            <span className={styles.footerBold}>{user.model || "None"}</span>
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <p className={styles.footerNormal}>
            OS:{" "}
            <span className={styles.footerBold}>{user.operating_system}</span>
          </p>
          <p className={styles.footerNormal}>
            OS Ver.:{" "}
            <span className={styles.footerBold}>
              {user.operating_system_version}
            </span>
          </p>
        </div>
      </div>
    </div>
    <div id="contact-user" className="col-lg-6 col-md-6 col-sm-12 col-12">
      <p className={styles.footerBold}>Contact User</p>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <p className={styles.footerNormal}>
            RJ Ver.:{" "}
            <span className={styles.footerBold}>
              {user.rocket_journey_version}
            </span>
          </p>
          <p className={styles.footerNormal}>
            BT Ver.:{" "}
            <span className={styles.footerBold}>
              {user.bluetooth_version || "None"}
            </span>
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12" />
      </div>
    </div>
  </div>
);

export default CheckinRequestFooter;
