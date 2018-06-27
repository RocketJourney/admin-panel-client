import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.less";

import loader from "./img/spinner.svg";

<<<<<<< HEAD
const Button = ({ children, color, state, type, disabled, loading }) => {
=======
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

>>>>>>> release/1.1.0
  if (loading) {
    return <img className={styles.loader} src={loader} alt="loader" />;
  }
  return (
    <button
<<<<<<< HEAD
      className={`${styles.button} ${styles[color]} ${styles[type]}`}
      disabled={disabled}
=======
      className={`${styles.button} ${styles[color]} ${styles[type]} ${
        styles[size]
      }`}
      disabled={disabled}
      {...rest}
>>>>>>> release/1.1.0
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
<<<<<<< HEAD
  type: PropTypes.oneOf(["border", "fill"])
=======
  type: PropTypes.oneOf(["border", "fill"]),
  size: PropTypes.oneOf(["normal", "small"])
>>>>>>> release/1.1.0
};

Button.defaultProps = {
  color: "blue",
  disabled: false,
  loading: false,
<<<<<<< HEAD
  type: "fill"
=======
  type: "fill",
  size: "normal"
>>>>>>> release/1.1.0
};

export default Button;
