import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.less";

import loader from "./img/spinner.svg";

const Button = props => {
  const {
    children,
    color,
    state,
    type,
    disabled,
    loading,
    size,
    ...rest
  } = props;

  if (loading) {
    return <img className={styles.loader} src={loader} alt="loader" />;
  }
  return (
    <button
      className={`${styles.button} ${styles[color]} ${styles[type]} ${
        styles[size]
      }`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(["border", "fill"]),
  size: PropTypes.oneOf(["normal", "small"])
};

Button.defaultProps = {
  color: "blue",
  disabled: false,
  loading: false,
  type: "fill",
  size: "normal"
};

export default Button;
