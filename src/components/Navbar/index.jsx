import React from "react";

import styles from './styles.less';

const Navbar = ({ logo }) => (
  <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
    <a className={`navbar-brand ${styles.brand}`} href="#">
      <img src={logo} width="36" height="36" alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className={`nav-item ${styles.navItem}`}>
          <a className="nav-option" href="#">Feedback</a>
        </li>
        <li className={`nav-item ${styles.navItem}`}>
          <a className="nav-option" href="#">Feedback</a>
        </li>
        <li className={`nav-item ${styles.navItem}`}>
          <a className="nav-option" href="#">Feedback</a>
        </li>
        <li className={`nav-item ${styles.navItem}`}>
          <a className="nav-option" href="#">Feedback</a>
        </li>
        <li className={`nav-item ${styles.navItem}`}>
          <a className="nav-option" href="#">Feedback</a>
        </li>
        <li className={`nav-item ${styles.navItem}`}>
          <a className="nav-option" href="#">Feedback</a>
        </li>
        <li className={`nav-item ${styles.navItem}`}>
          <a className="nav-option" href="#">Feedback</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar;
