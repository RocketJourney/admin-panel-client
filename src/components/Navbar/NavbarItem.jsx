import React from "react";

import styles from "./styles.less";

const NavbarItem = ({ children, section, currentSection }) => (
  <li
    className={`nav-item ${styles.navItem} ${
      section === currentSection ? styles.active : ""
    }`}
  >
    {children}
  </li>
);

export default NavbarItem;
