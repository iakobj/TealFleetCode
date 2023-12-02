// React components
import * as React from "react";

// Chakra-UI components
import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

import AssetsStatusCard from "../../components/dashboard/AssetsStatusCard";
import AssetsTotalCard from "../../components/dashboard/AssetsTotalCard";
import AssetsSupportCard from "../../components/dashboard/AssetsSupportCard";
import AssetsListCard from "../../components/dashboard/AssetsListCard";

function ApplianceSuits() {
  const AssetsStatusCardData = [
    {
      title: "All appliance suits",
      percent: 100,
    },
    {
      title: "Appliances with support",
      percent: 76,
    },
    {
      title: "Appliances without support",
      percent: 24,
    },
    {
      title: "Support expires in 3 months",
      percent: 10,
    },
    {
      title: "Support expires in 6 months",
      percent: 20,
    },
    {
      title: "Support expires in 12 months",
      percent: 15,
    },
  ];

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

  const AssetsListCardData = [
    {
      asset_id: "123",
      no: "1",
      vendor: "Cisco",
      model: "UCS-C220-M6-SFF",
      support: "Yes",
      supported_until: "13.feb 2025",
      site_city: "Ljubljana",
    },
    {
      asset_id: "1234",
      no: "2",
      vendor: "Cisco",
      model: "UCS-C220-M6-SFF",
      support: "Yes",
      supported_until: "13.feb 2025",
      site_city: "Ljubljana",
    },
    {
      asset_id: "12345",
      no: "3",
      vendor: "Cisco",
      model: "UCS-C220-M6-SFF",
      support: "Yes",
      supported_until: "13.feb 2025",
      site_city: "Ljubljana",
    },
    {
      asset_id: "123112",
      no: "4",
      vendor: "Cisco",
      model: "UCS-C220-M6-SFF",
      support: "Yes",
      supported_until: "13.feb 2025",
      site_city: "Ljubljana",
    },
    {
      asset_id: "12312",
      no: "5",
      vendor: "Cisco",
      model: "UCS-C220-M6-SFF",
      support: "Yes",
      supported_until: "13.feb 2025",
      site_city: "Ljubljana",
    },
    {
      asset_id: "12223",
      no: "6",
      vendor: "Cisco",
      model: "UCS-C220-M6-SFF",
      support: "Yes",
      supported_until: "13.feb 2025",
      site_city: "Ljubljana",
    },
    {
      asset_id: "12113",
      no: "7",
      vendor: "Cisco",
      model: "UCS-C220-M6-SFF",
      support: "Yes",
      supported_until: "13.feb 2025",
      site_city: "Ljubljana",
    },
    {
      asset_id: "12w233",
      no: "8",
      vendor: "Cisco",
      model: "UCS-C220-M6-SFF",
      support: "Yes",
      supported_until: "13.feb 2025",
      site_city: "Ljubljana",
    },
    {
      asset_id: "12123873",
      no: "9",
      vendor: "Cisco",
      model: "UCS-C220-M6-SFF",
      support: "Yes",
      supported_until: "13.feb 2025",
      site_city: "Ljubljana",
    },
    {
      asset_id: "12987653",
      no: "10",
      vendor: "Cisco",
      model: "UCS-C220-M6-SFF",
      support: "Yes",
      supported_until: "13.feb 2025",
      site_city: "Ljubljana",
    },
  ];

  return (
    <Box marginTop="1em">
      <SimpleGrid
        spacing="1em"
        columns={{ base: "1", sm: "2", md: "3", lg: "3", xl: "4", "2xl": "6" }}
      >
        {AssetsStatusCardData.map((AssetsStatusCardData) => (
          <AssetsStatusCard
            AssetsStatusCardData={AssetsStatusCardData}
            key={AssetsStatusCardData.title}
          />
        ))}
      </SimpleGrid>

      <SimpleGrid
        marginTop="1em"
        spacing="1em"
        columns={{ base: "1", sm: "1", md: "2", lg: "2" }}
      >
        <AssetsTotalCard AssetsTotalCardData={AssetsTotalCardData} />
        <AssetsSupportCard AssetsSupportCardData={AssetsSupportCardData} />
      </SimpleGrid>

      <SimpleGrid
        marginTop="1em"
        spacing="1em"
        columns={{ base: "1", sm: "1", md: "1", lg: "1" }}
      >
        <AssetsListCard AssetsListCardData={AssetsListCardData} />
      </SimpleGrid>
    </Box>
  );
}

export default ApplianceSuits;
