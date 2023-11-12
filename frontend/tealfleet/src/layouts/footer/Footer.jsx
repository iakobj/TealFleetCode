// React components
import * as React from "react";

// Chakra-UI components
import {
  Grid,
  GridItem,
  HStack,
  Text,
  Box,
  Image,
  Spacer,
  Center,
  Show,
  Hide,
  Flex,
  Heading,
} from "@chakra-ui/react";

function Footer() {
  return (
    <Grid
      height={{ base: "2.5em", sm: "2.5em", md: "2.5em" }}
      gridTemplateColumns="repeat(12, 1fr)"
      gridTemplateRows="repeat(1, 1fr)"
      position="fixed" // Set the position to "fixed"
      bottom="0" // Place it at the bottom of the page
      width="100%"
    >
      <GridItem
        colSpan={{ base: 12, sm: 12, md: 12 }}
        colStart={{ base: 1, sm: 1, md: 1 }}
        rowSpan={{ base: 1, sm: 1, md: 1 }}
        rowStart={{ base: 1, sm: 1, md: 1 }}
        bg="#F4F7F4"
        marginLeft="-1.0em"
      >
        <Flex marginLeft="1.0em">
          <Image
            src="/images/TealFleet-Teal.png"
            alt="TealFleet Logo"
            boxSize={{ base: "1.8em", sm: "1.8em", md: "1.8em" }}
            margin={{ base: "0.4em", sm: "0.4em", md: "0.4em" }}
          />

          <Heading
            fontSize={"lg"}
            marginRight={"2em"}
            marginTop={"0.5em"}
            color="gray.500"
          >
            TealFleet
          </Heading>
          <Text
            marginTop={"0.35em"}
            fontSize={"lg"}
            color="gray.500"
          >
            Version 0.0.1
          </Text>
          <Spacer />
          <Text
            marginRight="2.0em"
            marginTop={"0.35em"}
            fontSize={"lg"}
            color="gray.500"
          >
            In development since August 2023
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default Footer;
