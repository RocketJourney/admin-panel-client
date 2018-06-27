import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";

import logo from "../../img/group-copy.svg";
import styles from "./styles.less";

const View = ({ handleChange, login }) => (
  <form id="login" onSubmit={login}>
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
            name="email"
            placeholder="user@rocketjourney.com"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <div className={styles.buttonWrapper}>
          <Button color="yellow" onClick={login}>
            Login
          </Button>
        </div>
      </div>
    </div>
  </form>
);

View.propTypes = {
  handleChange: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

export default View;
