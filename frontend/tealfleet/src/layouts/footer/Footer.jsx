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
  Card,
} from "@chakra-ui/react";

function Footer() {
  return (
    <Grid
      height={{ base: "2.0em", sm: "2.0em", md: "2.0em" }}
      gridTemplateColumns="repeat(12, 1fr)"
      gridTemplateRows="repeat(1, 1fr)"
      width="100%"
      position="fixed"
      bottom="8"
    >
      <GridItem
        colSpan={{ base: 12, sm: 12, md: 10 }}
        colStart={{ base: 1, sm: 1, md: 2 }}
        rowSpan={{ base: 1, sm: 1, md: 1 }}
        rowStart={{ base: 1, sm: 1, md: 1 }}
      >
        <Card
          marginBottom="3em"
          paddingTop="0.6em"
          paddingBottom="0.6em"
          variant="outline"
          bg="#fdfdfd"
          borderRadius={"0.6em 0.6em 0.0em 0.0em"}
        >
          <Flex justifyContent="center">
            <Text marginLeft="1em">Tealfleet early development version</Text>
            <Spacer/>
            <Text marginRight="1em">Build: 0.0.1</Text>
          </Flex>
        </Card>
      </GridItem>
    </Grid>
  );
}

export default Footer;
