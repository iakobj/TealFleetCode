// React components
import * as React from "react";
import { useLoaderData } from "react-router-dom";

// import location of the API server
import { API_ENDPOINT } from "../../constants/apiEndpoint";

// Chakra-UI components
import { Text, Box, SimpleGrid, Grid, GridItem } from "@chakra-ui/react";

import ContractsListCard from "../../features/contracts/ContractsListCard";
import ContractsFilter from "../../features/contracts/contractsFilter";

function Contracts() {
  const loaderData = useLoaderData();
  const contractsData = loaderData.contractsItems.data;

  return (
    <Box>
      <ContractsFilter contractsData={contractsData} />
    </Box>
  );
}

export default Contracts;

export const ContractsDataLoader = async () => {
  // Fetch Contracts info for contracts table
  const contractsItems = await fetch(`http://${API_ENDPOINT}/contracts/`, {
    method: "GET",
    credentials: "include",
  });

  return {
    contractsItems: await contractsItems.json(),
  };
};
