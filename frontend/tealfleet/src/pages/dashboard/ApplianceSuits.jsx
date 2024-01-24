// React components
import * as React from "react";
import { useLoaderData } from "react-router-dom";

// import location of the API server
import { API_ENDPOINT } from '../../constants/apiEndpoint';

// Chakra-UI components
import { Box, SimpleGrid } from "@chakra-ui/react";

import SwAssetsStatusCard from "../../features/dashboard/SwAssetsStatusCard";
import SwAssetsTotalCard from "../../features/dashboard/SwAssetsTotalCard";
import SwAssetsSupportCard from "../../features/dashboard/SwAssetsSupportCard";

function ApplianceSuits() {

  const loaderData = useLoaderData();

  const SwAssetsStatusCardData = loaderData.SwAssetsStatus.data;

  const SwAssetsTotalCardData = [
    {
      vendor: "Cisco",
      total: 32,
      percent: 32,
    },
    {
      vendor: "Dell",
      total: 3,
      percent: 3,
    },
    {
      vendor: "VMware",
      total: 28,
      percent: 28,
    },
    {
      vendor: "Palo Alto",
      total: 37,
      percent: 37,
    },
  ];

  const SwAssetsSupportCardData = [
    {
      vendor: "Cisco",
      supported: 20,
      unsupported: 12,
    },
    {
      vendor: "Dell",
      supported: 2,
      unsupported: 1,
    },
    {
      vendor: "VMware",
      supported: 25,
      unsupported: 3,
    },
    {
      vendor: "Palo Alto",
      supported: 37,
      unsupported: 0,
    },
  ];

  return (
    <Box marginTop={{ base: "1em", sm: "1em", md: "0em" }}>
      <SimpleGrid
        spacing="1em"
        columns={{ base: "1", sm: "2", md: "4", lg: "4", xl: "4", "2xl": "4" }}
      >
        {SwAssetsStatusCardData.map((SwAssetsStatusCardData) => (
          <SwAssetsStatusCard
          SwAssetsStatusCardData={SwAssetsStatusCardData}
            key={SwAssetsStatusCardData.title}
          />
        ))}
      </SimpleGrid>

      <SimpleGrid
        marginTop="1em"
        spacing="1em"
        columns={{ base: "1", sm: "1", md: "2", lg: "2" }}
      >
        <SwAssetsTotalCard SwAssetsTotalCardData={SwAssetsTotalCardData} />
        <SwAssetsSupportCard SwAssetsSupportCardData={SwAssetsSupportCardData} />
      </SimpleGrid>
    </Box>
  );
}

export default ApplianceSuits;


export const ApplianceSuitsDataLoader = async () => {
   
  const SwAssetsStatus = await fetch(`http://${API_ENDPOINT}/assets/dashboard/assets/status/sw`,
  {
    method: "GET",
    credentials: "include",
  });
  const SwAssetsTotal = await fetch(`http://${API_ENDPOINT}/tenants/`,
  {
    method: "GET",
    credentials: "include",
  });
  const SwAssetsSupport = await fetch(`http://${API_ENDPOINT}/tenants/`,
  {
    method: "GET",
    credentials: "include",
  });

  return {
    SwAssetsStatus: await SwAssetsStatus.json(),
    SwAssetsTotal: await SwAssetsTotal.json(),
    SwAssetsSupport: await SwAssetsSupport.json(),
  };
};