import * as React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

import FleetCard from "./FleetCard.jsx";
import Fleet from "../../pages/Fleet.jsx";

// Chakra-UI components
import {
  Flex,
  Box,
  Button,
  SimpleGrid,
  Spacer,
  Select,
  Hide,
  IconButton,
} from "@chakra-ui/react";

import { Search2Icon, RepeatIcon } from "@chakra-ui/icons";

// Fetch Tenant info for filter
const fetchTenantData = async () => {
  const data = await fetch(`http://localhost:3000/tenants/`);
  return { data: await data.json() };
};
const tItems = await fetchTenantData();

// Fetch SW Model info for filter
const fetchSWModelData = async () => {
  const data = await fetch(`http://localhost:3000/software/catalog/model/name`);
  return { data: await data.json() };
};
const swItems = await fetchSWModelData();

// Fetch HW Model info for filter
const fetchHWModelData = async () => {
  const data = await fetch(`http://localhost:3000/hardware/catalog/model/name`);
  return { data: await data.json() };
};
const hwItems = await fetchHWModelData();

// Fetch Site name info for filter
const fetchSiteNameData = async () => {
  const data = await fetch(`http://localhost:3000/sites/`);
  return { data: await data.json() };
};
const siteItems = await fetchSiteNameData();

// Fetch Fleet card information
const fetchFleetData = async () => {
  const data = await fetch(`http://localhost:3000/assets/fleet/card/all/`);
  return { data: await data.json() };
};

const fItems = await fetchFleetData();

// FleetFilter Component
function FleetFilter() {
  // Get the location of the url, and if it is empty use "Fleet"
  const loc = useLocation();
  const location = loc.pathname.slice(1) || "Fleet";

  // From URL it gets the last word, then it updates the array of card data and displays only the ones that include the vendor name
  React.useEffect(() => {
    var inputLocation = location;
    var vendorName = inputLocation.split("/");

    if (vendorName.length > 1) {
      var vendor = vendorName[1];
      const originalArray = fItems.data;
      // if the vendor is all it will display unchanged array of all asset fleet cards
      if (vendor === "All") {
        setfleetCardItems(originalArray);
      } else {
        const filteredArray = originalArray.filter((item) => {
          return item.vendor_name === vendor;
        });
        setfleetCardItems(filteredArray);
      }
    }
  }, [location]);

  const [formData, setFormData] = useState();

  const [fleetCardItems, setfleetCardItems] = useState(fItems.data);

  const tenantItems = tItems.data;
  const swModelItems = swItems.data;
  const hwModelItems = hwItems.data;
  const siteNameItems = siteItems.data;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    var inputLocation = location;
    var vendorName = inputLocation.split("/");

    if (vendorName.length > 1) {
      var vendor = vendorName[1];
    }

    event.preventDefault();
    const originalArray = fItems.data;
    const filteredArray = originalArray.filter((item) => {
      return (
        (!formData.tenant || item.tenant_name === formData.tenant) &&
        (!formData.swmodel || item.software_model_name === formData.swmodel) &&
        (!formData.hwmodel || item.hardware_model_name === formData.hwmodel) &&
        (!vendor || item.vendor_name === vendor) 
        
      );
    });
    setfleetCardItems(filteredArray);
  };

  const handleReset = () => {
    const originalArray = fItems.data;
    setfleetCardItems(originalArray);
  };

  return (
    <Box>
      <Hide breakpoint="(max-width: 57em)">
        <form onSubmit={handleSubmit}>
          <Flex marginBottom={"0.8em"}>
            <Box marginRight={"1em"}>
              <Select
                placeholder="Tenant"
                id="tenant"
                name="tenant"
                size="sm"
                w="12em"
                onChange={handleChange}
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
            </Box>
            <Box marginRight={"1em"}>
              <Select
                placeholder="SW model"
                size="sm"
                w="10em"
                id="swmodel"
                name="swmodel"
                onChange={handleChange}
              >
                {swModelItems &&
                  swModelItems.map &&
                  swModelItems.map((swModelItems) => (
                    <option key={swModelItems.software_model_name}>
                      {swModelItems.software_model_name}
                    </option>
                  ))}
              </Select>
            </Box>
            <Box marginRight={"1em"}>
              <Select
                placeholder="HW model"
                size="sm"
                w="10em"
                id="hwmodel"
                name="hwmodel"
                onChange={handleChange}
              >
                {hwModelItems &&
                  hwModelItems.map &&
                  hwModelItems.map((hwModelItems) => (
                    <option key={hwModelItems.hardware_model_name}>
                      {hwModelItems.hardware_model_name}
                    </option>
                  ))}
              </Select>
            </Box>
            <Box>
              <Select
                placeholder="Site name"
                size="sm"
                w="10em"
                id="sitename"
                name="sitename"
                onChange={handleChange}
              >
                {siteNameItems &&
                  siteNameItems.map &&
                  siteNameItems.map((siteNameItems) => (
                    <option key={siteNameItems.site_id}>
                      {siteNameItems.site_name}
                    </option>
                  ))}
              </Select>
            </Box>
            <Spacer />
            <Button
              type="submit"
              leftIcon={<Search2Icon />}
              size={"sm"}
              colorScheme={"teal"}
            >
              Filter
            </Button>
            <NavLink to={"/Fleet"}>
            <IconButton
              aria-label="Reset filter"
              icon={<RepeatIcon />}
              size={"sm"}
              colorScheme={"teal"}
              marginLeft={"1em"}
              onClick={handleReset}
              
            />
            </NavLink>
          </Flex>
        </form>
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
