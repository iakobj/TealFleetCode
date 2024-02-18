import * as React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

// import location of the API server
import { API_ENDPOINT } from "../../constants/apiEndpoint";

import {
  Flex,
  Button,
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

function HeaderMainNav() {
  const { pathname: location = "dashboard" } = useLocation();

  const [clickedIndex, setClickedIndex] = useState(-1);
  const linkForSubNav =
    location.split("/")[0] === ""
      ? location.split("/")[1]
      : location.split("/")[0];

  const handleLinkClick = (index) => {
    setClickedIndex(index);
  };

  // Fetch navgation data
  const [mainNavItems, setMainNavItems] = useState([]);

  const fetchData = async () => {
    const data = await fetch(`http://${API_ENDPOINT}/navigation/main`, {
      method: "GET",
      credentials: "include",
    });
    return {
      mainNavData: await data.json(),
    };
  };

  const fetchMainNavData = async () => {
    const items = await fetchData();
    return items.mainNavData.data;
  };

  useEffect(() => {
    fetchMainNavData().then((items) => {
      setMainNavItems(items);
    });
  }, [location]);

  // Fetch user data
  const [user, setUser] = useState(["null"]);

  const fetchUser = async () => {
    const userData = await fetch(`http://${API_ENDPOINT}/users/me`, {
      method: "GET",
      credentials: "include",
    });
    return {
      logedInUserData: await userData.json(),
    };
  };

  const fetchUserData = async () => {
    const items = await fetchUser();
    return items.logedInUserData.data;
  };

  useEffect(() => {
    fetchUserData().then((user) => {
      setUser(user);
    });
  }, [location]);

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
        marginTop={{ md: "0.3em" }}
        borderRadius={{ md: "0.6em 0.6em 0em 0em" }}
      >
        <Flex>
          <HeaderLogo />
          <Spacer />

          <Box marginTop={{ base: "1.0em", sm: "0.5em", md: "0.5em" }}>
            <HStack>
              {mainNavItems && 
                mainNavItems.filter(item => item.main_nav_item && item.main_nav_id).map((mainNavItem, index) => (
                  <NavLink
                    to={mainNavItem.main_nav_item}
                    key={mainNavItem.main_nav_id}
                  >
                    <Button
                      size="sm"
                      colorScheme="teal"
                      variant="hgost"
                      onClick={() => handleLinkClick(index)}
                      fontWeight={index === clickedIndex ? "bold" : "300"}
                    >
                      <Text
                        color="white"
                        fontSize={{ base: "sm", sm: "sm", md: "lg" }}
                        key={mainNavItem.main_nav_id}
                        fontWeight={index === clickedIndex ? "bold" : "400"}
                      >
                        {mainNavItem.main_nav_item.toUpperCase()}
                      </Text>
                    </Button>
                  </NavLink>
                ))}
            </HStack>
          </Box>
          <Spacer />

          <Box margin={{ base: "0.7em", sm: "0.7em", md: "0.5em" }}>
            <HeaderProfileMenu user={user} />
          </Box>
        </Flex>
      </GridItem>
      <GridItem
        colSpan={{ base: 12, sm: 12, md: 12 }}
        colStart={{ base: 1, sm: 1, md: 1 }}
        rowSpan={{ base: 1, sm: 1, md: 1 }}
        rowStart={{ base: 2, sm: 2, md: 2 }}
        bg="#fdfdfd"
        border="1px"
        borderColor="gray.200"
        marginBottom={{ md: "1.1em" }}
        borderRadius={{ md: "0em 0em 0em 0em" }}
      >
        <Center margin={{ base: "0.7em", sm: "0.7em", md: "0.2em" }} >
          <HeaderSubNav link={linkForSubNav}/>
        </Center>
      </GridItem>
    </Grid>
  );
}

export default HeaderMainNav;
