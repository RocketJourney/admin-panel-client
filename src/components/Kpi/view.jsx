import React from "react";

import { parseHour } from "../../helpers/utils";

import Table from "../Table";
import Thead from "../Table/Thead";
import Tbody from "../Table/Tbody";
import Td from "../Table/Td";
import Th from "../Table/Th";
import SectionTitle from "../SectionTitle";

const View = ({ users }) => (
  <div id="kpis">
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <SectionTitle>Leads</SectionTitle>
      </div>
    </div>

    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <Table>
          <Thead>
            <Th filterColor="gray" filter>
              ID
            </Th>
            <Th>User</Th>
            <Th>Email</Th>
            <Th>Connections</Th>
            <Th>Journey</Th>
            <Th>Streak</Th>
            <Th>Teams</Th>
            <Th>Sign Up Date</Th>
            <Th>Last Seen</Th>
          </Thead>
          <Tbody>
            {users.map(user => (
              <tr key={user.id}>
                <Td filterColor="gray" filter>
                  {user.id}
                </Td>
                <Td>
                  {user.first_name} {user.last_name}
                </Td>
                <Td>{user.email}</Td>
                <Td />
                <Td>Journey</Td>
                <Td>Streak</Td>
                <Td>Teams</Td>
                <Td>Sign Up Date</Td>
                <Td color="gray">{parseHour(user.inserted_at)}</Td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  </div>
);

export default View;
