import * as React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Flex, Text, HStack } from "@chakra-ui/react";

const fetchData = async () => {
  const data = await fetch(`http://localhost:3000/navigation/main`);
  return { data: await data.json() };
};

const items = await fetchData();
const mainNavItems = items.data;

function HeaderMainNav() {
  const [clickedIndex, setClickedIndex] = useState(-1);

  const handleLinkClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <Flex>
      <HStack spacing={{ md: "1.8em", lg: "1.8em", xl: "1.8em" }}>
        {mainNavItems &&
          mainNavItems.map &&
          mainNavItems.map((mainNavItem, index) => (
            <Text
              color="white"
              fontSize={{ base: "sm", sm: "sm", md: "lg" }}
              key={mainNavItem.main_nav_id}
              onClick={() => handleLinkClick(index)}
              fontWeight={index === clickedIndex ? "bold" : "500"}
            >
              <NavLink to={mainNavItem.main_nav_item}>
                {mainNavItem.main_nav_item.toUpperCase()}
              </NavLink>
            </Text>
          ))}
      </HStack>
    </Flex>
  );
}

export default HeaderMainNav;
