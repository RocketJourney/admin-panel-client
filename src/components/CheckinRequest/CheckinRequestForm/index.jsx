import React from "react";

import CheckinRequestHeader from "./CheckinRequestHeader";
import CheckinRequestFooter from "./CheckinRequestFooter";
import CheckinRequestBody from "./CheckinRequestBody";
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
          <CheckinRequestHeader checkinRequest={checkinRequest} />
          <div className="modal-body">
            <CheckinRequestBody
              checkinRequest={checkinRequest}
              clubs={clubs}
              spots={spots}
            />
          </div>
          <CheckinRequestFooter user={checkinRequest.user} />
        </div>
      </div>
    </div>
  </div>
);

export default CheckinRequestForm;
