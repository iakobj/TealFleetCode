// React components
import * as React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import { API_ENDPOINT } from "../../constants/apiEndpoint";

// Chakra-UI components
import { Flex, Text, HStack, Button } from "@chakra-ui/react";

function HeaderSubNav({ link, subLink }) {
  let subLinkBold = subLink;
  const [subNavItems, setSubNavItems] = useState();
  const [clickedIndex, setClickedIndex] = useState(1);

  const handleLinkClick = (index) => {
    setClickedIndex(index);
  };

  useEffect(() => {
    setClickedIndex(null);
  }, [link]);

  const fetchTenants = async () => {
    const data = await fetch(`${API_ENDPOINT}/tenants`, {
      method: "GET",
      credentials: "include",
    });
    return { subNavData: await data.json() };
  };

  const fetchSubNavTenants = async () => {
    const items = await fetchTenants();
    return items.subNavData.data;
  };

  const assets = [{ assets: "fleet" }, { assets: "spare parts" }];

  const support = [
    { support: "contracts" },
    { support: "tickets" },
    { support: "alerts" },
  ];

  const administration = [
    { administration: "users" },
    { administration: "tenants" },
    { administration: "logs" },
    { administration: "catalogs" },
  ];

  useEffect(() => {
    if (link == "dashboard") {
      fetchSubNavTenants().then((items) => {
        setSubNavItems(items);
      });
    } else if (link == "assets") {
      setSubNavItems(assets);
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
          item.assets ||
          item.support ||
          item.administration
      )
      .map((subNavItem, index) => {
        const getNavItem = (item) =>
          item.assets
            ? item.assets.toLowerCase().replace(/\s+/g, '')
            : item.tenant_name || item.support || item.administration;

        const navItem = getNavItem(subNavItem);

        return (
          <NavLink
            to={`${link}/${navItem}`}
            key={navItem}
          >
            <Button
              size="sm"
              colorScheme="blackAlpha"
              variant="ghost"
              onClick={() => handleLinkClick(index)}
            >
              <Text
                color="blackAlpha.700"
                fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                textTransform="capitalize"
                fontWeight={
                  index === clickedIndex ||
                  [subNavItem.tenant_name, subNavItem.assets, subNavItem.support, subNavItem.administration].includes(subLinkBold)
                    ? '500'
                    : 'normal'
                }
              >
                {subNavItem.tenant_name ||
                  subNavItem.assets ||
                  subNavItem.support ||
                  subNavItem.administration}
              </Text>
            </Button>
          </NavLink>
        );
      })}
</HStack>

    </Flex>
  );
}

export default HeaderSubNav;
