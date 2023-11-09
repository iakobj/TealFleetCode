import * as React from "react";
import { useState } from "react";

import FleetCard from "./FleetCard.jsx";

// Chakra-UI components
import {
  Flex,
  Box,
  Button,
  SimpleGrid,
  Spacer,
  Select,
  Hide,
  IconButton,
} from "@chakra-ui/react";

import { Search2Icon, RepeatIcon } from "@chakra-ui/icons";

// Fetch Tenant info for filter
const fetchTenantData = async () => {
  const data = await fetch(`http://localhost:3000/tenants/`);
  return { data: await data.json() };
};
const tItems = await fetchTenantData();

// Fetch SW Model info for filter
const fetchSWModelData = async () => {
  const data = await fetch(`http://localhost:3000/software/catalog/`);
  return { data: await data.json() };
};
const swItems = await fetchSWModelData();

// Fetch HW Model info for filter
const fetchHWModelData = async () => {
  const data = await fetch(`http://localhost:3000/hardware/catalog/`);
  return { data: await data.json() };
};
const hwItems = await fetchHWModelData();

// Fetch Site name info for filter
const fetchSiteNameData = async () => {
  const data = await fetch(`http://localhost:3000/sites/`);
  return { data: await data.json() };
};
const siteItems = await fetchSiteNameData();

// Fetch Fleet card information
const fetchFleetData = async () => {
  const data = await fetch(`http://localhost:3000/assets/fleet/card/all/`);
  return { data: await data.json() };
};

const fItems = await fetchFleetData();

// FleetFilter Component
function FleetFilter() {
  const [formData, setFormData] = useState();

  const [fleetCardItems, setfleetCardItems] = useState(fItems.data);

  const tenantItems = tItems.data;
  const swModelItems = swItems.data;
  const hwModelItems = hwItems.data;
  const siteNameItems = siteItems.data;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.tenant);
    console.log(fItems.data);
    const originalArray = fItems.data;

    const filteredArray = originalArray.filter((item) => {
      if (item.hw_tenant_name === '' && item.sw_tenant_name === '') {
        return originalArray;
      }else {
      return item.hw_tenant_name === formData.tenant || item.sw_tenant_name === formData.tenant;
    }
    });

    console.log(filteredArray);
    setfleetCardItems(filteredArray);
  };

  return (
    <Box>
      <Hide breakpoint="(max-width: 750px)">
        <form onSubmit={handleSubmit}>
          <Flex marginBottom={"0.8em"}>
            <Box marginRight={"1em"}>
              <Select
                placeholder="Tenant"
                id="tenant"
                name="tenant"
                size="sm"
                w="8em"
                onChange={handleChange}
              >
                {tenantItems &&
                  tenantItems.map &&
                  tenantItems.map((tenantItems) => (
                    <option
                      key={tenantItems.tenant_id}
                      value={tenantItems.tenant_name}
                    >
                      {tenantItems.tenant_name}
                    </option>
                  ))}
              </Select>
            </Box>
            <Box marginRight={"1em"}>
              <Select placeholder="SW model" size="sm" w="8em">
                {swModelItems &&
                  swModelItems.map &&
                  swModelItems.map((swModelItems) => (
                    <option key={swModelItems.software_catalog_id}>
                      {swModelItems.software_model_name}
                    </option>
                  ))}
              </Select>
            </Box>
            <Box marginRight={"1em"}>
              <Select placeholder="HW model" size="sm" w="8em">
                {hwModelItems &&
                  hwModelItems.map &&
                  hwModelItems.map((hwModelItems) => (
                    <option key={hwModelItems.hardware_catalog_id}>
                      {hwModelItems.hardware_model_name}
                    </option>
                  ))}
              </Select>
            </Box>
            <Box>
              <Select placeholder="Site name" size="sm" w="8em">
                {siteNameItems &&
                  siteNameItems.map &&
                  siteNameItems.map((siteNameItems) => (
                    <option key={siteNameItems.site_id}>
                      {siteNameItems.site_name}
                    </option>
                  ))}
              </Select>
            </Box>
            <Spacer />
            <Button
              type="submit"
              leftIcon={<Search2Icon />}
              size={"sm"}
              colorScheme={"teal"}
            >
              Filter
            </Button>
            <IconButton
              aria-label="Reset filter"
              icon={<RepeatIcon />}
              size={"sm"}
              colorScheme={"teal"}
              marginLeft={"1em"}
            />
          </Flex>
        </form>
      </Hide>
      <SimpleGrid minChildWidth="18em" spacing="1em">
        {fleetCardItems &&
          fleetCardItems.map &&
          fleetCardItems.map((fleetCardItems) => (
            <FleetCard
              fleetCardItems={fleetCardItems}
              key={
                fleetCardItems.hardware_asset_id
                  ? fleetCardItems.hardware_asset_id
                  : fleetCardItems.software_asset_id
              }
            />
          ))}
      </SimpleGrid>
    </Box>
  );
}

export default FleetFilter;
