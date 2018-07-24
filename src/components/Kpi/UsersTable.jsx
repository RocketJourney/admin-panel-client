import React from "react";

import { parseHour } from "../../helpers/utils";

import Table from "../Table";
import Thead from "../Table/Thead";
import Tbody from "../Table/Tbody";
import Td from "../Table/Td";
import Th from "../Table/Th";

import styles from "./styles.less";

const UsersTable = ({ users, getTeamsNumber, returnConnectionData }) => (
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
              <span key={account.id} className={styles.email}>
                {account.email}
              </span>
            ))}
          </Td>
          <Td>{user.accounts.map(account => returnConnectionData(account))}</Td>
          <Td>
            {user.events.length > 0 ? (
              <span className={styles.green}>Started</span>
            ) : (
              <span className={styles.red}>Noup</span>
            )}
          </Td>
          <Td>{user.streak}</Td>
          <Td>{getTeamsNumber(user.teams)}</Td>
          <Td color="gray">
            {user.inserted_at.day}/
            {user.inserted_at.month}/
            {user.inserted_at.year}
          </Td>
          <Td color="gray">{parseHour(user.last_seen)}</Td>
        </tr>
      ))}
    </Tbody>
  </Table>
);

export default UsersTable;
