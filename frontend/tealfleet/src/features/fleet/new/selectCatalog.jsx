import * as React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  FormControl,
  FormLabel,
  Select,
  Button,
  Box,
  Flex,
  Spacer,
  Card,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import FormStepper from "./FormStepper";

import { CloseIcon, ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

// import location of the API server
import { API_ENDPOINT } from "../../../constants/apiEndpoint";

import { useFormik } from "formik";
import * as Yup from "yup";

function SelectCatalog() {
  // On Form fetch the data will be saved here
  const [vendors, setVendors] = useState([]);
  const [models, setModels] = useState([]);

  // Selected items
  const [selectedVendor, setselectedVendor] = useState([]);
  const [SelectedModel, setSelectedModel] = useState([]);

  const vendorDataLoader = async () => {
    try {
      const getVendors = await fetch(`http://${API_ENDPOINT}/vendors`, {
        method: "GET",
        credentials: "include",
      });

      const vendors = await getVendors.json();
      setVendors(vendors);
    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };

  const modelDataLoader = async (selectedVendor) => {
    try {
      const getHwModels = await fetch(
        `http://${API_ENDPOINT}/hardware/catalogs/vendors/${selectedVendor}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const getSwModels = await fetch(
        `http://${API_ENDPOINT}/software/catalogs/vendors/${selectedVendor}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const hwModels = await getHwModels.json();
      const swModels = await getSwModels.json();

      Array.prototype.push.apply(hwModels,swModels); 
      setModels(hwModels);


      //setVendors(vendors);
    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };

  useEffect(() => {
    vendorDataLoader();
  }, []);

  const formik = useFormik({
    initialValues: {
      vendor_id: "",
      model_id: "",
    },

    validationSchema: Yup.object({
      vendor_id: Yup.string(),
      model_id: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      try {
        if (values) {
          setStepperAt(1);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <Box>
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={{ sm: "12", md: "12", lg: "3", xl: "2" }}>
          <FormStepper stepperAt={0} />
        </GridItem>

        <GridItem colSpan={{ sm: "12", md: "12", lg: "9", xl: "10" }}>
          <form onSubmit={formik.handleSubmit}>
            <Box marginTop={{ base: "1em", sm: "1em", md: "0em" }}>
              <Card
                padding="1em"
                minHeight={"17em"}
                variant="outline"
                bg="#fdfdfd"
                borderRadius={"0.6em 0.6em 0.6em 0.6em"}
              >
                <SimpleGrid columns={[1, null, 2]} spacing="1em">
                  <FormControl isRequired>
                    <FormLabel>Vendor</FormLabel>
                    <Select
                      id="vendor_id"
                      name="vendor_id"
                      type="text"
                      placeholder="Select vendor"
                      focusBorderColor="teal.600"
                      // Custom onChange handler
                      onChange={(event) => {
                        const selectedVendorId = event.target.value;
                        formik.setFieldValue("vendor_id", selectedVendorId);

                        const selectedVendor = vendors.data.find(
                          (vendor) => vendor.vendor_id === selectedVendorId
                        );
                        if (selectedVendor) {
                          setselectedVendor(selectedVendor.vendor_name);
                          modelDataLoader(selectedVendor.vendor_name);
                          console.log(
                            "Selected Vendor Name:",
                            selectedVendor.vendor_name
                          );
                        }
                      }}
                      value={formik.values.vendor_id}
                    >
                      {vendors.data &&
                        vendors.data.map((data) => (
                          <option key={data.vendor_id} value={data.vendor_id}>
                            {data.vendor_name}
                          </option>
                        ))}
                    </Select>

                    {formik.touched.vendor_id && formik.errors.vendor_id ? (
                      <div>{formik.errors.vendor_id}</div>
                    ) : null}
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Model</FormLabel>
                    <Select
                      id="model_id"
                      name="model_id"
                      type="text"
                      placeholder="Select model"
                      focusBorderColor="teal.600"
                      onChange={formik.handleChange}
                      value={formik.values.hardware_catalog_id || formik.values.software_catalog_id}
                      {...formik.getFieldProps("model_id")}
                    >
                      {models.data &&
                        models.data.map((data) => (
                          <option key={data.hardware_catalog_id || data.software_catalog_id} value={data.hardware_catalog_id || data.software_catalog_id}>
                            {" "}
                            {data.hardware_model_name || data.software_model_name}{" "}
                          </option>
                        ))}
                    </Select>

                    {formik.touched.vendor_id && formik.errors.vendor_id ? (
                      <div>{formik.errors.vendor_id}</div>
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
                  Next
                </Button>
              </Flex>
            </Card>
          </form>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default SelectCatalog;
