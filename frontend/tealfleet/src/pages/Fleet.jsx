import * as React from "react";

import { API_ENDPOINT } from "../constants/apiEndpoint";

import FleetFilter from "../features/fleet/FleetFilter.jsx";

function Fleet() {
  return (
    <div>
      <FleetFilter />
    </div>
  );
}

export default Fleet;

export const FleetDataLoader = async ({ params }) => {

  console.log(params);

  const tItems = await fetch(`http://${API_ENDPOINT}/tenants/`, {
    method: "GET",
    credentials: "include",
  });

  const swItems = await fetch(
    `http://${API_ENDPOINT}/software/catalogs/models/names`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const hwItems = await fetch(
    `http://${API_ENDPOINT}/hardware/catalogs/models/names`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const siteItems = await fetch(`http://${API_ENDPOINT}/sites/`, {
    method: "GET",
    credentials: "include",
  });

  const fItems = await fetch(`http://${API_ENDPOINT}/assets/fleet/all/`, {
    method: "GET",
    credentials: "include",
  });

  return {
    tItems: await tItems.json(),
    swItems: await swItems.json(),
    hwItems: await hwItems.json(),
    siteItems: await siteItems.json(),
    fItems: await fItems.json(),
  };
};
