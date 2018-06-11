import React from "react";

import Button from "../Button";
import Navbar from '../Navbar';

import styles from "./styles.less";
import logo from "../../img/group-copy.svg";

export default () => (
  <section id="login">
    <Navbar logo={logo} />
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <img className={styles.logo} src={logo} alt="RJ" />
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="email"
            placeholder="user@rocketjourney.com"
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <div className={styles.buttonWrapper}>
          <Button color="yellow">Login</Button>
        </div>
      </div>
    </div>
  </section>
);
