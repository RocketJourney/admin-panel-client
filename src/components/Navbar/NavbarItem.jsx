import React from "react";

import styles from "./styles.less";

const NavbarItem = ({ children }) => (
  <li className={`nav-item ${styles.navItem}`}>{children}</li>
);

export default NavbarItem;
