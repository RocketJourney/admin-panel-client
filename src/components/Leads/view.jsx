import React from "react";
import Pagination from "react-js-pagination";

import { parseHour } from "../../helpers/utils";

import Table from "../Table";
import Thead from "../Table/Thead";
import Tbody from "../Table/Tbody";
import Td from "../Table/Td";
import Th from "../Table/Th";
import SectionTitle from "../SectionTitle";
import Button from "../Button";

import styles from "./styles.less";

const View = ({ archive, leads }) => (
  <div id="leads" className={styles.view}>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <SectionTitle>Leads</SectionTitle>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        {leads.length === 0 && <p className={styles.noContent}>No hay leads</p>}
        {leads.length > 0 && (
          <Table>
            <Thead>
              <Th filterColor="gray" filter>
                Date
              </Th>
              <Th>Club</Th>
              <Th>Website</Th>
              <Th>#</Th>
              <Th>Software</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th />
            </Thead>
            <Tbody>
              {leads.map(lead => (
                <tr key={lead.id}>
                  <Td color="gray">{parseHour(lead.inserted_at)}</Td>
                  <Td>{lead.club_name}</Td>
                  <Td>
                    <a
                      href={`http://${lead.website}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {lead.website}
                    </a>
                  </Td>
                  <Td>{lead.location_count}</Td>
                  <Td>{lead.software_brand}</Td>
                  <Td>{lead.name}</Td>
                  <Td>
                    <a href={`mailto:${lead.email}`}>{lead.email}</a>
                  </Td>
                  <Td>{`${lead.phone}`}</Td>
                  <Td>
                    <Button
                      color="red"
                      type="border"
                      onClick={() => archive(lead.id)}
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
