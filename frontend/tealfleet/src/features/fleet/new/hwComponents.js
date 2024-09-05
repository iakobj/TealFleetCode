import * as React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Textarea,
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

// import API endpoints
import { tenantsGetAll } from "../../../constants/api/tenants";
import { hardwareCatGetByHWModelName } from "../../../constants/api/hardware";
import { sitesGetAll } from "../../../constants/api/sites";

import { useFormik } from "formik";
import * as Yup from "yup";

function HwInformation(selectedModel) {
  const [tenants, setTenants] = useState([]);
  const [hwModels, setHwModels] = useState([]);
  const [sites, setSites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tenantsList = await tenantsGetAll();
      const HwModelList = await hardwareCatGetByHWModelName(selectedModel.selectedModel);
      const sitesList = await sitesGetAll();

      setHwModels(HwModelList);
      setTenants(tenantsList);
      setSites(sitesList);
    };

    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      hardware_catalog_id: "",
      hardware_asset_name: "",
      hardware_asset_ip: "",
      hardware_serial_no	: "",
      hardware_asset_tag: "",
      tenant_id: "",
      site_id: "",
      hardware_notes: "",
      hardware_asset_ip: "",
    },

    validationSchema: Yup.object({
      hardware_catalog_id: Yup.string().required("Required"),
      hardware_asset_name: Yup.string(),
      hardware_asset_ip: Yup.string(),
      hardware_serial_no: Yup.string(),
      hardware_asset_tag: Yup.string(),
      tenant_id: Yup.string().required("Required"),
      site_id: Yup.string(),
      hardware_notes: Yup.string(),
    }),

    onSubmit: (values) => {
      try {
        if (values) {
          console.log(values);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <>
      <GridItem colSpan={{ sm: "12", md: "12", lg: "3", xl: "2" }}>
          <FormStepper stepperAt={1} />
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

                  <FormControl>
                    <FormLabel>Amount</FormLabel>
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
                    <FormLabel>Vendor</FormLabel>
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
                    <FormLabel>Model</FormLabel>
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
                    <FormLabel>Part Number</FormLabel>
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
                    <FormLabel>Serial Number Number</FormLabel>
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
                    <FormLabel>Asset Tag</FormLabel>
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
    </>
  );
}

export default HwInformation;
