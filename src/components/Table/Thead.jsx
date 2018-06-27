import React from "react";

import styles from "./styles.less";

const Thead = ({ children }) => (
  <thead className={styles.thead}>
    <tr>{children}</tr>
  </thead>
);

export default Thead;
