import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Button,
  Input,
  Textarea,
  Box,
  Text,
  Flex,
  Spacer,
  HStack,
} from "@chakra-ui/react";

import { CloseIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import { useFormik } from "formik";
import * as Yup from "yup";

const ContractSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});

function AddNewContract({ isOpen, onClose }) {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(5px)" />
      <ModalContent>
        <ModalHeader>Create new contract</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <form onSubmit={formik.handleSubmit}>
            <FormControl isRequired>
              <FormLabel>Contract Number</FormLabel>
              <Input
                id="contract_no"
                name="contract_no"
                type="contract_no"
                placeholder="Contract Number"
                focusBorderColor="teal.600"
                onChange={formik.handleChange}
                value={formik.values.contract_no}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel marginTop="1.2em">Contractor Name</FormLabel>
              <Input
                id="contractor"
                name="contractor"
                type="contractor"
                placeholder="Contractor Name"
                focusBorderColor="teal.600"
                onChange={formik.handleChange}
                value={formik.values.contractor}
              />
            </FormControl>
            <FormControl>
              <FormLabel marginTop="1.2em">Service Level Agreement</FormLabel>
              <Input
                id="sla"
                name="sla"
                type="text"
                placeholder="Service Level Agreement"
                focusBorderColor="teal.600"
                onChange={formik.handleChange}
                value={formik.values.sla}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel marginTop="1.2em">Tenant Name</FormLabel>
              <Select
                id="tenant"
                name="tenant"
                type="text"
                placeholder="Select Tenant"
                focusBorderColor="teal.600"
                onChange={formik.handleChange}
                value={formik.values.tenant}
              />
            </FormControl>

            <Flex>
              <Box>
                <FormControl isRequired>
                  <FormLabel marginTop="1.2em">Contract Start Date</FormLabel>
                  <Input
                    id="contract_start"
                    name="contract_start"
                    type="date"
                    placeholder="YYYY-MM-DD"
                    focusBorderColor="teal.600"
                    onChange={formik.handleChange}
                    value={formik.values.contract_start}
                  />
                </FormControl>
              </Box>
              <Spacer/>
              <Box>
                <FormControl isRequired>
                  <FormLabel marginTop="1.2em">Contract End Date</FormLabel>
                  <Input
                    id="contract_end"
                    name="contract_end"
                    type="date"
                    placeholder="YYYY-MM-DD"
                    focusBorderColor="teal.600"
                    onChange={formik.handleChange}
                    value={formik.values.contract_end}
                  />
                </FormControl>
              </Box>
            </Flex>

            <FormControl>
              <FormLabel marginTop="1.2em">Contract Description</FormLabel>
              <Textarea
                id="contract_description"
                name="contract_description"
                type="contract_description"
                placeholder="Short contract description or notes"
                focusBorderColor="teal.600"
                onChange={formik.handleChange}
                value={formik.values.contract_description}
              />
            </FormControl>
          </form>
        </ModalBody>

        <ModalFooter marginTop="3em">
          <Button
            leftIcon={<CloseIcon />}
            size="sm"
            variant="ghost"
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
          <Button rightIcon={<ArrowForwardIcon />} size="sm" colorScheme="teal">
            Next
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddNewContract;
