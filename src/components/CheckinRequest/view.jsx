import React from "react";

import Button from "../Button";
import Table from "../Table";
import Thead from "../Table/Thead";
import Tbody from "../Table/Tbody";
import Td from "../Table/Td";
import Th from "../Table/Th";
import SectionTitle from "../SectionTitle";

import styles from "./styles.less";

const View = () => (
  <div id="checkin-request" className={styles.view}>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <SectionTitle>Check-in Requests</SectionTitle>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
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
            <tr>
              <Td color="gray">a minute ago</Td>
              <Td>Capital Fitness Colima</Td>
              <Td>Otra razón</Td>
              <Td>JLN</Td>
              <Td>2018-09-09 05:30:00</Td>
              <Td>
                <div id="aglo" className={styles.bottonWrapper}>
                  <Button size="small" color="yellow">
                    Resolves
                  </Button>
                </div>
              </Td>
            </tr>
          </Tbody>
        </Table>
      </div>
    </div>
  </div>
);

export default View;
