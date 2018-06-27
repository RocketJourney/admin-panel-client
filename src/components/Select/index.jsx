import React from "react";

import styles from "./styles.less";

const Select = ({
  defaultOption,
  id,
  name,
  label,
  options,
  optionLabel,
  selectedValue = 0,
  value,
  handleChange,
  modified
}) => (
  <div className="form-group">
    {label && <label htmlFor={id}>{label}</label>}
    <select
      className={`form-control ${styles.select} ${
        modified ? styles.edited : ""
      }`}
      id={id}
      onChange={handleChange}
      name={name}
      value={selectedValue}
    >
      <option value={0} disabled>
        {defaultOption}
      </option>
      {options.map(({ value, optionLabel }) => (
        <option key={value} value={value}>
          {optionLabel}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
