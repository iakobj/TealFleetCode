// React components
import * as React from "react";
import { useLoaderData } from "react-router-dom";

// import location of the API server
import { API_ENDPOINT } from "../constants/apiEndpoint";
import { dashboardGetStatusCardData,  dashboardGetTotalsCardData, dashboardGetSupportCardData } from "../constants/api/dashboard"

// Chakra-UI components
import { Box, SimpleGrid, Card } from "@chakra-ui/react";

import AssetsStatusCard from "../features/dashboard/AssetsStatusCard";
import AssetsTotalCard from "../features/dashboard/AssetsTotalCard";
import AssetsSupportCard from "../features/dashboard/AssetsSupportCard";

function Dashboard() {
  const loaderData = useLoaderData();

  const AssetsStatusCardData = loaderData.AssetsStatus.data;
  const AssetsTotalCardData = loaderData.AssetsTotal.data;
  const AssetsSupportCardData = loaderData.AssetsSupport.data;

  return (
    <Box marginTop={{ base: "1em", sm: "1em", md: "0em" }}>
      <Card
        variant="outline"
        padding="1.5em"
        borderRadius="0.6em 0.6em 0.6em 0.6em"
      >
        <SimpleGrid
          spacing="1.2em"
          columns={{
            base: "1",
            sm: "2",
            md: "4",
            lg: "4",
            xl: "4",
            "2xl": "4",
          }}
        >
          {AssetsStatusCardData &&
            AssetsStatusCardData.map((AssetsStatusCardData) => (
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

export const DashboardDataLoader = async ({ params }) => {

  let tenant;
  if (params.tenant) {
    tenant = params.tenant;
  }

  let AssetsStatus;
  let AssetsTotal;
  let AssetsSupport;

  if (!tenant) {
    AssetsStatus = await dashboardGetStatusCardData();
    AssetsTotal = await dashboardGetTotalsCardData();
    AssetsSupport = await dashboardGetSupportCardData();

  } else {
    AssetsStatus = await dashboardGetStatusCardData(tenant);
    AssetsTotal = await dashboardGetTotalsCardData(tenant);
    AssetsSupport = await dashboardGetSupportCardData(tenant);
  }

  return {
    AssetsStatus: await AssetsStatus,
    AssetsTotal: await AssetsTotal,
    AssetsSupport: await AssetsSupport,
  };
};
