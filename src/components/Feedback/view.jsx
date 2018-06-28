import React from "react";

import Table from "../Table";
import Thead from "../Table/Thead";
import Tbody from "../Table/Tbody";
import Td from "../Table/Td";
import Th from "../Table/Th";
import SectionTitle from "../SectionTitle";

import Button from "../Button";

import styles from "./styles.less";

const View = ({ feedback }) => (
  <div id="feedback" className={styles.view}>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <SectionTitle>Feedback</SectionTitle>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        {feedback.length === 0 && (
          <p className={styles.noContent}>No hay feedback</p>
        )}
        {feedback.length > 0 && (
          <Table>
            <Thead>
              <Th filterColor="gray" filter>
                Fate
              </Th>
              <Th>UID</Th>
              <Th>Name</Th>
              <Th>Message</Th>
              <Th>Contact</Th>
              <Th />
            </Thead>
            <Tbody>
              {feedback.map(f => (
                <tr key={f.id}>
                  <Td color="gray">{f.inserted_at}</Td>
                  <Td color="gray">{f.user_id}</Td>
                  <Td>
                    {f.first_name} {f.last_name}
                  </Td>
                  <Td>{f.message}</Td>
                  <Td>email</Td>
                  <Td>
                    <Button color="red" type="fill">
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
  </div>
);

export default View;
