import React from "react";

import styles from "./styles.less";

const Tbody = ({ children }) => (
  <tbody className={styles.tbody}>{children}</tbody>
);

export default Tbody;
