import * as React from "react";

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
} from "@chakra-ui/react";

const fetchData = async () => {
  const data = await fetch(`http://localhost:3000/assets/fleet/card/all`);
  return { data: await data.json() };
};
const items = await fetchData();
const fleetCardItems = items.data;

import { Search2Icon } from "@chakra-ui/icons";

function FleetFilter() {
  return (
    <Box>
      <Hide breakpoint="(max-width: 750px)">
        <Flex marginBottom={"0.8em"}>
          <Box marginRight={"1em"}>
            <Select placeholder="Tenant" size="md">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box marginRight={"1em"}>
            <Select placeholder="SW model" size="md">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box marginRight={"1em"}>
            <Select placeholder="HW model" size="md">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box>
            <Select placeholder="Site name" size="md">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Spacer />
          <Button leftIcon={<Search2Icon />} size={"md"} colorScheme={"teal"}>
            Filter
          </Button>
        </Flex>
      </Hide>
      <SimpleGrid minChildWidth="18em" spacing="1em">
        {fleetCardItems &&
          fleetCardItems.map &&
          fleetCardItems.map((fleetCardItems) => (
            <FleetCard 
            key={fleetCardItems.gen_random_uuid} 
            fleetCardItems = {fleetCardItems}
            />
          ))}
      </SimpleGrid>
    </Box>
  );
}

export default FleetFilter;
