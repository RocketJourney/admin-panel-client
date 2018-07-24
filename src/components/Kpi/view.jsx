import React from "react";

import { parseHour } from "../../helpers/utils";

import Table from "../Table";
import Thead from "../Table/Thead";
import Tbody from "../Table/Tbody";
import Td from "../Table/Td";
import Th from "../Table/Th";
import SectionTitle from "../SectionTitle";

import styles from "./styles.less";

const View = ({ users }) => {
  const returnConnectionData = account => {
    if (account.club !== null && account.application === null) {
      return <span className={styles.application}>{account.club.name}</span>;
    } else if (account.application !== null) {
      return (
        <span className={styles.application}>{account.application.name}</span>
      );
    }
    return <span className={styles.red}>None</span>;
  };

  return (
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
                    <img
                      className={styles.profilePic}
                      src={user.profile_pic}
                      alt={user.first_name}
                    />
                    {user.first_name} {user.last_name}
                  </Td>
                  <Td>
                    {user.accounts.map(account => (
                      <span className={styles.email}>{account.email}</span>
                    ))}
                  </Td>
                  <Td>
                    {user.accounts.map(account =>
                      returnConnectionData(account)
                    )}
                  </Td>
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
};

export default View;
