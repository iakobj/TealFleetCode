import * as React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Box,
  Flex,
  Spacer,
  Card,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { AddIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import FormStepper from "./FormStepper";
import HwComponentsForm from "./HwComponentsForm";

import { useToast } from "@chakra-ui/react";

// import API endpoints
import { API_ENDPOINT } from "../../../constants/apiEndpoint";

function HwComponents({ hardware_asset_id }) {
  const Toast = useToast();
  const [nextStep, setNextStep] = useState(false);
  const [forms, setForms] = useState(
    Array.from({ length: 5 }, () => ({
      hardware_asset_id: hardware_asset_id,
      amount: "1",
      hw_part_make: "",
      hw_part_model: "",
      hw_part_number: "",
      hw_serial_no: "",
      hw_asset_tag: "",
    }))
  );

  const handleAddForm = () => {
    setForms([
      ...forms,
      {
        hardware_asset_id: hardware_asset_id,
        amount: "1",
        hw_part_make: "",
        hw_part_model: "",
        hw_part_number: "",
        hw_serial_no: "",
        hw_asset_tag: "",
      },
    ]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newForms = forms.map((form, i) => {
      if (i === index) {
        return { ...form, [name]: value };
      }
      return form;
    });
    setForms(newForms);
  };

  const handleSubmit = () => {
    // Here we handle the submission of all forms.
    const submitData = forms.filter((form) => {
      return (
        form.hw_part_make ||
        form.hw_part_model ||
        form.hw_part_number ||
        form.hw_serial_no ||
        form.hw_asset_tag
      );
    });

    if (submitData.length === 0) {
      console.error("No valid data to submit");
      return;
    }

    console.log("Submitting forms:", submitData);
    try {
      fetch(`${API_ENDPOINT}/hardware/assets/add/components/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(submitData, null, 2),
      }).then(async (response) => {
        if (response.status == 200) {
          let hardware_asset_id = await response.json();
          console.log(hardware_asset_id[0].hardware_asset_id);
          Toast({
            title: "Asset added",
            description: `Asset with ID: ${hardware_asset_id[0].hardware_asset_id} was successefuly updated with new component(s)`,
            status: "success",
            position: "bottom",
            variant: "subtle",
          });

          if (hardware_asset_id) {
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
  };

  return (
    <>
      <GridItem colSpan={{ sm: "12", md: "12", lg: "3", xl: "2" }}>
        <FormStepper stepperAt={2} />
      </GridItem>

      <GridItem colSpan={{ sm: "12", md: "12", lg: "9", xl: "10" }}>
        <Box marginTop={{ base: "1em", sm: "1em", md: "0em" }}>
          <Card
            padding="1em"
            minHeight={"17em"}
            variant="outline"
            bg="#fdfdfd"
            borderRadius={"0.6em 0.6em 0.6em 0.6em"}
          >
            <Grid templateColumns="repeat(24, 1fr)" gap={6} marginBottom="1em">
              <GridItem colSpan={1} colStart={1}>
                <Heading as="h5" size="sm" color="gray.700">
                  No.
                </Heading>
              </GridItem>
              <GridItem colSpan={3} colStart={2}>
                <Heading as="h5" size="sm" color="gray.700">
                  Amount
                </Heading>
              </GridItem>
              <GridItem colSpan={4}>
                <Heading as="h5" size="sm" color="gray.700">
                  Vendor
                </Heading>
              </GridItem>
              <GridItem colSpan={4}>
                <Heading as="h5" size="sm" color="gray.700">
                  Model
                </Heading>
              </GridItem>
              <GridItem colSpan={4}>
                <Heading as="h5" size="sm" color="gray.700">
                  Part Number
                </Heading>
              </GridItem>
              <GridItem colSpan={4}>
                <Heading as="h5" size="sm" color="gray.700">
                  Serial Number
                </Heading>
              </GridItem>
              <GridItem colSpan={4}>
                <Heading as="h5" size="sm" color="gray.700">
                  Asset Tag
                </Heading>
              </GridItem>
            </Grid>

            {forms.map((form, index) => (
              <HwComponentsForm
                key={index}
                index={index}
                formData={form}
                onInputChange={(event) => handleInputChange(index, event)}
              />
            ))}

            <Grid
              templateColumns="repeat(24, 1fr)"
              gap={6}
              marginBottom="1em"
              marginTop={"1em"}
            >
              <GridItem colStart={24}>
                <Button
                  variant={"outline"}
                  rightIcon={<AddIcon />}
                  size="sm"
                  colorScheme="teal"
                  onClick={handleAddForm}
                >
                  New row
                </Button>
              </GridItem>
            </Grid>
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
              type="button"
              onClick={handleSubmit}
              rightIcon={<ArrowForwardIcon />}
              size="sm"
              colorScheme="teal"
              width={"7em"}
            >
              Submit
            </Button>
          </Flex>
        </Card>
      </GridItem>
    </>
  );
}

export default HwComponents;
