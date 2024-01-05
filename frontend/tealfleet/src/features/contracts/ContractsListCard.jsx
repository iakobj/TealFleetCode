// React components
import * as React from "react";
import { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useDisclosure } from '@chakra-ui/hooks';
import ContractsAssetsListModal from "./ContractsAssetsListModal";

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

function ContractsListCard() {
  const btnRef = useRef(null);
  const [selectedContract, setSelectedContract] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const loaderData = useLoaderData();

  const contractsItems = loaderData.cItems.data;

  const openModal = (contractNo) => {
    setSelectedContract(contractNo);
    onOpen();
  };

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
                <Th>CONTRACT No.</Th>
                <Th>VALID</Th>
                <Th>CONTRACT TYPE</Th>
                <Th>TENANT</Th>
                <Th>CONTRACTOR</Th>
                <Th>VALID FROM</Th>
                <Th>VALID UNTIL</Th>
                <Th>ASSETS</Th>
              </Tr>
            </Thead>
            <Tbody>
              {contractsItems.map((data) => (
                <Tr key={data.contract_id}>
                  <Td>{data.contract_no}</Td>
                  <Td>{data.contract_valid === 'true' ? <CheckCircleIcon color="teal"/> : <WarningTwoIcon color="red.600"/>}</Td>
                  <Td>{data.type}</Td>
                  <Td>{data.tenant_name}</Td>
                  <Td>{data.contractor_name}</Td>
                  <Td>{data.contract_valid_from}</Td>
                  <Td>{data.contract_valid_to}</Td>
                  <Td>
                    <Button
                      size={{
                        base: "xs",
                        sm: "xs",
                        md: "xs",
                        lg: "sm",
                        xl: "sm",
                      }}
                      ref={btnRef}
                      onClick={() => openModal(data.contract_no)}
                      colorScheme="teal"
                      variant="outline"
                      rightIcon={<ChevronRightIcon />}
                    >
                      Assets
                    </Button>
                    <ContractsAssetsListModal isOpen={isOpen} onClose={onClose} btnRef={btnRef} contract={selectedContract}/>
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
