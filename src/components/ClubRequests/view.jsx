import React from "react";
import Pagination from "../Pagination";

import { parseHour } from "../../helpers/utils";

import Table from "../Table";
import Thead from "../Table/Thead";
import Tbody from "../Table/Tbody";
import Td from "../Table/Td";
import Th from "../Table/Th";
import SectionTitle from "../SectionTitle";
import Button from "../Button";

import styles from "./styles.less";

const View = ({
  activePage,
  archive,
  clubRequests,
  getNextRequests,
  pageSize,
  totalEntries,
  totalPages
}) => (
  <div id="club-requests" className={styles.view}>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <SectionTitle>Club Requests</SectionTitle>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        {clubRequests.length === 0 && (
          <p className={styles.noContent}>No hay Club requests</p>
        )}
        {clubRequests.length > 0 && (
          <Table>
            <Thead>
              <Th filterColor="gray" filter>
                Date
              </Th>
              <Th>Club</Th>
              <Th>User</Th>
              <Th>Member ID</Th>
              <Th />
            </Thead>
            <Tbody>
              {clubRequests.map(cr => (
                <tr key={cr.id}>
                  <Td>{parseHour(cr.inserted_at)}</Td>
                  <Td>{cr.club_name}</Td>
                  <Td>{cr.typed_name}</Td>
                  <Td>{cr.club_member_id}</Td>
                  <Td>
                    <Button
                      color="red"
                      type="border"
                      onClick={() => archive(cr.id)}
                      size="small"
                    >
                      Archive
                    </Button>
                  </Td>
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
