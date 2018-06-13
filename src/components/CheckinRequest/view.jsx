import React from "react";

import Table from "../Table";
import Thead from "../Table/Thead";
import Tbody from "../Table/Tbody";
import Td from "../Table/Td";
import Th from "../Table/Th";

const View = () => (
  <div id="checkin-request">
    <Table>
      <Thead>
        <Th filterColor="yellow">Date</Th>
        <Th>First</Th>
      </Thead>
      <Tbody>
        <tr>
          <Td filterColor="gray">1</Td>
          <Td>algo</Td>
        </tr>
        <tr>
          <Td>2</Td>
          <Td>algo</Td>
        </tr>
        <tr>
          <Td>4</Td>
          <Td>algo</Td>
        </tr>
        <tr>
          <Td>4</Td>
          <Td>algo</Td>
        </tr>
        <tr>
          <Td>4</Td>
          <Td>algo</Td>
        </tr>
        <tr>
          <Td>4</Td>
          <Td>algo</Td>
        </tr>
        <tr>
          <Td>4</Td>
          <Td>algo</Td>
        </tr>
        <tr>
          <Td>4</Td>
          <Td>algo</Td>
        </tr>
      </Tbody>
    </Table>
  </div>
);

export default View;
