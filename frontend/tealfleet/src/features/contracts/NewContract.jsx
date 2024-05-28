import * as React from "react";

import { API_ENDPOINT } from "../../constants/apiEndpoint";

// Chakra-UI components
import {
  Box,
  SimpleGrid,
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
  Card,
} from "@chakra-ui/react";

import AssetFilter from "./AssetFilter";
import AddNewContract from "./AddNewContract";

function NewContract() {
  const steps = [
    { title: "Create contract", description: "Contract Information" },
    { title: "Add assets", description: "Search & Select assets" },
  ];

  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <div>
      <Card marginBottom={"1.0em"} marginTop={"0.2em"} padding={"0.5em"}>
      
        <Stepper index={activeStep} colorScheme="teal">
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

      <SimpleGrid columns={2} spacing={"1.5em"}>
        <AddNewContract/>
        <AssetFilter />
      </SimpleGrid>
    </div>
  );
}

export default NewContract;

export const FleetDataLoader = async ({ params, request }) => {
  let fItems;

  const url = new URL(request.url);
  const searchVendor = url.searchParams.get("vendor");
  const searchTenant = url.searchParams.get("tenant");
  const searchSwmodel = url.searchParams.get("swmodel");
  const searchHwmodel = url.searchParams.get("hwmodel");
  const searchSitename = url.searchParams.get("sitename");
  const searchOffset = url.searchParams.get("offset");

  // Construct the URL with search parameters
  const queryParams = new URLSearchParams({
    vendor: searchVendor,
    tenant: searchTenant,
    swmodel: searchSwmodel,
    hwmodel: searchHwmodel,
    sitename: searchSitename,
    offset: searchOffset,
  });

  const vItems = await fetch(`http://${API_ENDPOINT}/vendors/`, {
    method: "GET",
    credentials: "include",
  });

  const tItems = await fetch(`http://${API_ENDPOINT}/tenants/`, {
    method: "GET",
    credentials: "include",
  });

  const swItems = await fetch(
    `http://${API_ENDPOINT}/software/catalogs/models/names`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const hwItems = await fetch(
    `http://${API_ENDPOINT}/hardware/catalogs/models/names`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const siteItems = await fetch(`http://${API_ENDPOINT}/sites/`, {
    method: "GET",
    credentials: "include",
  });

  fItems = await fetch(`http://${API_ENDPOINT}/assets/fleet/all/`, {
    method: "GET",
    credentials: "include",
  });

  const apiUrl = `http://${API_ENDPOINT}/assets/fleet/all/filter/?${queryParams.toString()}`;

  if (
    searchTenant ||
    searchSwmodel ||
    searchHwmodel ||
    searchSitename ||
    searchVendor ||
    searchOffset
  ) {
    fItems = await fetch(apiUrl, {
      method: "GET",
      credentials: "include",
    });
  }

  return {
    vItems: await vItems.json(),
    tItems: await tItems.json(),
    swItems: await swItems.json(),
    hwItems: await hwItems.json(),
    siteItems: await siteItems.json(),
    fItems: await fItems.json(),
  };
};
