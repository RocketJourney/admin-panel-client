import React from "react";

import Events from "./Events";

const CheckinRequestBody = ({ checkinRequest }) => (
  <div className="row">
    <div className="col-lg-4 col-md-4 col-sm-12">
      <Events events={checkinRequest.user.events} />
    </div>
  </div>
);

export default CheckinRequestBody;
