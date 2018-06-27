import React from "react";

import Thead from "./Thead";
import Tbody from "./Tbody";
import Td from "./Td";

import styles from "./styles.less";

const Table = ({ children }) => (
  <div className="table-responsive">
    <table className="table">{children}</table>
  </div>
);

export default Table;
