// React components
import * as React from "react";

// Chakra-UI components
import {
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

import { ChevronLeftIcon, ChevronRightIcon, CheckCircleIcon, WarningTwoIcon } from "@chakra-ui/icons";

function ContractsListCard({ ContractsListCardData }) {
  return (
    <Card boxShadow="md">
      <CardBody>
        <TableContainer>
          <Table
            variant="simple"
            size={{
              base: "sm",
              sm: "sm",
              md: "sm",
              lg: "sm",
              xl: "md",
            }}
          >
            <Thead>
              <Tr>
                <Th>No.</Th>
                <Th>CONTRACT No.</Th>
                <Th>VALID</Th>
                <Th>CONTRACT TYPE</Th>
                <Th>CONTRACTOR</Th>
                <Th>VALID FROM</Th>
                <Th>VALID UNTIL</Th>
                <Th>ASSETS</Th>
              </Tr>
            </Thead>
            <Tbody>
              {ContractsListCardData.map((data) => (
                <Tr key={data.contract_id}>
                  <Td>{data.no}</Td>
                  <Td>{data.contract_no}</Td>
                  <Td>{data.contract_valid === 'TRUE' ? <CheckCircleIcon color="teal"/> : <WarningTwoIcon color="red.600"/>}</Td>
                  <Td>{data.contract_type}</Td>
                  <Td>{data.contractor_name}</Td>
                  <Td>{data.valid_from}</Td>
                  <Td>{data.valid_to}</Td>
                  <Td>
                    <Button
                      size="sm"
                      colorScheme="teal"
                      variant="outline"
                      rightIcon={<ChevronRightIcon />}
                    >
                      Assets
                    </Button>
                  </Td>
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

export default ContractsListCard;
