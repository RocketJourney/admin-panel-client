import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.less";

const NavbarItem = ({ children, section, currentSection, notification }) => (
  <li
    className={`nav-item ${styles.navItem} ${
      section === currentSection ? styles.active : ""
    }`}
  >
    {notification > 0 && (
      <span className={styles.notification}>{notification}</span>
    )}
    {children}
  </li>
);

NavbarItem.propTypes = {
  children: PropTypes.node.isRequired,
  section: PropTypes.string.isRequired,
  currentSection: PropTypes.string.isRequired,
  notification: PropTypes.number
};

NavbarItem.defaultProps = {
  notification: 0
};

export default NavbarItem;
