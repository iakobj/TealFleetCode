// React components
import * as React from "react";
import { useLoaderData } from "react-router-dom";

// import location of the API server
import { API_ENDPOINT } from "../constants/apiEndpoint";

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
    AssetsStatus = await fetch(
      `${API_ENDPOINT}/dashboard/assets/status/`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    AssetsTotal = await fetch(
      `${API_ENDPOINT}/dashboard/assets/totals/`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    AssetsSupport = await fetch(
      `${API_ENDPOINT}/dashboard/assets/support/`,
      {
        method: "GET",
        credentials: "include",
      }
    );
  } else {
    AssetsStatus = await fetch(
      `${API_ENDPOINT}/dashboard/assets/status/${tenant}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    AssetsTotal = await fetch(
      `${API_ENDPOINT}/dashboard/assets/totals/${tenant}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    AssetsSupport = await fetch(
      `${API_ENDPOINT}/dashboard/assets/support/${tenant}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
  }

  return {
    AssetsStatus: await AssetsStatus.json(),
    AssetsTotal: await AssetsTotal.json(),
    AssetsSupport: await AssetsSupport.json(),
  };
};
