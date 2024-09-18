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

import SwInformation from "./SwInformation";
import HwInformation from "./HwInformation";

// import location of the API server
import { vendorsGetAll } from "../../../constants/api/vendors";
import { softwareCatGetSWModelNameByVendor } from "../../../constants/api/software";
import { hardwareCatGetHWModelNameByVendor } from "../../../constants/api/hardware";

import { useFormik } from "formik";
import * as Yup from "yup";

function SelectCatalog() {
  // On Form fetch the data will be saved here
  const [vendors, setVendors] = useState([]);
  const [models, setModels] = useState([]);
  const [nextStep, setNextStep] = useState(false);

  // Selected items
  const [selectedVendor, setSelectedVendor] = useState([]);
  const [selectedModel, setSelectedModel] = useState([]);
  const [assetType, setAssetType] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedVendors = await vendorsGetAll();

      setVendors(fetchedVendors);
    };
    fetchData();
  }, []);

  const modelDataLoader = async (selectedVendor) => {
      const fetchedSwModels = await softwareCatGetSWModelNameByVendor(selectedVendor);
      const fetchedHwModels = await hardwareCatGetHWModelNameByVendor(selectedVendor);

      var joinedModels = {
        data: [...fetchedSwModels.data, ...fetchedHwModels.data],
      };

      setModels(joinedModels);

  };

  const formik = useFormik({
    initialValues: {
      vendor_id: "",
      model_name: "",
    },

    validationSchema: Yup.object({
      vendor_id: Yup.string().required("Required"),
      model_name: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      try {
        if (values) {
          console.log(values);

          var [model_name, assetType] = values.model_name.split(".");

          setSelectedVendor(values.vendor_id);
          setSelectedModel(model_name);
          setAssetType(assetType);
          setNextStep(true);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <Box>
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        {selectedVendor && selectedModel && assetType && nextStep ? (
          assetType === "SW" ? (
            <SwInformation selectedModel={selectedModel} />
          ) : (
            <HwInformation selectedModel={selectedModel} />
          )
        ) : (
          <>
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
                              setSelectedVendor(selectedVendor.vendor_name);
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
                              <option
                                key={data.vendor_id}
                                value={data.vendor_id}
                              >
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
                          id="model_name"
                          name="model_name"
                          type="text"
                          placeholder="Select model"
                          focusBorderColor="teal.600"
                          onChange={formik.handleChange}
                          value={
                            formik.values.hardware_model_name ||
                            formik.values.software_model_name
                          }
                          {...formik.getFieldProps("model_name")}
                        >
                          {models.data &&
                            models.data.map((data) => (
                              <option
                                key={
                                  data.hardware_model_name ||
                                  data.software_model_name
                                }
                                value={`${
                                  data.hardware_model_name ||
                                  data.software_model_name
                                }.${data.asset_type || "unknown"}`}
                              >
                                {" "}
                                {data.hardware_model_name ||
                                  data.software_model_name}{" "}
                              </option>
                            ))}
                        </Select>

                        {formik.touched.model_name &&
                        formik.errors.model_name ? (
                          <div>{formik.errors.model_name}</div>
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
                    <NavLink to="/assets/fleet">
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
          </>
        )}
      </Grid>
    </Box>
  );
}

export default SelectCatalog;
