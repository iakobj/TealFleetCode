import * as React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  Text,
  FormControl,
  Input,
  Box,
  HStack,
  Grid,
  GridItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

// import API endpoints
import { API_ENDPOINT } from "../../../constants/apiEndpoint";

import { useFormik } from "formik";
import * as Yup from "yup";

function HwComponentsForm(props) {
  let [nextStep, setNextStep] = useState(false);
  const Toast = useToast();
  let count = props.count + 1;

  const formik = useFormik({
    initialValues: {
      hardware_asset_id: props.hardware_asset_id,
      amount: "1",
      hw_part_make: "",
      hw_part_model: "",
      hw_part_number: "",
      hw_serial_no: "",
      hw_asset_tag: "",
    },

    validationSchema: Yup.object({
      hardware_asset_id: Yup.mixed(),
      amount: Yup.mixed(),
      hw_part_make: Yup.string(),
      hw_part_model: Yup.string(),
      hw_part_number: Yup.string(),
      hw_serial_no: Yup.string(),
      hw_asset_tag: Yup.string(),
    }),

    onSubmit: (values) => {
      const NewHardwareAsset = JSON.stringify(values, null, 2);
      if (
        values.hw_part_make ||
        values.hw_part_model ||
        values.hw_part_number ||
        values.hw_serial_no ||
        values.hw_asset_tag
      ) {
        try {
          fetch(`${API_ENDPOINT}/hardware/assets/add/components/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: NewHardwareAsset,
          }).then(async (response) => {
            if (response.status == 200) {
              let hw_sub_component_id = await response.json();
              console.log(hw_sub_component_id);
              Toast({
                title: "Asset added",
                description: `New component was successefuly added with ID: ${hw_sub_component_id.hw_sub_component_id}`,
                status: "success",
                position: "bottom",
                variant: "subtle",
              });

              if (values && hw_sub_component_id) {
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
      }
    },
  });

  useEffect(() => {
    if (props.onSubmit) {
      formik.handleSubmit();
    }
  }, [props.onSubmit]);

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
            focusBorderColor="teal.600"
            onChange={(value) => formik.setFieldValue("amount", value)}
            value={formik.values.amount}
          >
            <NumberInputField name="amount" />
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
            id="hw_part_make"
            name="hw_part_make"
            type="text"
            placeholder="Vendor"
            focusBorderColor="teal.600"
            onChange={formik.handleChange}
            value={formik.values.hw_part_make}
            {...formik.getFieldProps("hw_part_make")}
          />
          {formik.touched.hw_part_make && formik.errors.hw_part_make ? (
            <div>{formik.errors.hw_part_make}</div>
          ) : null}
        </FormControl>
      </GridItem>

      <GridItem colSpan={4}>
        <FormControl>
          <Input
            id="hw_part_model"
            name="hw_part_model"
            type="text"
            placeholder="Model"
            focusBorderColor="teal.600"
            onChange={formik.handleChange}
            value={formik.values.hw_part_model}
            {...formik.getFieldProps("hw_part_model")}
          />
          {formik.touched.hw_part_model && formik.errors.hw_part_model ? (
            <div>{formik.errors.hw_part_model}</div>
          ) : null}
        </FormControl>
      </GridItem>

      <GridItem colSpan={4}>
        <FormControl>
          <Input
            id="hw_part_number"
            name="hw_part_number"
            type="text"
            placeholder="Part Number"
            focusBorderColor="teal.600"
            onChange={formik.handleChange}
            value={formik.values.hw_part_number}
            {...formik.getFieldProps("hw_part_number")}
          />
          {formik.touched.hw_part_number && formik.errors.hw_part_number ? (
            <div>{formik.errors.hw_part_number}</div>
          ) : null}
        </FormControl>
      </GridItem>

      <GridItem colSpan={4}>
        <FormControl>
          <Input
            id="hw_serial_no"
            name="hw_serial_no"
            type="text"
            placeholder="Serial Number"
            focusBorderColor="teal.600"
            onChange={formik.handleChange}
            value={formik.values.hw_serial_no}
            {...formik.getFieldProps("hw_serial_no")}
          />
          {formik.touched.hw_serial_no && formik.errors.hw_serial_no ? (
            <div>{formik.errors.hw_serial_no}</div>
          ) : null}
        </FormControl>
      </GridItem>

      <GridItem colSpan={4}>
        <FormControl>
          <Input
            id="hw_asset_tag"
            name="hw_asset_tag"
            type="text"
            placeholder="Asset Tag"
            focusBorderColor="teal.600"
            onChange={formik.handleChange}
            value={formik.values.hw_asset_tag}
            {...formik.getFieldProps("hw_asset_tag")}
          />
          {formik.touched.hw_asset_tag && formik.errors.hw_asset_tag ? (
            <div>{formik.errors.hw_asset_tag}</div>
          ) : null}
        </FormControl>
      </GridItem>
    </Grid>
  );
}

export default HwComponentsForm;
