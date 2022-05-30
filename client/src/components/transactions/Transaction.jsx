import {
  Container,
  Table,
  TableRow,
  TableHeading,
  TableData,
  TransactionButton,
} from "./transactionStyles";

const Button = ({ type }) => {
  return (
    <TransactionButton className={`btn ${type}`}>{type}</TransactionButton>
  );
};

export const Transaction = ({ data }) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <Container>
       <h2 className="title">Latest transactions</h2> 
      <Table>
        <TableRow>
          <TableHeading>Id</TableHeading>
          <TableHeading>Customer</TableHeading>

          <TableHeading>Header</TableHeading>
          <TableHeading>Type</TableHeading>
          <TableHeading>Amount</TableHeading>
          <TableHeading>Status</TableHeading>
        </TableRow>
        {userData.user.role !== "admin" ? (
          <>
            {data.map(
              (item, index) =>
                item.username === userData.user.name && (
                  <>
                    <TableRow key={index}>
                      <TableData>{item.id}</TableData>
                      <TableData>{item.header}</TableData>
                      <TableData>
                        <div className="userInfo">
                          <span>{item.username}</span>
                        </div>
                      </TableData>

                      <TableData>{item.amount}</TableData>
                      <TableData>
                        <Button type={item.status} />
                      </TableData>
                    </TableRow>
                  </>
                )
            )}
          </>
        ) : (
          <>
            {data.map((item, index) => (
              <>
                <TableRow key={index}>
                  <TableData>{item.id}</TableData>
                  <TableData>
                    <div className="userInfo">
                      <span>{item.username}</span>
                    </div>
                  </TableData>
                  <TableData>{item.header}</TableData>
                  <TableData>{item.type}</TableData>
                  <TableData>{item.amount}</TableData>
                  <TableData>
                    <Button type={item.status} />
                  </TableData>
                </TableRow>
              </>
            ))}
          </>
        )}
      </Table>
    </Container>
  );
};
