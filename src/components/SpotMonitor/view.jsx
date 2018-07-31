import React from "react";

import { parseHour } from "../../helpers/utils";

import Pagination from "../Pagination";
import Table from "../Table";
import Thead from "../Table/Thead";
import Tbody from "../Table/Tbody";
import Td from "../Table/Td";
import Th from "../Table/Th";
import SectionTitle from "../SectionTitle";

import styles from "./styles.less";

const View = ({
  data,
  totalPages,
  totalEntries,
  pageSize,
  activePage,
  getNextRequests
}) => (
  <div id="spot-monitor" className={styles.view}>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <SectionTitle>Spot Monitor</SectionTitle>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        {data.length === 0 && <p className={styles.noContent}>No hay spots</p>}
        {data.length > 0 && (
          <Table>
            <Thead>
              <Th filterColor="gray" filter>
                ID
              </Th>
              <Th>Location</Th>
              <Th>Connection Method</Th>
              <Th>Last Check-in</Th>
            </Thead>
            <Tbody>
              {data.map(o => (
                <tr>
                  <Td>{o.id}</Td>
                  <Td>{o.location}</Td>
                  <Td>{o.connection_method}</Td>
                  <Td>{parseHour(o.last_check_in)}</Td>
                </tr>
              ))}
            </Tbody>
          </Table>
        )}
      </div>
    </div>
    <nav aria-label="Page navigation">
      <Pagination
        activePage={activePage}
        itemsCountPerPage={pageSize}
        totalItemsCount={totalEntries}
        pageRangeDisplayed={10}
        onChange={getNextRequests}
      />
    </nav>
  </div>
);

export default View;
