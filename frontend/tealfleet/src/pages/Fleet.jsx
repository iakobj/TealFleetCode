// React components
import * as React from "react";

// Components
import FleetCard from "../features/fleet/FleetCard.jsx";
import FleetFilter from "../features/fleet/FleetFilter.jsx";

// Chakra-UI components
import { Text, Flex, Box, SimpleGrid } from "@chakra-ui/react";

function Fleet() {
  return (
    <div>
      <FleetFilter />
    </div>
  );
}

export default Fleet;
