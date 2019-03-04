import React from "react";

import { parseHour } from "../../helpers/utils";

import Table from "../Table";
import Thead from "../Table/Thead";
import Tbody from "../Table/Tbody";
import Td from "../Table/Td";
import Th from "../Table/Th";
import SectionTitle from "../SectionTitle";
import Verification from "./verification";

import styles from "./styles.less";

const View = ({ remove_verification, verifications }) => {
  return (
    <div id="challenge-verifications" className={styles.view}>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-10 col-lg-10">
          <SectionTitle>Challenge Verification Requests</SectionTitle>
        </div>
        {/* <div className="col-12 col-sm-12 col-md-2 col-lg-2"> */}
        {/* <p className={styles[updateResultClass]}>{updateResult}</p> */}
        {/* </div> */}
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <Table>
            <Thead>
              <Th filterColor="gray" filter>
                Date
              </Th>
              <Th>Photo</Th>
              <Th>Info</Th>
              <Th />
            </Thead>
            <Tbody>
              {verifications.map((verification, index) => (
                <tr key={verification.id}>
                  <Td color="gray">{parseHour(verification.inserted_at)}</Td>
                  <Td>
                    <img
                      className={styles.photo}
                      src={verification.image_url}
                      alt="img"
                    />
                  </Td>
                  <Verification
                    verification={verification}
                    remove_verification={remove_verification}
                  />
                </tr>
              ))}
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default View;
