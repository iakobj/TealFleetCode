import * as React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  Button,
  Box,
  Flex,
  Spacer,
  Card,
  SimpleGrid,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";

import FormStepper from "./FormStepper";

import { CloseIcon, ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

import HwComponentsForm from "./hwComponentsForm";

function HwComponents(selectedModel) {
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

            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />
            <HwComponentsForm />

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
      </GridItem>
    </>
  );
}

export default HwComponents;
