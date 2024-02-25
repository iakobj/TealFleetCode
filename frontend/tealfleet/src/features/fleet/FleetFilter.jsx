import * as React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useLoaderData, useSearchParams } from "react-router-dom";

import FleetCard from "./FleetCard.jsx";

// Chakra-UI components
import {
  Spacer,
  Box,
  Button,
  SimpleGrid,
  Wrap,
  WrapItem,
  Card,
  Select,
  Hide,
  IconButton,
} from "@chakra-ui/react";

import { RepeatIcon } from "@chakra-ui/icons";

function FleetFilter() {
  const loaderData = useLoaderData();

  const fleetCardItems = loaderData.fItems.data;
  const tenantItems = loaderData.tItems.data;
  const swModelItems = loaderData.swItems.data;
  const hwModelItems = loaderData.hwItems.data;
  const siteNameItems = loaderData.siteItems.data;

  const [tenant, setTenant] = useState();
  const [swmodel, setSwmodel] = useState();
  const [hwmodel, setHwmodel] = useState();
  const [sitename, setSitename] = useState();

  const [searchParams, setSearchParams] = useSearchParams();

  // Reset the select forms when URL changes to /fleet
  useEffect(() => {
    const resetFilters = () => {
      setTenant("");
      setSwmodel("");
      setHwmodel("");
      setSitename("");
    };

    if (location.pathname.startsWith("/fleet/")) {
      resetFilters();
    }
  }, [location.pathname]);

  function handleChange(selected, filterName) {
    // Update the state based on the selected filter
    switch (filterName) {
      case "tenant":
        setTenant(selected);
        break;
      case "swmodel":
        setSwmodel(selected);
        break;
      case "hwmodel":
        setHwmodel(selected);
        break;
      case "sitename":
        setSitename(selected);
        break;
      default:
        break;
    }
    let params = {
      tenant: filterName === "tenant" ? selected : tenant,
      swmodel: filterName === "swmodel" ? selected : swmodel,
      hwmodel: filterName === "hwmodel" ? selected : hwmodel,
      sitename: filterName === "sitename" ? selected : sitename,
    };
    setSearchParams(params);
  }

  return (
    <Box marginTop={{ base: "1em", sm: "1em", md: "0em" }}>
      <Hide breakpoint="(max-width: 17em)">
        <Card
          marginBottom="1em"
          paddingTop="0.6em"
          paddingBottom="0.6em"
          variant="outline"
          bg="#fdfdfd"
          borderRadius={"0.6em 0.6em 0.6em 0.6em"}
        >
          <Wrap>
            <WrapItem>
              <NavLink to={"/fleet"}>
                <IconButton
                  marginRight={"0.6em"}
                  aria-label="Reset filter"
                  icon={<RepeatIcon />}
                  size={"sm"}
                  colorScheme={"teal"}
                  marginLeft={"0.6em"}
                />
              </NavLink>
            </WrapItem>

            <WrapItem marginRight={"0.5em"}>
              <Select
                placeholder="Tenant"
                id="tenant"
                name="tenant"
                size="sm"
                w={{ base: "7em", sm: "7em", md: "7em", lg: "8em" }}
                value={tenant}
                onChange={(e) => handleChange(e.target.value, "tenant")}
              >
                {tenantItems &&
                  tenantItems
                    .filter((item) => item.tenant_id)
                    .map((tenantItems) => (
                      <option
                        key={tenantItems.tenant_id}
                        value={tenantItems.tenant_name}
                      >
                        {tenantItems.tenant_name}
                      </option>
                    ))}
              </Select>
            </WrapItem>
            <WrapItem marginRight={"0.5em"}>
              <Select
                placeholder="Software"
                size="sm"
                w={{ base: "7em", sm: "7em", md: "7em", lg: "8em" }}
                id="swmodel"
                name="swmodel"
                value={swmodel}
                onChange={(e) => handleChange(e.target.value, "swmodel")}
              >
                {swModelItems &&
                  swModelItems
                    .filter((item) => item.software_model_name)
                    .map((swModelItems) => (
                      <option key={swModelItems.software_model_name}>
                        {swModelItems.software_model_name}
                      </option>
                    ))}
              </Select>
            </WrapItem>
            <WrapItem marginRight={"0.5em"}>
              <Select
                placeholder="Hardware"
                size="sm"
                w={{ base: "7em", sm: "7em", md: "7em", lg: "8em" }}
                id="hwmodel"
                name="hwmodel"
                value={hwmodel}
                onChange={(e) => handleChange(e.target.value, "hwmodel")}
              >
                {hwModelItems &&
                  hwModelItems
                    .filter((item) => item.hardware_model_name)
                    .map((hwModelItems) => (
                      <option key={hwModelItems.hardware_model_name}>
                        {hwModelItems.hardware_model_name}
                      </option>
                    ))}
              </Select>
            </WrapItem>
            <WrapItem>
              <Select
                placeholder="Site"
                size="sm"
                w={{ base: "7em", sm: "7em", md: "7em", lg: "8em" }}
                id="sitename"
                name="sitename"
                value={sitename}
                onChange={(e) => handleChange(e.target.value, "sitename")}
              >
                {siteNameItems &&
                  siteNameItems
                    .filter((item) => item.site_name)
                    .map((siteNameItems) => (
                      <option key={siteNameItems.site_id}>
                        {siteNameItems.site_name}
                      </option>
                    ))}
              </Select>
            </WrapItem>
            <Spacer />
            <WrapItem>
              <Spacer />
              <Button marginRight="0.6em" size={"sm"} colorScheme={"teal"}>
                New Asset
              </Button>
            </WrapItem>
          </Wrap>
        </Card>
      </Hide>
      <SimpleGrid
        spacing="1em"
        columns={{ base: "1", sm: "2", md: "3", lg: "3", xl: "4", "2xl": "5" }}
      >
        {fleetCardItems &&
          fleetCardItems
            .filter((item) => item.hardware_asset_id || item.software_asset_id)
            .map((fleetCardItems) => (
              <FleetCard
                fleetCardItems={fleetCardItems}
                key={
                  fleetCardItems.hardware_asset_id
                    ? fleetCardItems.hardware_asset_id
                    : fleetCardItems.software_asset_id
                }
              />
            ))}
      </SimpleGrid>
    </Box>
  );
}

export default FleetFilter;
