import React from "react";

import { parseHour } from "../../helpers/utils";

import Button from "../Button";
import Table from "../Table";
import Thead from "../Table/Thead";
import Tbody from "../Table/Tbody";
import Td from "../Table/Td";
import Th from "../Table/Th";
import SectionTitle from "../SectionTitle";

import styles from "./styles.less";

const View = ({
  checkInIdUpdating,
  checkinRequests,
  updateResult,
  updateResultClass,
  updateCheckInRequest
}) => {
  return (
    <div id="checkin-request" className={styles.view}>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-10 col-lg-10">
          <SectionTitle>Check-in Requests</SectionTitle>
        </div>
        <div className="col-12 col-sm-12 col-md-2 col-lg-2">
          <p className={styles[updateResultClass]}>{updateResult}</p>
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
                    <Td color="gray">
                      {parseHour(checkinRequest.inserted_at)}
                    </Td>
                    <Td>{checkinRequest.location_name}</Td>
                    <Td>{checkinRequest.reason}</Td>
                    <Td>{checkinRequest.user_name}</Td>
                    <Td>{checkinRequest.local_date}</Td>
                    <Td>
                      <Button
                        loading={checkInIdUpdating === checkinRequest.id}
                        color="yellow"
                        size="small"
                        onClick={() => updateCheckInRequest(checkinRequest.id)}
                      >
                        Resolve
                      </Button>
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
};

export default View;
