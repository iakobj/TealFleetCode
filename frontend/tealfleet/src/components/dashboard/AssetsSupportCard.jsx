// React components
import * as React from "react";

// Chakra-UI components
import {
  Box,
  Text,
  Flex,
  Spacer,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function AssetsSupportCard({ AssetsSupportCardData }) {
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
                <Th isNumeric>SUPPORTED</Th>
                <Th isNumeric>UNSUPPORTED</Th>
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
