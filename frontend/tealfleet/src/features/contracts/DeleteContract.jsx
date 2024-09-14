import * as React from "react";
import { useToast } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

// import location of the API server
import { API_ENDPOINT } from "../../constants/apiEndpoint";

import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Text,
} from "@chakra-ui/react";

function DeleteContract({ selectedContract, isOpen, onClose, cancelRef }) {
  const toast = useToast();

  console.log(selectedContract);

  const removeContract = () => {
    let contract_id = "";
    let contract_no = "";

    if (selectedContract.data && selectedContract.data[0]) {
      contract_id = selectedContract.data[0].contract_id;
      contract_no = selectedContract.data[0].contract_no;
    }

    fetch(`${API_ENDPOINT}/contracts/remove/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ contract_id }), // make sure to send the body as JSON
    })
      .then(async (response) => {
        if (response.ok) {
          toast({
            title: `${contract_no} deleted`,
            description: `Contract ${contract_no} with ID: ${contract_id} was deleted.`,
            status: "success",
            position: "bottom",
            variant: "subtle",
          });
        } else {
          toast({
            title: "Error",
            description: `Error deleting ${contract_no}`,
            status: "error",
            position: "bottom",
            variant: "subtle",
          });
        }
      })
      .catch((error) => {
        console.error("Error deleting contract:", error);
      })
      .finally(() => {
        onClose(); // Close the dialog after the promise is resolved
      });
  };

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Contract
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <NavLink to={"/support/contracts"}>
                <Button colorScheme="red" onClick={removeContract} ml={3}>
                  Delete
                </Button>
              </NavLink>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default DeleteContract;
