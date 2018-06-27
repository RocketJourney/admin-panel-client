import React from "react";

import Button from "../Button";

import styles from "./styles.less";

const Navbar = ({ children, logo }) => (
  <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
    <a className={`navbar-brand ${styles.brand}`} href="#">
      <img src={logo} width="36" height="36" alt="" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      {children}
    </div>
  </nav>
);

export default Navbar;
