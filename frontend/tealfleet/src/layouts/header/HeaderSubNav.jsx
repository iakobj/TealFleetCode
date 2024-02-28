// React components
import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { API_ENDPOINT } from "../../constants/apiEndpoint";

// Chakra-UI components
import { Flex, Text, HStack, Button } from "@chakra-ui/react";

function HeaderSubNav({ location }) {
  const [subNavItems, setSubNavItems] = useState();
  const [clickedIndex, setClickedIndex] = useState(null);

  let link =
    location.split("/")[0] === ""
      ? location.split("/")[1]
      : location.split("/")[0];

  const handleLinkClick = (index) => {
    const delay = 100; // Adjust delay time in milliseconds as needed
    const timer = setTimeout(() => {
      setClickedIndex(index);
    }, delay);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    setClickedIndex(null);
  }, [location]);

  const fetchData = async () => {
    const data = await fetch(`http://${API_ENDPOINT}/vendors`, {
      method: "GET",
      credentials: "include",
    });
    return { subNavData: await data.json() };
  };

  const fetchSubNavItems = async () => {
    const items = await fetchData();
    return items.subNavData.data;
  };

  const fetchTenants = async () => {
    const data = await fetch(`http://localhost:3000/tenants`, {
      method: "GET",
      credentials: "include",
    });
    return { subNavData: await data.json() };
  };

  const fetchSubNavTenants = async () => {
    const items = await fetchTenants();
    return items.subNavData.data;
  };

  const support = [
    { support: "Contracts" },
    { support: "Tickets" },
    { support: "Alerts" },
  ];

  const administration = [
    { administration: "Users" },
    { administration: "Tenants" },
    { administration: "Audit Log" },
    { administration: "Catalogs" },
  ];

  useEffect(() => {
    if (link == "dashboard") {
      fetchSubNavTenants().then((items) => {
        setSubNavItems(items);
      });
    } else if (link == "fleet") {
      fetchSubNavItems().then((items) => {
        setSubNavItems(items);
      });
    } else if (link == "support") {
      setSubNavItems(support);
    } else if (link == "administration") {
      setSubNavItems(administration);
    }
  }, [link]);

  return (
    <Flex
      sx={{
        msOverflowStyle: "none",
        scrollbarWidth: "none",

        "&::-webkit-scrollbar": {
          height: "16px",
          borderRadius: "8px",
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
      }}
      overflowX="auto"
    >
      <HStack>
        {subNavItems &&
          subNavItems
            .filter(
              (item) =>
                item.tenant_name ||
                item.vendor_name ||
                item.support ||
                item.administration
            )
            .map((subNavItem, index) => (
              <NavLink
                to={
                  link +
                  "/" +
                  (subNavItem.tenant_name ||
                    subNavItem.vendor_name ||
                    (typeof subNavItem.support === "string"
                      ? subNavItem.support.toLowerCase()
                      : "") ||
                    (typeof subNavItem.administration === "string"
                      ? subNavItem.administration.toLowerCase()
                      : ""))
                }
                key={
                  subNavItem.tenant_name ||
                  subNavItem.vendor_name ||
                  subNavItem.support ||
                  subNavItem.administration
                }
              >
                <Button
                  size="sm"
                  colorScheme="blackAlpha"
                  variant="ghost"
                  onClick={() => handleLinkClick(index)}
                >
                  <Text
                    color="blackAlpha.700"
                    fontSize={{ base: "sm", sm: "sm", md: "md" }}
                    fontWeight={index === clickedIndex ? "600" : "400"}
                  >
                    {subNavItem.tenant_name ||
                      subNavItem.vendor_name ||
                      subNavItem.support ||
                      subNavItem.administration}
                  </Text>
                </Button>
              </NavLink>
            ))}
      </HStack>
    </Flex>
  );
}

export default HeaderSubNav;
