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

  let link =
    location.split("/")[0] === ""
      ? location.split("/")[1]
      : location.split("/")[0];

  let subLink =
    location.split("/")[0] === ""
      ? location.split("/")[2]
      : location.split("/")[0];

  const [clickedIndex, setClickedIndex] = useState(-1);

  useEffect(() => {
    if (link == "dashboard") {
      setClickedIndex(0);
    } else if (link == "assets") {
      setClickedIndex(1);
    } else if (link == "support") {
      setClickedIndex(2);
    } else if (link == "administration") {
      setClickedIndex(3);
    } else {
      setClickedIndex(-1);
    }
  }, [link]);

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

  const mainNavItems = {
    data: [
      {
        title: "dashboard",
        navigate: "dashboard",
      },
      {
        title: "assets",
        navigate: "assets/fleet",
      },
      {
        title: "support",
        navigate: "support/contracts",
      },
      {
        title: "administration",
        navigate: "administration/users",
      },
    ],
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
        marginTop={{ md: "0.3em" }}
        borderRadius={{ md: "0.6em 0.6em 0em 0em" }}
      >
        <Flex>
          <HeaderLogo />
          <Spacer />
          <Box marginTop={{ base: "1.0em", sm: "0.5em", md: "0.5em" }}>
            <HStack>
              {mainNavItems.data.map((mainNavItem, index) => (
                <NavLink to={mainNavItem.navigate} key={mainNavItem.title}>
                  <Button size="sm" colorScheme="teal" variant="hgost">
                    <Text
                      color="white"
                      fontSize={{ base: "sm", sm: "sm", md: "lg" }}
                      key={mainNavItem.title}
                      fontWeight={index === clickedIndex ? "600" : "400"}
                    >
                      {mainNavItem.title.toUpperCase()}
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
        <Center margin={{ base: "0.7em", sm: "0.7em", md: "0.2em" }}>
          <HeaderSubNav link={link} subLink={subLink} />
        </Center>
      </GridItem>
    </Grid>
  );
}

export default HeaderMainNav;
