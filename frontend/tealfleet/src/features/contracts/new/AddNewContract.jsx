import * as React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  Button,
  Input,
  Textarea,
  Box,
  Text,
  Heading,
  Flex,
  Spacer,
  CardHeader,
  Card,
  Divider,
  SimpleGrid,
  Grid,
  GridItem,
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
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

import { CloseIcon, ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

// import location of the API server
import { API_ENDPOINT } from "../../../constants/apiEndpoint";

import AssetFilter from "./AssetFilter";

import { useFormik } from "formik";
import * as Yup from "yup";

function AddNewContract() {
  const [contractTypes, setContractTypes] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [newContractNo, setNewContractNo] = useState("");
  const [newContractId, setNewContractId] = useState("");
  const [stepperAt, setStepperAt] = useState(0);
  const toast = useToast();
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
            let contract_id = await response.json();
            setNewContractId(contract_id.contract_id);
            toast({
              title: "Contract added",
              description: `New contract was successefuly added with ID: ${contract_id.contract_id}`,
              status: "success",
              position: "bottom",
              variant: "subtle",
            });

            if (values && values.contract_no) {
              setNewContractNo(values.contract_no);
              setStepperAt(1);
            }
          } else {
            toast({
              title: "Error",
              description:
                "Oops! Our hamsters are on a break. Submission failed.",
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
    { title: "Contract", description: "Contract details" },
    { title: "Add Assets", description: "To the new contract" },
  ];

  return (
    <Box>
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={{ sm: "12", md: "12", lg: "3", xl: "2" }}>
          <Card
            padding="0.2em"
            paddingTop={"0.3em"}
            variant="outline"
            bg="#fdfdfd"
            borderRadius={"0.6em 0.6em 0.6em 0.6em"}
            height={"100%"}
          >
            <CardHeader textAlign={"center"}>
              <Heading
                marginTop={{
                  sm: "0.5em",
                  md: "0.5em",
                  lg: "0.5em",
                  xl: "0.5em",
                }}
                as="b"
                color="gray.600"
                fontSize={{ sm: "sm", md: "md", lg: "sm", xl: "sm" }}
              >
                CREATE NEW CONTRACT
              </Heading>
              <Divider paddingTop={"1em"}/>
            </CardHeader>

            <Stepper
              index={stepperAt}
              orientation="vertical"
              colorScheme="teal"
              gap="0"
              height="8em"
              marginTop={"0.5em"}
              marginLeft={{
                sm: "0.6em",
                md: "0.6em",
                lg: "0.6em",
                xl: "0.6em",
              }}
            >
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
        </GridItem>

        <GridItem colSpan={{ sm: "12", md: "12", lg: "9", xl: "10" }}>
          {newContractNo && newContractId ? (
            <AssetFilter newContractId={newContractId} newContractNo={newContractNo} />
          ) : (
<form onSubmit={formik.handleSubmit}>
            <Box marginTop={{ base: "1em", sm: "1em", md: "0em" }}>
              <Card
                padding="1em"
                variant="outline"
                bg="#fdfdfd"
                borderRadius={"0.6em 0.6em 0.6em 0.6em"}
              >
                <SimpleGrid columns={[1, null, 2]} spacing="1em">
                  <FormControl isRequired>
                    <FormLabel>Tenant</FormLabel>
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
                    <FormLabel>Contract type</FormLabel>
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
                    <FormLabel>Contractor Name</FormLabel>
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
                    <FormLabel marginTop="1.2em">
                      Service Level Agreement
                    </FormLabel>
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
                    {formik.touched.contract_sla &&
                    formik.errors.contract_sla ? (
                      <div>{formik.errors.contract_sla}</div>
                    ) : null}
                  </FormControl>

                  <SimpleGrid
                    minChildWidth="10em"
                    spacing={{ sm: "1em", md: "1em", lg: "1em", xl: "1em" }}
                  >
                    <Box>
                      <FormControl isRequired>
                        <FormLabel marginTop="1.2em">
                          Contract Start Date
                        </FormLabel>
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

                    <Box>
                      <FormControl isRequired>
                        <FormLabel marginTop="1.2em">
                          Contract End Date
                        </FormLabel>
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
                  </SimpleGrid>

                  <FormControl>
                    <FormLabel marginTop="1.2em">
                      Contract Description
                    </FormLabel>
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
                </SimpleGrid>
              </Card>
            </Box>
            <Card
              padding="0.6em"
              marginTop={"1em"}
              variant="outline"
              bg="#fdfdfd"
              borderRadius={"0.6em 0.6em 0.6em 0.6em"}
            >
              <Flex>
                <Spacer />
                <NavLink to="/support/contracts">
                <Button
                  marginRight={"1.2em"}
                  variant={"outline"}
                  size="sm"
                  colorScheme="teal"
                  width={"5em"}
                >
                  Close
                </Button>
                </NavLink>

                <Button
                  type="submit"
                  rightIcon={<ArrowForwardIcon />}
                  size="sm"
                  colorScheme="teal"
                  width={"7em"}
                >
                  Submit
                </Button>
              </Flex>
            </Card>
          </form>
          ) }
          
        </GridItem>
      </Grid>
    </Box>
  );
}

export default AddNewContract;
