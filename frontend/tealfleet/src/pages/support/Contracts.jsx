// React components
import * as React from "react";
import { useLoaderData } from "react-router-dom";

// import location of the API server
import { API_ENDPOINT } from "../../constants/apiEndpoint";

// Chakra-UI components
import { Box } from "@chakra-ui/react";

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




  const tItems = await fetch(`http://${API_ENDPOINT}/tenants/`, {
    method: "GET",
    credentials: "include",
  });





  // Fetch Contracts info for contracts table
  const contractsItems = await fetch(`http://${API_ENDPOINT}/contracts/`, {
    method: "GET",
    credentials: "include",
  });

  return {
    contractsItems: await contractsItems.json(),
  };
};
