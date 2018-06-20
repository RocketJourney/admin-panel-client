import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.less";

const Input = ({
  type,
  labelText,
  id,
  name,
  placeholder,
  value,
  onChange,
  inputClassName,
  defaultChecked
}) => (
  <div className="form-group">
    {labelText.length > 0 && <label htmlFor={id}>{labelText}</label>}
    <input
      id={id}
      placeholder={placeholder}
      className={`form-control ${styles.input} ${styles[inputClassName]}`}
      name={name}
      onChange={onChange}
      type={type}
      value={value}
      defaultChecked={defaultChecked}
    />
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  labelText: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputClassName: PropTypes.string
};

Input.defaultProps = {
  type: "text",
  inputClassName: "",
  placeholder: "",
  labelText: ""
};

export default Input;
