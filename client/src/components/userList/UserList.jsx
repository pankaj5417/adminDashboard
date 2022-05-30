import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./userListStyle.js";

import {
  Container,
  Table,
  TableRow,
  TableHeading,
  TableData,
} from "./userListStyle";

export const UserList = () => {
  const [data, setData] = useState(userRows);

  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <>
      <div className="userList">
        <Container>
          <h2 className="title">Users List</h2>
          <Table>
            <TableRow>
              <TableHeading>Id</TableHeading>
              <TableHeading>Name</TableHeading>

              <TableHeading>Email</TableHeading>
              <TableHeading>Phone</TableHeading>
              <TableHeading>Status</TableHeading>
              <TableHeading>Amount</TableHeading>
              <TableHeading>Type</TableHeading>
            </TableRow>
            {data.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableData>{item.id}</TableData>
                  <TableData>
                    <div className="userInfo">
                      <span>{item.username}</span>
                    </div>
                  </TableData>
                  <TableData>{item.email}</TableData>
                  <TableData>{item.phone}</TableData>
                  <TableData>{item.status}</TableData>
                  <TableData>{item.amount}</TableData>
                  {userData.user.role === "admin" ? (
                    <TableData>{item.type}</TableData>
                  ) : (
                    ""
                  )}
                </TableRow>
              );
            })}
          </Table>
        </Container>
      </div>
    </>
  );
};
