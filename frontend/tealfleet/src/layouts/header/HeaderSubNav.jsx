// React components
import * as React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

// Chakra-UI components
import { Flex, Text, HStack, Button } from "@chakra-ui/react";

function HeaderSubNav({ link }) {
  const fetchData = async () => {
    const data = await fetch(`http://localhost:3000/vendors`, {
      method: "GET",
      credentials: "include",
    });
    return { subNavData: await data.json() };
  };

  const fetchSubNavItems = async () => {
    const items = await fetchData();
    return items.subNavData.data;
  };

  const [subNavItems, setSubNavItems] = useState([]);

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
                item.vendor_name ||
                item.tenant_name ||
                item.support ||
                item.administration
            )
            .map((subNavItem) => (
              <NavLink
                to={
                  link +
                  "/" +
                  (subNavItem.vendor_name ||
                    subNavItem.tenant_name ||
                    (typeof subNavItem.support === "string"
                      ? subNavItem.support.toLowerCase()
                      : "") ||
                    (typeof subNavItem.administration === "string"
                      ? subNavItem.administration.toLowerCase()
                      : ""))
                }
                key={
                  subNavItem.vendor_name ||
                  subNavItem.tenant_name ||
                  subNavItem.support ||
                  subNavItem.administration
                }
              >
                <Button size="sm" colorScheme="blackAlpha" variant="ghost">
                  <Text
                    color="blackAlpha.700"
                    fontSize={{ base: "sm", sm: "sm", md: "md" }}
                    fontWeight={
                      location.pathname === subNavItem.sub_nav_path
                        ? "bold"
                        : "normal"
                    }
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
