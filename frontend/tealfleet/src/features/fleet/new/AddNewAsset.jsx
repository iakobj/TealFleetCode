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


import { useFormik } from "formik";
import * as Yup from "yup";

function AddNewAsset() {
  const [stepperAt, setStepperAt] = useState(0);

  const toast = useToast();

  const steps = [
    { title: "Catalog", description: "Select catalog" },
    { title: "Information", description: "Asset information" },
    { title: "Components", description: "Asset components" },
    { title: "Contract", description: "Select contract" },
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
                CREATE NEW ASSET
              </Heading>
              <Divider paddingTop={"1em"}/>
            </CardHeader>

            <Stepper
              index={stepperAt}
              orientation="vertical"
              colorScheme="teal"
              gap="0"
              height="15em"
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

          
        </GridItem>
        
      </Grid>
    </Box>
  );
}

export default AddNewAsset;
