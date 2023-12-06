// React components
import * as React from "react";

// import location of the API server
import { API_ENDPOINT } from '../constants/apiEndpoint';

// Components
import FleetFilter from "../features/fleet/FleetFilter.jsx";

function Fleet() {
  return (
    <div>
      <FleetFilter />
    </div>
  );
}

export default Fleet;

export const FleetDataLoader = async () => {
  // Fetch Tenant info for filter
  const tItems = await fetch(`http://${API_ENDPOINT}/tenants/`);

  // Fetch SW Model info for filter
  const swItems = await fetch(
    `http://${API_ENDPOINT}/software/catalog/model/name`
  );

  // Fetch HW Model info for filter
  const hwItems = await fetch(
    `http://${API_ENDPOINT}/hardware/catalog/model/name`
  );

  // Fetch Site name info for filter
  const siteItems = await fetch(`http://${API_ENDPOINT}/sites/`);

  // Fetch Fleet card information
  const fItems = await fetch(`http://${API_ENDPOINT}/assets/fleet/card/all/`);

  return {
    tItems: await tItems.json(),
    swItems: await swItems.json(),
    hwItems: await hwItems.json(),
    siteItems: await siteItems.json(),
    fItems: await fItems.json(),
  };
};
