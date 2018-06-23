import React from "react";

import Button from "../../Button";

import styles from "./styles.less";

const CheckinRequestHeader = ({ checkinRequest, sendData }) => (
  <div className={`modal-header row no-gutters ${styles.modalHeader}`}>
    <div className="col-md-7 col-lg-7 col-sm-12 col-12">
      <h5 className={`modal-title ${styles.modalTitle}`}>
        <span className={styles.grayTitle}>{checkinRequest.user.user_id}</span>{" "}
        {checkinRequest.user.user_name}
      </h5>
      <div>
        <p className={styles.reason}>
          Reason: <span className={styles.white}>{checkinRequest.reason}</span>
        </p>
        <p className={styles.reason}>
          Date:{" "}
          <span className={styles.white}>{checkinRequest.local_date}</span>
        </p>
      </div>
    </div>
    <div
      className={`col-lg-3 col-md-3 col-sm-12 col-12 ${styles.headerButtons}`}
    >
      <Button color="red" size="small">
        Archive Request
      </Button>
    </div>
    <div
      className={`col-lg-2 col-md-2 col-sm-12 col-12 ${styles.headerButtons}`}
    >
      <Button color="green" size="small" onClick={sendData}>
        Update
      </Button>
    </div>
  </div>
);

export default CheckinRequestHeader;
