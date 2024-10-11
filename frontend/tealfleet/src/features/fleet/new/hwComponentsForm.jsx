import * as React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  Text,
  FormControl,
  FormLabel,
  Select,
  Input,
  Textarea,
  Button,
  Box,
  Flex,
  HStack,
  Spacer,
  Card,
  SimpleGrid,
  Grid,
  GridItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import FormStepper from "./FormStepper";

import { CloseIcon, ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

// import API endpoints
import { tenantsGetAll } from "../../../constants/api/tenants";
import { hardwareCatGetByHWModelName } from "../../../constants/api/hardware";
import { sitesGetAll } from "../../../constants/api/sites";

import { useFormik } from "formik";
import * as Yup from "yup";
import NewAsset from "./NewAsset";

function HwComponentsForm(props) {
  let count = props.count + 1;

  console.log(props.count);
  console.log(props.hardware_asset_id)

  const formik = useFormik({
    initialValues: {
      hardware_catalog_id: "",
      hardware_asset_name: "",
      hardware_asset_ip: "",
      hardware_serial_no: "",
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
        fetch(`${API_ENDPOINT}/hardware/assets/add/components/${props.hardware_asset_id}`, {
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
              description: `New component was successefuly added with ID: ${hardware_asset_id.hardware_asset_id}`,
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
    <Grid templateColumns="repeat(24, 1fr)" gap={6} marginBottom="1em">
      <GridItem colSpan={1} colStart={1} marginTop={"0.0em"}>
          <Text fontSize="lg" marginTop={"0.35em"} textColor={"gray.700"}>
            <HStack>
              <Box>{count}.</Box>
            </HStack>
          </Text>
      </GridItem>
      <GridItem colSpan={3} colStart={2}>
        <FormControl>
          <NumberInput
            defaultValue={1}
            max={999}
            min={1}
            keepWithinRange={true}
            id="amount"
            name="amount"
            focusBorderColor="teal.600"
            onChange={formik.handleChange}
            value={formik.values.amount}
            {...formik.getFieldProps("amount")}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          {formik.touched.amount && formik.errors.amount ? (
            <div>{formik.errors.amount}</div>
          ) : null}
        </FormControl>
      </GridItem>

      <GridItem colSpan={4}>
        <FormControl>
          <Input
            id="vendor"
            name="vendor"
            type="text"
            placeholder="Vendor"
            focusBorderColor="teal.600"
            onChange={formik.handleChange}
            value={formik.values.vendor}
            {...formik.getFieldProps("vendor")}
          />
          {formik.touched.vendor && formik.errors.vendor ? (
            <div>{formik.errors.vendor}</div>
          ) : null}
        </FormControl>
      </GridItem>

      <GridItem colSpan={4}>
        <FormControl>
          <Input
            id="model"
            name="model"
            type="text"
            placeholder="model"
            focusBorderColor="teal.600"
            onChange={formik.handleChange}
            value={formik.values.model}
            {...formik.getFieldProps("model")}
          />
          {formik.touched.model && formik.errors.model ? (
            <div>{formik.errors.model}</div>
          ) : null}
        </FormControl>
      </GridItem>

      <GridItem colSpan={4}>
        <FormControl>
          <Input
            id="partnumber"
            name="partnumber"
            type="text"
            placeholder="Part Number"
            focusBorderColor="teal.600"
            onChange={formik.handleChange}
            value={formik.values.partnumber}
            {...formik.getFieldProps("partnumber")}
          />
          {formik.touched.partnumber && formik.errors.partnumber ? (
            <div>{formik.errors.partnumber}</div>
          ) : null}
        </FormControl>
      </GridItem>

      <GridItem colSpan={4}>
        <FormControl>
          <Input
            id="serialnumber"
            name="serialnumber"
            type="text"
            placeholder="Serial Number"
            focusBorderColor="teal.600"
            onChange={formik.handleChange}
            value={formik.values.serialnumber}
            {...formik.getFieldProps("serialnumber")}
          />
          {formik.touched.serialnumber && formik.errors.serialnumber ? (
            <div>{formik.errors.serialnumber}</div>
          ) : null}
        </FormControl>
      </GridItem>

      <GridItem colSpan={4}>
        <FormControl>
          <Input
            id="assettag"
            name="assettag"
            type="text"
            placeholder="Asset Tag"
            focusBorderColor="teal.600"
            onChange={formik.handleChange}
            value={formik.values.assettag}
            {...formik.getFieldProps("assettag")}
          />
          {formik.touched.assettag && formik.errors.assettag ? (
            <div>{formik.errors.assettag}</div>
          ) : null}
        </FormControl>
      </GridItem>
    </Grid>
  );
}

export default HwComponentsForm;
