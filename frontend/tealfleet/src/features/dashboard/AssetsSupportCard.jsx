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

function AssetsSupportCard({ AssetsSupportCardData }) {
  return (
    <Card variant="outline" bg="#fdfdfd" borderRadius={"0.6em 0.6em 0.6em 0.6em"}>
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
              {AssetsSupportCardData.map((data) => (
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

export default AssetsSupportCard;
