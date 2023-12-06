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

function Header() {
  const navigate = useNavigate();

  const register = () => {
    navigate("/register");
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
          <Box>
            <Image
              src="/images/TealFleet-White.png"
              alt="TealFleet Logo"
              boxSize={{ base: "2.5em", sm: "2.5em", md: "2.3em" }}
              margin={{ base: "0.5em", sm: "0.5em", md: "0.5em" }}
              objectFit="cover"
            />
          </Box>
          <Box>
            <Text
              color="white"
              fontSize="1.5em"
              marginLeft={{ base: "0.15em", sm: "0.15em", md: "0.15em" }}
            >
              TealFleet
            </Text>
          </Box>
          <Spacer />
          <Box>
            <Button
              marginRight="1em"
              size="sm"
              variant="solid"
              colorScheme="gray"
              onClick={register}
            >
              Register
            </Button>
          </Box>
        </HStack>
      </GridItem>
    </Grid>
  );
}

export default Header;
