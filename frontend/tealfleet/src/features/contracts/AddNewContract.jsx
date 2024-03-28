import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";

function AddNewContract({ isOpen, onClose }) {

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Contract</ModalHeader>
        <ModalCloseButton />
        
        <ModalBody>


        </ModalBody>

        <ModalFooter>
          <Button size="sm" variant="ghost" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button size="sm" colorScheme="teal">
            Next
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddNewContract;
