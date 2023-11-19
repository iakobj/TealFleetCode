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
      height={{ base: "2.0em", sm: "2.0em", md: "2.0em" }}
      gridTemplateColumns="repeat(12, 1fr)"
      gridTemplateRows="repeat(1, 1fr)"
    >
      <GridItem
        colSpan={{ base: 12, sm: 12, md: 12 }}
        colStart={{ base: 1, sm: 1, md: 1 }}
        rowSpan={{ base: 1, sm: 1, md: 1 }}
        rowStart={{ base: 1, sm: 1, md: 1 }}
      >
        <Flex>

        </Flex>
      </GridItem>
    </Grid>
  );
}

export default Footer;
