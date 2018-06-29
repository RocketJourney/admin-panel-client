import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.less";

const Td = ({ bold, color, children }) => (
  <td className={`${styles.td} ${styles[color]} ${styles[bold]}`}>
    {children}
  </td>
);

Td.propTypes = {
  color: PropTypes.oneOf(["white", "gray"]),
  bold: PropTypes.bool
};

Td.defaultProps = {
  color: "white",
  bold: false
};

export default Td;
