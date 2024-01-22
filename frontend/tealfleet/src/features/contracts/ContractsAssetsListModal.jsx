import * as React from "react";
import { useState, useEffect } from "react";

// import location of the API server
import { API_ENDPOINT } from "../../constants/apiEndpoint";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

function ContractsAssetsListModal({ isOpen, onClose, btnRef, contract }) {
  const [contractData, setContractData] = useState([]);

  const AssetsDataLoader = async (contractNo) => {
    try {
      // Fetch Contracts info for contracts table
      const cItems = await fetch(
        `http://${API_ENDPOINT}/contracts/numbers/${contractNo}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const data = await cItems.json();
      setContractData(data);
    } catch (error) {
      console.error("Error loading asset data:", error);
    }
  };

  useEffect(() => {
    // Call the asynchronous function when the component mounts
    AssetsDataLoader(contract);
  }, [contract]); // Trigger the effect when the contract changes

  return (
    <Modal
      onClose={onClose}
      finalFocusRef={btnRef}
      isOpen={isOpen}
      scrollBehavior="inside"
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{contract}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
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
                <Th>ASSET NAME</Th>
                <Th>SERIAL NUMBER</Th>
              </Tr>
            </Thead>
            <Tbody>
              {contractData.data &&
                contractData.data.map((data) => (
                  <Tr key={data.hardware_asset_id || data.software_asset_id}>
                    <Td>
                      {data.software_asset_name || data.hardware_asset_name}
                    </Td>
                    <Td>{data.hardware_serial_no}</Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" size="sm" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ContractsAssetsListModal;
