import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

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

import { Search2Icon, RepeatIcon } from "@chakra-ui/icons";

// FleetFilter Component
function FleetFilter() {
  // Get the location of the url, and if it is empty use "Fleet"
  const loc = useLocation();
  const location = loc.pathname.slice(1) || "Fleet";

  const loaderData = useLoaderData();

  const fItems = loaderData.fItems.data;
  const tenantItems = loaderData.tItems.data;
  const swModelItems = loaderData.swItems.data;
  const hwModelItems = loaderData.hwItems.data;
  const siteNameItems = loaderData.siteItems.data;

  // From URL it gets the last word, then it updates the array of card data and displays only the ones that include the vendor name
  useEffect(() => {
    var inputLocation = location;
    var vendorName = inputLocation.split("/");
    
    if (vendorName.length > 1) {
      const vendor = vendorName[1];
      const originalArray = fItems;
      // if the vendor is all it will display unchanged array of all asset fleet cards
      if (vendor === "All") {
        setFleetCardItems(originalArray);
      } else {
        const filteredArray = originalArray.filter((item) => {
          return item.vendor_name == vendor;
        });
        setFleetCardItems(filteredArray);
      }
    }
  }, [location]);

  const [formData, setFormData] = useState();
  const [fleetCardItems, setFleetCardItems] = useState(fItems);

  // Add state for selected values
  const [selectedTenant, setSelectedTenant] = useState("");
  const [selectedSwModel, setSelectedSwModel] = useState("");
  const [selectedHwModel, setSelectedHwModel] = useState("");
  const [selectedSiteName, setSelectedSiteName] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    switch (name) {
      case "tenant":
        setSelectedTenant(value);
        break;
      case "swmodel":
        setSelectedSwModel(value);
        break;
      case "hwmodel":
        setSelectedHwModel(value);
        break;
      case "sitename":
        setSelectedSiteName(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    var inputLocation = location;
    var vendorName = inputLocation.split("/");

    if (vendorName.length > 1) {
      var vendor = vendorName[1];
    }

    event.preventDefault();
    const originalArray = fItems;
    const filteredArray = originalArray.filter((item) => {
      return (
        (!formData.tenant || item.tenant_name == formData.tenant) &&
        (!formData.swmodel || item.software_model_name == formData.swmodel) &&
        (!formData.hwmodel || item.hardware_model_name == formData.hwmodel) &&
        (!vendor || item.vendor_name == vendor)
      );
    });
    setFleetCardItems(filteredArray);
  };

  const handleReset = () => {
    // Reset selected values
    setSelectedTenant("");
    setSelectedSwModel("");
    setSelectedHwModel("");
    setSelectedSiteName("");

    const originalArray = fItems;
    setFleetCardItems(originalArray);
  };

  return (
    <Box marginTop={{ base: "1em", sm: "1em", md: "0em" }}>
      <Hide breakpoint="(max-width: 17em)">
      <Card marginBottom="1em" paddingTop="0.6em" paddingBottom="0.6em" bg="#fdfdfd">
        <form onSubmit={handleSubmit}>
          <Wrap>
            <WrapItem>
              <Button
                type="submit"
                leftIcon={<Search2Icon />}
                size={"sm"}
                colorScheme={"teal"}
                marginLeft="0.6em"
              >
                Filter
              </Button>
              <NavLink to={"/fleet"}>
                <IconButton
                  marginRight={"0.6em"}
                  aria-label="Reset filter"
                  icon={<RepeatIcon />}
                  size={"sm"}
                  colorScheme={"teal"}
                  marginLeft={"0.6em"}
                  onClick={handleReset}
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
                onChange={handleChange}
                value={selectedTenant}
              >
                {tenantItems &&
                  tenantItems.map &&
                  tenantItems.map((tenantItems) => (
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
                onChange={handleChange}
                value={selectedSwModel}
              >
                {swModelItems &&
                  swModelItems.map &&
                  swModelItems.map((swModelItems) => (
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
                onChange={handleChange}
                value={selectedHwModel}
              >
                {hwModelItems &&
                  hwModelItems.map &&
                  hwModelItems.map((hwModelItems) => (
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
                onChange={handleChange}
                value={selectedSiteName}
              >
                {siteNameItems &&
                  siteNameItems.map &&
                  siteNameItems.map((siteNameItems) => (
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
        </form>
        </Card>
      </Hide>
      <SimpleGrid
        spacing="1em"
        columns={{ base: "1", sm: "2", md: "3", lg: "3", xl: "4", "2xl": "5" }}
      >
        {fleetCardItems &&
          fleetCardItems.map &&
          fleetCardItems.map((fleetCardItems) => (
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
