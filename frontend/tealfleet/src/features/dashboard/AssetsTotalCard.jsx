// React components
import * as React from "react";

// Chakra-UI components
import {
  Card,
  CardBody,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Progress,
} from "@chakra-ui/react";

function AssetsTotalCard({ AssetsTotalCardData }) {
  return (
    <Card variant="outline" bg="#fdfdfd" borderRadius={"0.6em 0.6em 0.6em 0.6em"}>
      <CardBody>
        <TableContainer>
          <Table
            variant="simple"
            size={{
              base: "sm",
              sm: "sm",
              md: "sm",
              lg: "md",
            }}
          >
            <TableCaption>Total assets by vendor</TableCaption>
            <Thead>
              <Tr>
                <Th>VENDOR</Th>
                <Th>AMOUNT</Th>
                <Th>TOTAL %</Th>
              </Tr>
            </Thead>
            <Tbody>
              {AssetsTotalCardData.map((data) => (
                <Tr key={data.vendor}>
                  <Td textTransform="capitalize">{data.vendor}</Td>
                  <Td>{data.total}</Td>
                  <Td>
                    <Progress
                      marginLeft="-4em"
                      colorScheme="teal"
                      size={{
                        base: "sm",
                        sm: "sm",
                        md: "sm",
                        lg: "md",
                      }}
                      value={data.percent}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
}

export default AssetsTotalCard;
