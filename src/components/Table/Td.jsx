import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.less";

const Td = ({ color, children }) => (
  <td className={`${styles.td} ${styles[color]}`}>{children}</td>
);

Td.propTypes = {
  color: PropTypes.oneOf(["white", "gray"])
};

Td.defaultProps = {
  color: "white"
};

export default Td;
