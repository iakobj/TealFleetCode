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

function SwAssetsTotalCard({ SwAssetsTotalCardData }) {
  return (
    <Card boxShadow="md">
      <CardBody>
        <TableContainer>
          <Table
            variant="simple"
            size={{
              base: "sm",
              sm: "sm",
              md: "md",
              lg: "md",
            }}
          >
            <TableCaption>Total appliance suits by vendor</TableCaption>
            <Thead>
              <Tr>
                <Th>VENDOR</Th>
                <Th>AMOUNT</Th>
                <Th>TOTAL %</Th>
              </Tr>
            </Thead>
            <Tbody>
              {SwAssetsTotalCardData.map((data) => (
                <Tr key={data.vendor}>
                  <Td>{data.vendor}</Td>
                  <Td>{data.total}</Td>
                  <Td>
                    <Progress
                      marginLeft="-4em"
                      colorScheme="teal"
                      size="md"
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

export default SwAssetsTotalCard;
