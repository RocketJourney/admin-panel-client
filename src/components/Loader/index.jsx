import React from "react";

import loader from "./spinner.svg";

const Loader = ({ atl, className }) => (
  <img src={loader} alt={atl} className={className} />
);

export default Loader;
