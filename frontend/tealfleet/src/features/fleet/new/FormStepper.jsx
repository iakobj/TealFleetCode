import * as React from "react";

import {
  Box,
  Heading,
  CardHeader,
  Card,
  Divider,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from "@chakra-ui/react";

function FormStepper(location) {
  const stepperAt = location.stepperAt;

  const steps = [
    { title: "Catalog", description: "Select catalog" },
    { title: "Information", description: "Asset information" },
    { title: "Components", description: "Asset components" },
    { title: "Contract", description: "Select contract" },
  ];

  return (
    <Card
      padding="0.2em"
      paddingTop={"0.3em"}
      paddingBottom={"0.8em"}
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
        <Divider paddingTop={"1em"} />
      </CardHeader>

      <Stepper
        index={stepperAt}
        orientation="vertical"
        colorScheme="teal"
        gap="0"
        height="14em"
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
  );
}

export default FormStepper;