import React from "react";

import { parseHour } from "../../helpers/utils";

import Table from "../Table";
import Thead from "../Table/Thead";
import Tbody from "../Table/Tbody";
import Td from "../Table/Td";
import Th from "../Table/Th";
import SectionTitle from "../SectionTitle";
import Button from "../Button";

import styles from "./styles.less";

const View = ({ archive, feedback }) => (
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
                Date
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
                  <Td color="gray">{parseHour(f.inserted_at)}</Td>
                  <Td color="gray">{f.user_id}</Td>
                  <Td bold>
                    {f.first_name} {f.last_name}
                  </Td>
                  <Td>{f.message}</Td>
                  <Td>
                    {f.account.map(account => {
                      if (account.type == 2 && account.email !== null) {
                        return (
                          <a
                            key={account.id}
                            className={styles.email}
                            href={`mailto:${
                              account.email
                            }?subject=Respuesta de RocketJourney&body=Hola ${
                              f.first_name
                            }, recibimos tu mensaje: ${f.message}`}
                          >
                            {`(c)${account.email}`}
                          </a>
                        );
                      } else if (account.type == 3 && account.email !== null) {
                        <a
                          key={account.id}
                          className={styles.email}
                          href={`mailto:${
                            account.email
                          }?subject=Respuesta de RocketJourney&body=Hola ${
                            f.first_name
                          }, recibimos tu mensaje: ${f.message}`}
                        >
                          {`(s)${account.email}`}
                        </a>;
                      }
                    })}
                  </Td>
                  <Td>
                    <Button
                      color="red"
                      type="border"
                      onClick={() => archive(f.id)}
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
  </div>
);

export default View;
