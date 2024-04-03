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

function AddNewContract({ isOpen, onClose }) {
  const formik = useFormik({
    initialValues: {
      contract_no: "",
      contractor: "",
      sla: "",
      tenant: "",
      contractor: "",
      contract_start: "",
      contract_end: "",
      contract_description: "",
    },

    validationSchema: Yup.object({
      contract_no: Yup.string().required("Required"),
      contractor: Yup.string().required("Required"),
      sla: Yup.string(),
      tenant: Yup.string().required("Required"),
      contractor: Yup.string().required("Required"),
      contract_start: Yup.string().required("Required"),
      contract_end: Yup.string().required("Required"),
      contract_description: Yup.string(),
    }),

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
        <form onSubmit={formik.handleSubmit}>
        <ModalBody>
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
                {...formik.getFieldProps("contract_no")}
              />
              {formik.touched.contract_no && formik.errors.contract_no ? (
                <div>{formik.errors.contract_no}</div>
              ) : null}
            </FormControl>

            <FormControl isRequired>
              <FormLabel marginTop="1.2em">Contractor Name</FormLabel>
              <Input
                id="contractor"
                name="contractor"
                type="text"
                placeholder="Contractor Name"
                focusBorderColor="teal.600"
                onChange={formik.handleChange}
                value={formik.values.contractor}
                {...formik.getFieldProps("contractor")}
              />
              {formik.touched.contractor && formik.errors.contractor ? (
                <div>{formik.errors.contractor}</div>
              ) : null}
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
                {...formik.getFieldProps("sla")}
              />
              {formik.touched.sla && formik.errors.sla ? (
                <div>{formik.errors.sla}</div>
              ) : null}
            </FormControl>
            <FormControl isRequired>
              <FormLabel marginTop="1.2em">Tenant</FormLabel>
              <Select
                id="tenant"
                name="tenant"
                type="text"
                placeholder="Select Tenant"
                focusBorderColor="teal.600"
                onChange={formik.handleChange}
                value={formik.values.tenant}
                {...formik.getFieldProps("tenant")}
              >
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
                </Select>


              {formik.touched.tenant && formik.errors.tenant ? (
                <div>{formik.errors.tenant}</div>
              ) : null}
            </FormControl>

            <Flex>
              <Box>
                <FormControl isRequired>
                  <FormLabel marginTop="1.2em">Contract Start Date</FormLabel>
                  <Input
                    id="contract_start"
                    name="contract_start"
                    type="date"
                    focusBorderColor="teal.600"
                    onChange={formik.handleChange}
                    value={formik.values.contract_start}
                    {...formik.getFieldProps("contract_start")}
                  />
                  {formik.touched.contract_start &&
                  formik.errors.contract_start ? (
                    <div>{formik.errors.contract_start}</div>
                  ) : null}
                </FormControl>
              </Box>
              <Spacer />
              <Box>
                <FormControl isRequired>
                  <FormLabel marginTop="1.2em">Contract End Date</FormLabel>
                  <Input
                    id="contract_end"
                    name="contract_end"
                    type="date"
                    focusBorderColor="teal.600"
                    onChange={formik.handleChange}
                    value={formik.values.contract_end}
                    {...formik.getFieldProps("contract_end")}
                  />
                  {formik.touched.contract_end && formik.errors.contract_end ? (
                    <div>{formik.errors.contract_end}</div>
                  ) : null}
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
                {...formik.getFieldProps("contract_description")}
              />
              {formik.touched.contract_description &&
              formik.errors.contract_description ? (
                <div>{formik.errors.contract_description}</div>
              ) : null}
            </FormControl>
          
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
          <Button type="submit" rightIcon={<ArrowForwardIcon />} size="sm" colorScheme="teal">
            Next
          </Button>
        </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default AddNewContract;
