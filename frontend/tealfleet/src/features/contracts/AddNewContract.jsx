import * as React from "react";
import { useState, useEffect } from "react";

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
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Card,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

import { CloseIcon, ArrowForwardIcon } from "@chakra-ui/icons";

// import location of the API server
import { API_ENDPOINT } from "../../constants/apiEndpoint";

import AddAssetsToContracts from "./AddAssetsToContract";

import { useFormik } from "formik";
import * as Yup from "yup";

function AddNewContract({ isOpen, onClose }) {
  const [contractTypes, setContractTypes] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [isAssetsModalOpen, setIsAssetsModalOpen] = useState(false);
  const formDataLoader = async () => {
    try {
      const getContractTypes = await fetch(
        `http://${API_ENDPOINT}/contracts/types`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const getTenants = await fetch(`http://${API_ENDPOINT}/tenants`, {
        method: "GET",
        credentials: "include",
      });

      const contractTypes = await getContractTypes.json();
      const tenants = await getTenants.json();

      setContractTypes(contractTypes);
      setTenants(tenants);
    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };

  useEffect(() => {
    formDataLoader();
  }, []);

  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      contract_no: "",
      contract_type_id: "",
      contract_sla: "",
      tenant_id: "",
      contractor_name: "",
      contract_valid_from: "",
      contract_valid_to: "",
      contract_description: "",
    },

    validationSchema: Yup.object({
      contract_no: Yup.string().required("Required"),
      contract_type_id: Yup.string().required("Required"),
      contract_sla: Yup.string(),
      tenant_id: Yup.string().required("Required"),
      contractor_name: Yup.string().required("Required"),
      contract_valid_from: Yup.date().required("Required"),
      contract_valid_to: Yup.date().required("Required"),
      contract_description: Yup.string(),
    }),

    onSubmit: (values) => {
      const newContract = JSON.stringify(values, null, 2);
      try {
        fetch(`http://${API_ENDPOINT}/contracts/add`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: newContract,
        }).then(async (response) => {
          if (response.status == 200) {
            toast({
              title: "Contract added",
              description: "New contract was successefuly added",
              status: "success",
              position: "bottom",
              variant: "subtle",
            });
            // after contract is created show option to add assets to the contract
            setIsAssetsModalOpen(true); // Show the AddAssetsToContracts modal
            onClose(true);
          } else {
            const responseData = await response.json();
            const errorMessage = responseData.error;

            toast({
              title: "Error",
              description: errorMessage,
              status: "error",
              position: "bottom",
              variant: "subtle",
            });
          }
        });
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  const steps = [
    { title: "Create contract", description: "Contract Information" },
    { title: "Add assets", description: "Search & Select assets" },
  ];

  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay bg="blackAlpha.300" />
        <ModalContent>
          <ModalHeader bg="#f4f7f4" marginBottom={"1em"}>
            CREATE NEW CONTRACT
          </ModalHeader>
          <ModalCloseButton marginTop={"0.5em"}/>
          <form onSubmit={formik.handleSubmit}>
            <ModalBody>
              <Card marginBottom={"2em"} padding={"0.5em"}>
              <Stepper index={activeStep} colorScheme='teal'>
                {steps.map((step, index) => (
                  <Step key={index}>
                    <StepIndicator>
                      <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                      />
                    </StepIndicator>

                    <Box flexShrink="0">
                      <StepTitle>{step.title}</StepTitle>
                      <StepDescription>{step.description}</StepDescription>
                    </Box>

                    <StepSeparator />
                  </Step>
                ))}
              </Stepper>
              </Card>
              <FormControl isRequired>
                <FormLabel>Contract Name</FormLabel>
                <Input
                  id="contract_no"
                  name="contract_no"
                  type="contract_no"
                  placeholder="Contract name"
                  focusBorderColor="teal.600"
                  onChange={formik.handleChange}
                  value={formik.values.contract_no}
                  {...formik.getFieldProps("contract_no")}
                />
                {formik.touched.contract_no && formik.errors.contract_no ? (
                  <div>{formik.errors.contract_no}</div>
                ) : null}
              </FormControl>

              <FormControl>
                <FormLabel marginTop="1.2em">Contract type</FormLabel>
                <Select
                  id="contract_type_id"
                  name="contract_type_id"
                  type="text"
                  placeholder="Select contract type"
                  focusBorderColor="teal.600"
                  onChange={formik.handleChange}
                  value={formik.values.tenant_id}
                  {...formik.getFieldProps("contract_type_id")}
                >
                  {contractTypes.data &&
                    contractTypes.data.map((data) => (
                      <option
                        key={data.contract_type_id}
                        value={data.contract_type_id}
                      >
                        {" "}
                        {data.type}{" "}
                      </option>
                    ))}
                </Select>
                {formik.touched.contract_type_id &&
                formik.errors.contract_type_id ? (
                  <div>{formik.errors.contract_type_id}</div>
                ) : null}
              </FormControl>

              <FormControl isRequired>
                <FormLabel marginTop="1.2em">Contractor Name</FormLabel>
                <Input
                  id="contractor_name"
                  name="contractor_name"
                  type="text"
                  placeholder="Contractor Name"
                  focusBorderColor="teal.600"
                  onChange={formik.handleChange}
                  value={formik.values.contractor_name}
                  {...formik.getFieldProps("contractor_name")}
                />
                {formik.touched.contractor_name &&
                formik.errors.contractor_name ? (
                  <div>{formik.errors.contractor_name}</div>
                ) : null}
              </FormControl>
              <FormControl>
                <FormLabel marginTop="1.2em">Service Level Agreement</FormLabel>
                <Input
                  id="contract_sla"
                  name="contract_sla"
                  type="text"
                  placeholder="Service Level Agreement"
                  focusBorderColor="teal.600"
                  onChange={formik.handleChange}
                  value={formik.values.contract_sla}
                  {...formik.getFieldProps("contract_sla")}
                />
                {formik.touched.contract_sla && formik.errors.contract_sla ? (
                  <div>{formik.errors.contract_sla}</div>
                ) : null}
              </FormControl>
              <FormControl isRequired>
                <FormLabel marginTop="1.2em">Tenant</FormLabel>
                <Select
                  id="tenant_id"
                  name="tenant_id"
                  type="text"
                  placeholder="Select tenant"
                  focusBorderColor="teal.600"
                  onChange={formik.handleChange}
                  value={formik.values.tenant_id}
                  {...formik.getFieldProps("tenant_id")}
                >
                  {tenants.data &&
                    tenants.data.map((data) => (
                      <option key={data.tenant_id} value={data.tenant_id}>
                        {" "}
                        {data.tenant_name}{" "}
                      </option>
                    ))}
                </Select>

                {formik.touched.tenant_id && formik.errors.tenant_id ? (
                  <div>{formik.errors.tenant_id}</div>
                ) : null}
              </FormControl>

              <Flex>
                <Box>
                  <FormControl isRequired>
                    <FormLabel marginTop="1.2em">Contract Start Date</FormLabel>
                    <Input
                      id="contract_valid_from"
                      name="contract_valid_from"
                      type="date"
                      focusBorderColor="teal.600"
                      onChange={formik.handleChange}
                      value={formik.values.contract_valid_from}
                      {...formik.getFieldProps("contract_valid_from")}
                    />
                    {formik.touched.contract_valid_from &&
                    formik.errors.contract_valid_from ? (
                      <div>{formik.errors.contract_valid_from}</div>
                    ) : null}
                  </FormControl>
                </Box>
                <Spacer />
                <Box>
                  <FormControl isRequired>
                    <FormLabel marginTop="1.2em">Contract End Date</FormLabel>
                    <Input
                      id="contract_valid_to"
                      name="contract_valid_to"
                      type="date"
                      focusBorderColor="teal.600"
                      onChange={formik.handleChange}
                      value={formik.values.contract_valid_to}
                      {...formik.getFieldProps("contract_valid_to")}
                    />
                    {formik.touched.contract_valid_to &&
                    formik.errors.contract_valid_to ? (
                      <div>{formik.errors.contract_valid_to}</div>
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

            <ModalFooter bg="#f4f7f4" marginTop="1em">
              <Button
                marginRight="1em"
                leftIcon={<CloseIcon />}
                size="sm"
                variant="ghost"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
              <Button
                type="submit"
                rightIcon={<ArrowForwardIcon />}
                size="sm"
                colorScheme="teal"
              >
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      <AddAssetsToContracts
        isOpen={isAssetsModalOpen}
        onClose={() => setIsAssetsModalOpen(false)}
      />
    </div>
  );
}

export default AddNewContract;
