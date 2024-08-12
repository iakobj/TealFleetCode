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

function HwInformation() {
  const [vendors, setVendors] = useState([]);

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

  const modelDataLoader = async (vendor_id) => {
    try {
      const getVendors = await fetch(
        `http://${API_ENDPOINT}/vendors/id/${vendor_id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const vendors = await getVendors.json();
      setVendors(vendors);
    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };

  useEffect(() => {
    vendorDataLoader();
  }, []);

  useEffect((vendor_id) => {
    modelDataLoader(vendor_id);
  }, []);

  const formik = useFormik({
    initialValues: {
      vendor_id: "",
      model_id: "",
      version_id: "",
    },

    validationSchema: Yup.object({
      vendor_id: Yup.string(),
      model_id: Yup.string().required("Required"),
      version_id: Yup.string().required("Required"),
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
                    <FormLabel>Part Number</FormLabel>
                    <Select
                      id="hardware_catalog_id"
                      name="hardware_catalog_id"
                      type="text"
                      placeholder="Part Number"
                      focusBorderColor="teal.600"
                      onChange={formik.handleChange}
                      value={formik.values.hardware_catalog_id}
                      {...formik.getFieldProps("item_id")}
                    >
                      {items.data &&
                        items.data.map((data) => (
                          <option key={data.hardware_catalog_id} value={data.hardware_catalog_id}>
                            {" "}
                            {data.hardware_part_number}{" "}
                          </option>
                        ))}
                    </Select>

                    {formik.touched.hardware_catalog_id && formik.errors.hardware_catalog_id ? (
                      <div>{formik.errors.vendor_id}</div>
                    ) : null}
                  </FormControl>

                  <FormControl>
                    <FormLabel marginTop="1.2em">Asset Name</FormLabel>
                    <Input
                      id="hardware_asset_name"
                      name="hardware_asset_name"
                      type="text"
                      placeholder="Name or FQDN"
                      focusBorderColor="teal.600"
                      onChange={formik.handleChange}
                      value={formik.values.hardware_asset_name}
                      {...formik.getFieldProps("hardware_asset_name")}
                    />
                    {formik.touched.hardware_asset_name && formik.errors.hardware_asset_name ? (
                      <div>{formik.errors.hardware_asset_name}</div>
                    ) : null}
                  </FormControl>

                  <FormControl>
                    <FormLabel marginTop="1.2em">Management IP Address</FormLabel>
                    <Input
                      id="hardware_asset_ip"
                      name="hardware_asset_ip"
                      type="text"
                      placeholder="192.168.1.1"
                      focusBorderColor="teal.600"
                      onChange={formik.handleChange}
                      value={formik.values.Item_id}
                      {...formik.getFieldProps("hardware_asset_ip")}
                    />
                    {formik.touched.hardware_asset_ip && formik.errors.hardware_asset_ip ? (
                      <div>{formik.errors.hardware_asset_ip}</div>
                    ) : null}
                  </FormControl>

                  <FormControl>
                    <FormLabel marginTop="1.2em">Serial Number</FormLabel>
                    <Input
                      id="hardware_serial_no"
                      name="hardware_serial_no"
                      type="text"
                      placeholder="Serial Number or Vendor Tag"
                      focusBorderColor="teal.600"
                      onChange={formik.handleChange}
                      value={formik.values.hardware_serial_no}
                      {...formik.getFieldProps("Item_id")}
                    />
                    {formik.touched.hardware_serial_no && formik.errors.hardware_serial_no ? (
                      <div>{formik.errors.hardware_serial_no}</div>
                    ) : null}
                  </FormControl>

                  <FormControl>
                    <FormLabel marginTop="1.2em">Asset Tag</FormLabel>
                    <Input
                      id="hardware_tag"
                      name="hardware_tag"
                      type="text"
                      placeholder="Tenants Asset Tag"
                      focusBorderColor="teal.600"
                      onChange={formik.handleChange}
                      value={formik.values.hardware_tag}
                      {...formik.getFieldProps("hardware_tag")}
                    />
                    {formik.touched.hardware_tag && formik.errors.hardware_tag ? (
                      <div>{formik.errors.hardware_tag}</div>
                    ) : null}
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Location</FormLabel>
                    <Select
                      id="site_id"
                      name="site_id"
                      type="text"
                      placeholder="Select location"
                      focusBorderColor="teal.600"
                      onChange={formik.handleChange}
                      value={formik.values.site_id}
                      {...formik.getFieldProps("site_id")}
                    >
                      {sites.data &&
                        sites.data.map((data) => (
                          <option key={data.site_id} value={data.site_id}>
                            {" "}
                            {data.site_name} {data.site_city}{" "}
                            {data.site_address}{" "}
                          </option>
                        ))}
                    </Select>

                    {formik.touched.site_id && formik.errors.site_id ? (
                      <div>{formik.errors.site_id}</div>
                    ) : null}
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Tenant Name</FormLabel>
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

                  <FormControl>
                    <FormLabel marginTop="1.2em">
                      Notes
                    </FormLabel>
                    <Textarea
                      id="hardware_notes"
                      name="hardware_notes"
                      type="hardware_notes"
                      placeholder="Short asset description or notes"
                      focusBorderColor="teal.600"
                      onChange={formik.handleChange}
                      value={formik.values.hardware_notes}
                      {...formik.getFieldProps("hardware_notes")}
                    />
                    {formik.touched.hardware_notes &&
                    formik.errors.hardware_notes ? (
                      <div>{formik.errors.hardware_notes}</div>
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

export default HwInformation;
