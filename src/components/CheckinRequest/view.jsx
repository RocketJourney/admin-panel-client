import React from "react";

import CheckinRequestForm from "./CheckinRequestForm";
import Table from "../Table";
import Thead from "../Table/Thead";
import Tbody from "../Table/Tbody";
import Td from "../Table/Td";
import Th from "../Table/Th";
import SectionTitle from "../SectionTitle";

import styles from "./styles.less";

const View = ({ checkinRequests, clubs, spots, openNextCheckin }) => (
  <div id="checkin-request" className={styles.view}>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <SectionTitle>Check-in Requests</SectionTitle>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        {checkinRequests.length > 0 && (
          <Table>
            <Thead>
              <Th filterColor="gray" filter>
                Date
              </Th>
              <Th>Location</Th>
              <Th>Reason</Th>
              <Th>Name</Th>
              <Th>Local Date</Th>
              <Th />
            </Thead>
            <Tbody>
              {checkinRequests.map((checkinRequest, index) => (
                <tr key={checkinRequest.id}>
                  <Td color="gray">{checkinRequest.inserted_at}</Td>
                  <Td>{checkinRequest.name}</Td>
                  <Td>{checkinRequest.reason}</Td>
                  <Td>{checkinRequest.user_name}</Td>
                  <Td>{checkinRequest.local_date}</Td>
                  <Td>
                    <CheckinRequestForm
                      checkinIndex={index}
                      checkinRequest={checkinRequest}
                      clubs={clubs}
                      openNextCheckin={openNextCheckin}
                      spots={spots}
                    />
                  </Td>
                </tr>
              ))}
            </Tbody>
          </Table>
        )}

        {checkinRequests.length === 0 && (
          <p className={styles.noCheckins}>No hay checkins pendientes o/</p>
        )}
      </div>
    </div>
  </div>
);

export default View;
