// React components
import * as React from "react";
import { useNavigate } from "react-router-dom";

// Chakra-UI components
import {
  Grid,
  GridItem,
  HStack,
  Text,
  Box,
  Image,
  Spacer,
  Button,
} from "@chakra-ui/react";

function Header(action) {
  const navigate = useNavigate();

  const location = action.action;

  let link =
    location.split("/")[0] === ""
      ? location.split("/")[1]
      : location.split("/")[0];

  const redirect = () => {
    if (link == "login") {
      navigate("/register");
    } else if (link == "register") {
      navigate("/login");
    } else {
      navigate("/");
    }
  };

  return (
    <Grid
      height={{ base: "4em", sm: "4em", md: "4em" }}
      gridTemplateColumns="repeat(12, 1fr)"
      gridTemplateRows="repeat(1, 1fr)"
    >
      <GridItem
        colSpan={{ base: 12, sm: 12, md: 10 }}
        colStart={{ base: 1, sm: 1, md: 2 }}
        rowSpan={{ base: 1, sm: 1, md: 1 }}
        rowStart={{ base: 1, sm: 1, md: 1 }}
        bg="teal.600"
        boxShadow="md"
        marginTop={{ md: "0.5em" }}
        borderRadius={{ md: "0.6em 0.6em 0.6em 0.6em" }}
      >
        <HStack>
          <Box
            marginTop={{ base: "0.5em", sm: "0.5em", md: "0.5em" }}
            marginLeft="1em"
          >
            <Image
              src="/images/TealFleet-White.png"
              alt="TealFleet Logo"
              boxSize={{ base: "2.5em", sm: "2.5em", md: "2.3em" }}
              objectFit="cover"
            />
          </Box>
          <Box marginTop="0.5em">
            <Text color="white" fontSize="1.5em">
              Tealfleet
            </Text>
          </Box>
          <Spacer />
          <Box marginTop="0.65em">
            <Button
              marginRight="1em"
              size="sm"
              variant="solid"
              colorScheme="teal"
              onClick={redirect}
              textTransform="capitalize"
            >
              {link === "login" ? "Register" : "Login"}
            </Button>
          </Box>
        </HStack>
      </GridItem>
    </Grid>
  );
}

export default Header;
