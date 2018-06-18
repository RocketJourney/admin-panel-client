import React from "react";

import Button from "../../Button";

import styles from "./styles.less";

const CheckinRequestForm = ({ clubs, spots, checkinRequest }) => (
  <div>
    <Button
      size="small"
      color="yellow"
      data-toggle="modal"
      data-target={`#${checkinRequest.id}`}
    >
      Resolves
    </Button>

    <div
      className="modal fade"
      id={checkinRequest.id}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className={`modal-dialog ${styles.modalDialog}`} role="document">
        <div className={`modal-content ${styles.modalContent}`}>
          <div className={`modal-header row no-gutters ${styles.modalHeader}`}>
            <div className="col-md-7 col-lg-7 col-sm-12 col-12">
              <h5 className={`modal-title ${styles.modalTitle}`}>
                <span className={styles.grayTitle}>10124</span> Monica Gutierrez
              </h5>
              <div>
                <p className={styles.reason}>
                  Reason: <span className={styles.white}>algo</span>
                </p>
                <p className={styles.reason}>
                  Date: <span className={styles.white}>algo</span>
                </p>
              </div>
            </div>
            <div
              className={`col-lg-3 col-md-3 col-sm-12 col-12 ${
                styles.headerButtons
              }`}
            >
              <Button color="red" size="small">
                Archive Request
              </Button>
            </div>
            <div
              className={`col-lg-2 col-md-2 col-sm-12 col-12 ${
                styles.headerButtons
              }`}
            >
              <Button color="green" size="small">
                Update
              </Button>
            </div>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CheckinRequestForm;
