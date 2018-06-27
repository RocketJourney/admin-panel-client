import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.less";

const Th = ({ children, filter, filterColor, filterAction }) => {
  const color = `arrow${filterColor}`;

  return (
    <th className={styles.th}>
      {filter === true && <i className={`fas fa-sort-down ${styles[color]}`} />}
      {children}
    </th>
  );
};

Th.propTypes = {
  filter: PropTypes.bool,
  filterColor: PropTypes.oneOf(["gray", "yellow"]),
  filterAction: PropTypes.func
};

Th.defaultProps = {
  filter: false,
  filterColor: "gray",
  filterAction: null
};

export default Th;
