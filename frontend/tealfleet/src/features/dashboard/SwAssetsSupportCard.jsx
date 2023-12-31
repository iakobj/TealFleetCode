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
} from "@chakra-ui/react";

function SwAssetsSupportCard({ SwAssetsSupportCardData }) {
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
            <TableCaption>
              Support status of appliance suits by vendor
            </TableCaption>
            <Thead>
              <Tr>
                <Th>VENDOR</Th>
                <Th>SUPPORTED</Th>
                <Th>UNSUPPORTED</Th>
              </Tr>
            </Thead>
            <Tbody>
              {SwAssetsSupportCardData.map((data) => (
                <Tr key={data.vendor}>
                  <Td>{data.vendor}</Td>
                  <Td>{data.supported}</Td>
                  <Td>{data.unsupported}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
}

export default SwAssetsSupportCard;
