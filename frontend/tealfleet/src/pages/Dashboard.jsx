// React components
import * as React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

// import location of the API server
import { API_ENDPOINT } from "../constants/apiEndpoint";

// Chakra-UI components
import { Box, SimpleGrid, Card } from "@chakra-ui/react";

import AssetsStatusCard from "../features/dashboard/AssetsStatusCard";
import AssetsTotalCard from "../features/dashboard/AssetsTotalCard";
import AssetsSupportCard from "../features/dashboard/AssetsSupportCard";

function Dashboard() {
  const { pathname } = useLocation();
  const location = pathname.match(/\/([^/]+)\/?$/)[1];
  console.log(location);

  const [assetsStatusCardData, setAssetsStatusCardData] = useState(["null"]);

  const fetchAssetsStatus = async () => {
    const AssetsStatus = await fetch(
      `http://${API_ENDPOINT}/dashboard/assets/status/`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    return {
      AssetsStatusData: await AssetsStatus.json(),
    };
  };

  const fetchAssetsStatusData = async () => {
    const items = await fetchAssetsStatus();
    return items.AssetsStatusData.data;
  };

  useEffect(() => {
    fetchAssetsStatusData().then((assetsStatusCardData) => {
      setAssetsStatusCardData(assetsStatusCardData);
    });
  }, [location]);

  const [assetsTotalCardData, setAssetsTotalCardData] = useState(["null"]);

  const fetchAssetsTotal = async () => {
    const AssetsTotal = await fetch(
      `http://${API_ENDPOINT}/dashboard/assets/totals/`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    return {
      AssetsTotalData: await AssetsTotal.json(),
    };
  };

  const fetchAssetsTotalData = async () => {
    const items = await fetchAssetsTotal();
    return items.AssetsTotalData.data;
  };

  useEffect(() => {
    fetchAssetsTotalData().then((assetsTotalCardData) => {
      setAssetsTotalCardData(assetsTotalCardData);
    });
  }, [location]);

  const [assetsSupportCardData, setAssetsSupportCardData] = useState(["null"]);

  const fetchAssetsSupport = async () => {
    const AssetsSupport = await fetch(
      `http://${API_ENDPOINT}/dashboard/assets/support/`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    return {
      AssetsSupportData: await AssetsSupport.json(),
    };
  };

  const fetchAssetsSupportData = async () => {
    const items = await fetchAssetsSupport();
    return items.AssetsSupportData.data;
  };

  useEffect(() => {
    fetchAssetsSupportData().then((assetsSupportCardData) => {
      setAssetsSupportCardData(assetsSupportCardData);
    });
  }, [location]);

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
          {assetsStatusCardData &&
            assetsStatusCardData.map((assetsStatusCardData) => (
              <AssetsStatusCard
                assetsStatusCardData={assetsStatusCardData}
                key={assetsStatusCardData.title}
              />
            ))}
        </SimpleGrid>
      </Card>
      <SimpleGrid
        marginTop="1.5em"
        spacing="1.2em"
        columns={{ base: "1", sm: "1", md: "2", lg: "2" }}
      >
        <AssetsTotalCard
          key="AssetsTotal"
          assetsTotalCardData={assetsTotalCardData}
        />
        <AssetsSupportCard
          key="AssetsSupport"
          assetsSupportCardData={assetsSupportCardData}
        />
      </SimpleGrid>
    </Box>
  );
}

export default Dashboard;
