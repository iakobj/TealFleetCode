import * as React from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Flex,
  Text,
  HStack,
  Box,
  Spacer,
  Center,
  GridItem,
  Grid,
} from "@chakra-ui/react";

import HeaderLogo from "./HeaderLogo";
import HeaderSubNav from "./HeaderSubNav";
import HeaderProfileMenu from "./HeaderProfileMenu";

const fetchData = async () => {
  const data = await fetch(`http://localhost:3000/navigation/main`, {
    method: "GET",
    credentials: "include",
  });
  return { data: await data.json() };
};

const items = await fetchData();
const mainNavItems = items.data;

function HeaderMainNav() {
  const loc = useLocation();
  const location = loc.pathname.slice(1) || "dashboard";

  const [clickedIndex, setClickedIndex] = useState(-1);
  const [selectedLink, setSelectedLink] = useState(location);

  const handleLinkClick = (index) => {
    const link = items.data[index].main_nav_item;
    setClickedIndex(index);
    setSelectedLink(link);
  };

  return (
    <Grid
      height={{ base: "6.5em", sm: "6.5em", md: "6.5em" }}
      gridTemplateColumns="repeat(12, 1fr)"
      gridTemplateRows="repeat(2, 1fr)"
    >
      <GridItem
        colSpan={{ base: 12, sm: 12, md: 12 }}
        colStart={{ base: 1, sm: 1, md: 1 }}
        rowSpan={{ base: 1, sm: 1, md: 1 }}
        rowStart={{ base: 1, sm: 1, md: 1 }}
        bg="white"
      ></GridItem>

      <GridItem
        colSpan={{ base: 12, sm: 12, md: 12 }}
        colStart={{ base: 1, sm: 1, md: 1 }}
        rowSpan={{ base: 1, sm: 1, md: 1 }}
        rowStart={{ base: 1, sm: 1, md: 1 }}
        bg="teal.600"
        boxShadow="md"
        marginTop={{ md: "0.5em" }}
        borderRadius={{ md: "0.6em 0.6em 0em 0em" }}
      >
        <Flex>
          <HeaderLogo />
          <Spacer />

          <Box margin={{ base: "0.6em", sm: "0.6em", md: "0.6em" }}>
            <HStack
              spacing={{
                base: "0.3em",
                sm: "0.6em",
                md: "1.8em",
                lg: "1.8em",
                xl: "1.8em",
              }}
            >
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
          </Box>
          <Spacer />

          <Box margin={{ base: "0.7em", sm: "0.7em", md: "0.5em" }}>
            <HeaderProfileMenu />
          </Box>
        </Flex>
      </GridItem>
      <GridItem
        colSpan={{ base: 12, sm: 12, md: 12 }}
        colStart={{ base: 1, sm: 1, md: 1 }}
        rowSpan={{ base: 1, sm: 1, md: 1 }}
        rowStart={{ base: 2, sm: 2, md: 2 }}
        bg="gray.50"
        boxShadow="md"
        marginBottom={{ md: "1.1em" }}
        borderRadius={{ md: "0em 0em 0em 0em" }}
      >
        <Center margin={{ base: "0.7em", sm: "0.7em", md: "0.2em" }}>
          <HeaderSubNav link={selectedLink} />
        </Center>
      </GridItem>
    </Grid>
  );
}

export default HeaderMainNav;
