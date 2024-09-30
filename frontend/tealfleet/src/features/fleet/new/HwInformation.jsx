import * as React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import { API_ENDPOINT } from "../../../constants/apiEndpoint";

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

import { useToast } from "@chakra-ui/react";

import FormStepper from "./FormStepper";

import { CloseIcon, ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import HwComponents from "./hwComponents";

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
  const [nextStep, setNextStep] = useState(false);
  const [newAssetId, setNewAssetId] = useState("");
  const Toast = useToast();

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
      const NewHardwareAsset = JSON.stringify(values, null, 2);
      try {
        fetch(`${API_ENDPOINT}/hardware/assets/add`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: NewHardwareAsset,
        }).then(async (response) => {
          if (response.status == 200) {
            let hardware_asset_id = await response.json();
            console.log(hardware_asset_id);
            setNewAssetId(hardware_asset_id.hardware_asset_id);
            Toast({
              title: "Asset added",
              description: `New asset was successefuly added with ID: ${hardware_asset_id.hardware_asset_id}`,
              status: "success",
              position: "bottom",
              variant: "subtle",
            });

            if (values && hardware_asset_id) {
              setNextStep(true);
            }
          } else {
            Toast({
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

  return (
    <>
    {nextStep ? (
      <HwComponents/>
    ) : (
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

                <FormControl isRequired>
                    <FormLabel>Part Number</FormLabel>
                    <Select
                      id="hardware_catalog_id"
                      name="hardware_catalog_id"
                      type="text"
                      placeholder="Select part number"
                      focusBorderColor="teal.600"
                      onChange={formik.handleChange}
                      value={formik.values.tenant_id}
                      {...formik.getFieldProps("hardware_catalog_id")}
                    >
                      {hwModels.data &&
                        hwModels.data.map((data) => (
                          <option key={data.hardware_catalog_id} value={data.hardware_catalog_id}>
                            {data.hardware_part_number}
                          </option>
                        ))}
                    </Select>

                    {formik.touched.hardware_catalog_id && formik.errors.hardware_catalog_id ? (
                      <div>{formik.errors.hardware_catalog_id}</div>
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
                    <FormLabel>Asset Name</FormLabel>
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
                    <FormLabel>Management IP Address</FormLabel>
                    <Input
                      id="hardware_asset_ip"
                      name="hardware_asset_ip"
                      type="text"
                      placeholder="192.168.1.1"
                      focusBorderColor="teal.600"
                      onChange={formik.handleChange}
                      value={formik.values.hardware_asset_ip}
                      {...formik.getFieldProps("hardware_asset_ip")}
                    />
                    {formik.touched.hardware_asset_ip && formik.errors.hardware_asset_ip ? (
                      <div>{formik.errors.hardware_asset_ip}</div>
                    ) : null}
                  </FormControl>

                  <FormControl>
                    <FormLabel>Serial Number</FormLabel>
                    <Input
                      id="hardware_serial_no"
                      name="hardware_serial_no"
                      type="text"
                      placeholder="Serial Number or Vendor Tag"
                      focusBorderColor="teal.600"
                      onChange={formik.handleChange}
                      value={formik.values.hardware_serial_no}
                      {...formik.getFieldProps("hardware_serial_no")}
                    />
                    {formik.touched.hardware_serial_no && formik.errors.hardware_serial_no ? (
                      <div>{formik.errors.hardware_serial_no}</div>
                    ) : null}
                  </FormControl>

                  <FormControl>
                    <FormLabel>Asset Tag</FormLabel>
                    <Input
                      id="hardware_asset_tag"
                      name="hardware_asset_tag"
                      type="text"
                      placeholder="Tenants Asset Tag"
                      focusBorderColor="teal.600"
                      onChange={formik.handleChange}
                      value={formik.values.hardware_asset_tag}
                      {...formik.getFieldProps("hardware_asset_tag")}
                    />
                    {formik.touched.hardware_asset_tag && formik.errors.hardware_asset_tag ? (
                      <div>{formik.errors.hardware_asset_tag}</div>
                    ) : null}
                  </FormControl>

                  <FormControl>
                    <FormLabel>Asset Location</FormLabel>
                    <Select
                      id="site_id"
                      name="site_id"
                      type="text"
                      placeholder="Select asset location"
                      focusBorderColor="teal.600"
                      onChange={formik.handleChange}
                      value={formik.values.site_id}
                      {...formik.getFieldProps("site_id")}
                    >
                      {sites.data &&
                        sites.data.map((data) => (
                          <option key={data.site_id} value={data.site_id}>
                            {data.site_name} {"  "} {data.site_city} {" "} {data.site_address}
                          </option>
                        ))}
                    </Select>

                    {formik.touched.site_id && formik.errors.site_id ? (
                      <div>{formik.errors.site_id}</div>
                    ) : null}
                  </FormControl>

                  <FormControl>
                    <FormLabel>
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
                  Submit
                </Button>
              </Flex>
            </Card>
          </form>
        </GridItem>
        </>
        )}
    </>
  );
}

export default HwInformation;
