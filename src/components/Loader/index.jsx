import React from "react";

import loader from "./spinner-100px.gif";

const Loader = ({ atl, className }) => (
  <img src={loader} alt={atl} className={className} />
);

export default Loader;
