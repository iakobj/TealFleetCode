// React components
import * as React from "react";
import { useLoaderData } from "react-router-dom";

// import location of the API server
import { API_ENDPOINT } from '../constants/apiEndpoint';

// Chakra-UI components
import { Box, SimpleGrid, Card } from "@chakra-ui/react";

import AssetsStatusCard from "../features/dashboard/AssetsStatusCard";
import AssetsTotalCard from "../features/dashboard/AssetsTotalCard";
import AssetsSupportCard from "../features/dashboard/AssetsSupportCard";

function Dashboard() {

  const loaderData = useLoaderData();

  const AssetsStatusCardData = loaderData.AssetsStatus.data;

  const AssetsTotalCardData = [
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

  const AssetsSupportCardData = [
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
      <Card padding="1.5em">
      <SimpleGrid
        spacing="1.2em"
        columns={{ base: "1", sm: "2", md: "4", lg: "4", xl: "4", "2xl": "4" }}
      >
        
        {AssetsStatusCardData.map((AssetsStatusCardData) => (
          <AssetsStatusCard
          AssetsStatusCardData={AssetsStatusCardData}
            key={AssetsStatusCardData.title}
          />
        ))}
        
      </SimpleGrid>
      </Card>
      <SimpleGrid
        marginTop="1.5em"
        spacing="1.2em"
        columns={{ base: "1", sm: "1", md: "2", lg: "2" }}
      >
        <AssetsTotalCard AssetsTotalCardData={AssetsTotalCardData} />
        <AssetsSupportCard AssetsSupportCardData={AssetsSupportCardData} />
      </SimpleGrid>
    </Box>
  );
}

export default Dashboard;


export const DashboardDataLoader = async () => {
   
  const AssetsStatus = await fetch(`http://${API_ENDPOINT}/assets/dashboard/assets/status/sw`,
  {
    method: "GET",
    credentials: "include",
  });
  const AssetsTotal = await fetch(`http://${API_ENDPOINT}/tenants/`,
  {
    method: "GET",
    credentials: "include",
  });
  const AssetsSupport = await fetch(`http://${API_ENDPOINT}/tenants/`,
  {
    method: "GET",
    credentials: "include",
  });

  return {
    AssetsStatus: await AssetsStatus.json(),
    AssetsTotal: await AssetsTotal.json(),
    AssetsSupport: await AssetsSupport.json(),
  };
};