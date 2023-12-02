// React components
import * as React from "react";

// Chakra-UI components
import {
  Box,
  Text,
  Flex,
  Spacer,
  Stack,
  Button,
  Card,
  CardBody,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function AssetsListCard({ AssetsListCardData }) {
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
            <Thead>
              <Tr>
                <Th>No.</Th>
                <Th>VENDOR</Th>
                <Th>MODEL</Th>
                <Th>SUPPORT</Th>
                <Th>SUPPORTED UNTIL</Th>
                <Th>SITE</Th>
              </Tr>
            </Thead>
            <Tbody>
              {AssetsListCardData.map((data) => (
                <Tr key={data.asset_id}>
                  <Td>{data.no}</Td>
                  <Td>{data.vendor}</Td>
                  <Td>{data.model}</Td>
                  <Td>{data.support}</Td>
                  <Td>{data.supported_until}</Td>
                  <Td>{data.site_city}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Stack marginTop="1em" direction="row" spacing={4} align="center">
          <Button
            size="sm"
            colorScheme="teal"
            variant="solid"
            leftIcon={<ChevronLeftIcon />}
          >
            Back
          </Button>
          <Button
            size="sm"
            colorScheme="teal"
            variant="solid"
            rightIcon={<ChevronRightIcon />}
          >
            Next
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default AssetsListCard;
