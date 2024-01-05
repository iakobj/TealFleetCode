// React components
import * as React from "react";

// import location of the API server
import { API_ENDPOINT } from '../../constants/apiEndpoint';

// Chakra-UI components
import { Text, Box, SimpleGrid } from "@chakra-ui/react";

import ContractsListCard from "../../features/contracts/ContractsListCard";

function Contracts() {
  return (
    <Box>
      <SimpleGrid
        marginTop={{ base: "1em", sm: "1em", md: "0em" }}
        spacing="1em"
        columns={{ base: "1", sm: "1", md: "1", lg: "1" }}
      >
        <ContractsListCard />
      </SimpleGrid>
    </Box>
  );
}

export default Contracts;

export const ContractsDataLoader = async () => {
  // Fetch Contracts info for contracts table
  const cItems = await fetch(`http://${API_ENDPOINT}/contracts/`);

  return {
    cItems: await cItems.json(),
  };
};
