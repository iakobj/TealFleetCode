// React components
import * as React from "react";
import { NavLink } from "react-router-dom";

// Chakra-UI components
import { Flex, Text, HStack } from "@chakra-ui/react";

const fetchData = async () => {
  const data = await fetch(`http://localhost:3000/navigation/main`);
  return { data: await data.json() };
};
const items = await fetchData();
const mainNavItems = items.data;

function HeaderMainNav() {
  return (
    <Flex>
      <HStack spacing={{ md: "0.5em", lg: "0.7em", xl: "2.0em" }}>
        {mainNavItems &&
          mainNavItems.map &&
          mainNavItems.map((mainNavItems) => (
            <Text
              as="b"
              color="white"
              fontSize={{ base: "sm", sm: "sm", md: "lg" }}
              key={mainNavItems.main_nav_id}
            >
              <NavLink to={mainNavItems.main_nav_item}>
                {mainNavItems.main_nav_item.toUpperCase()}
              </NavLink>
            </Text>
          ))}
      </HStack>
    </Flex>
  );
}

export default HeaderMainNav;
