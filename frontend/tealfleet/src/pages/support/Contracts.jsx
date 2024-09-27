// React components
import * as React from "react";

// import location of the API server
import { tenantsGetAll } from "../../constants/api/tenants";
import { contractsGetAll } from "../../constants/api/contracts";
import { supportGetContracts } from "../../constants/api/contracts";

// Chakra-UI components
import { Box } from "@chakra-ui/react";

import ContractsFilter from "../../features/contracts/ContractsFilter";

function Contracts() {
  return (
    <Box height={"10vh"}>
      <ContractsFilter />
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

  const tItems = await tenantsGetAll();
  const contractorsItems = await contractsGetAll(); // TODO Change into unique search for contractors
  cItems = await contractsGetAll();

  if (searchTenant || searchValidity || searchContractor || searchOffset) {
    cItems = await supportGetContracts(queryParams);
  }

  return {
    tItems: await tItems,
    contractorsItems: await contractorsItems,
    cItems: await cItems,
  };
};