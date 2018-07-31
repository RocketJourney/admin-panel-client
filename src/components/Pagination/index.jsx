import React from "react";
import PropTypes from "prop-types";
import ReactJsPagination from "react-js-pagination";

import styles from "./styles.less";

const Pagination = ({
  activePage,
  onChange,
  itemsCountPerPage,
  totalItemsCount,
  pageRangeDisplayed
}) => (
  <ReactJsPagination
    activeClass="active"
    activeLinkClass={styles.active}
    itemClass="page-item"
    linkClass={styles.pageLink}
    activePage={activePage}
    itemsCountPerPage={itemsCountPerPage}
    totalItemsCount={totalItemsCount}
    pageRangeDisplayed={pageRangeDisplayed}
    onChange={onChange}
  />
);

Pagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  itemsCountPerPage: PropTypes.number.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
  pageRangeDisplayed: PropTypes.number.isRequired
};

export default Pagination;
