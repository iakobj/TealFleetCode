// React components
import * as React from "react";

// import location of the API server
import { API_ENDPOINT } from "../../constants/apiEndpoint";

// Chakra-UI components
import { Box } from "@chakra-ui/react";

import ContractsFilter from "../../features/contracts/contractsFilter";

function Contracts() {
  return (
    <Box>
      <ContractsFilter/>
    </Box>
  );
}

export default Contracts;

export const ContractsDataLoader = async ({ params, request }) => {
  let cItems;

  const url = new URL(request.url);
  const searchTenant = url.searchParams.get("tenant");
  const searchValidity = url.searchParams.get("validity");
  const searchContractor = url.searchParams.get("contractor");
  const searchOffset = url.searchParams.get("offset");

  // Construct the URL with search parameters
  const queryParams = new URLSearchParams({
    tenant: searchTenant,
    validity: searchValidity,
    contractor: searchContractor,
    offset: searchOffset,
  });

  const tItems = await fetch(`http://${API_ENDPOINT}/tenants/`, {
    method: "GET",
    credentials: "include",
  });

  // TODO Change into unique search for contractors
  const contractorsItems = await fetch(`http://${API_ENDPOINT}/contracts/`, {
    method: "GET",
    credentials: "include",
  });

  cItems = await fetch(`http://${API_ENDPOINT}/contracts/`, {
    method: "GET",
    credentials: "include",
  });

  const apiUrl = `http://${API_ENDPOINT}/contracts/all/filter/?${queryParams.toString()}`;

  if (searchTenant || searchValidity || searchContractor || searchOffset) {
    cItems = await fetch(apiUrl, {
      method: "GET",
      credentials: "include",
    });
  }


  return {
    tItems: await tItems.json(),
    contractorsItems: await contractorsItems.json(),
    cItems: await cItems.json(),
  };
};
