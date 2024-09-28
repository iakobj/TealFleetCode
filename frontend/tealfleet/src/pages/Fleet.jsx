import * as React from "react";
import { vendorsGetAll } from "../constants/api/vendors.js";
import { tenantsGetAll } from "../constants/api/tenants.js";
import { softwareCatGetSWModelName } from "../constants/api/software.js";
import { hardwareCatGetHWModelName } from "../constants/api/hardware.js";
import { sitesGetAll } from "../constants/api/sites.js";
import { assetsGetAll, assetsGetAllQuery } from "../constants/api/assets.js";

// Chakra-UI components
import { Box } from "@chakra-ui/react";

import FleetFilter from "../features/fleet/FleetFilter.jsx";

function Fleet() {
  return (
    <Box>
      <FleetFilter />
    </Box>
  );
}

export default Fleet;

export const FleetDataLoader = async ({ params, request }) => {
  let fItems;

  const url = new URL(request.url);
  const searchVendor = url.searchParams.get("vendor");
  const searchTenant = url.searchParams.get("tenant");
  const searchSwmodel = url.searchParams.get("swmodel");
  const searchHwmodel = url.searchParams.get("hwmodel");
  const searchSitename = url.searchParams.get("sitename");
  const searchOffset = url.searchParams.get("offset");

  // Construct the URL with search parameters
  const queryParams = new URLSearchParams({
    vendor: searchVendor,
    tenant: searchTenant,
    swmodel: searchSwmodel,
    hwmodel: searchHwmodel,
    sitename: searchSitename,
    offset: searchOffset,
  });

  const vItems = await vendorsGetAll();
  const tItems = await tenantsGetAll();
  const swItems = await softwareCatGetSWModelName();
  const hwItems = await hardwareCatGetHWModelName();
  const siteItems = await sitesGetAll();
  fItems = await assetsGetAll();

  if (
    searchTenant ||
    searchSwmodel ||
    searchHwmodel ||
    searchSitename ||
    searchVendor ||
    searchOffset
  ) {
    fItems = await assetsGetAllQuery(queryParams);
  }

  return {
    vItems: await vItems,
    tItems: await tItems,
    swItems: await swItems,
    hwItems: await hwItems,
    siteItems: await siteItems,
    fItems: await fItems,
  };
};
