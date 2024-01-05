import * as React from "react";

// import location of the API server
import { API_ENDPOINT } from '../../constants/apiEndpoint';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

function ContractsAssetsListModal({ isOpen, onClose, btnRef, contract }) {
    const AssetsDataLoader = async () => {
        // Fetch Contracts info for contracts table
        const cItems = await fetch(`http://${API_ENDPOINT}/contracts/`);
      
        return {
          items: await cItems.json(),
        };
      };

      const AssetData = AssetsDataLoader();

  return (
    <Modal
      onClose={onClose}
      finalFocusRef={btnRef}
      isOpen={isOpen}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Assets covered in {contract}</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ContractsAssetsListModal;
