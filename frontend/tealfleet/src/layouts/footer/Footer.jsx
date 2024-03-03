// React components
import * as React from "react";

// Chakra-UI components
import {
  Grid,
  GridItem,
  Text,
  Link,
  Image,
  Spacer,
  Flex,
  Card,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from '@chakra-ui/icons'

function Footer() {
  return (
    <Grid
      height={{ base: "2.0em", sm: "2.0em", md: "2.0em" }}
      gridTemplateColumns="repeat(12, 1fr)"
      gridTemplateRows="repeat(1, 1fr)"
      width="100%"
      position="fixed"
      bottom="5"
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
          <Image
              src="../images/TealFleet-Teal.png"
              alt="TealFleet Logo"
              boxSize={{ base: "1.3em", sm: "1.3em", md: "1.3em" }}
              marginTop={{ base: "0.1em", sm: "0.1em", md: "0.1em" }}
              marginLeft="1em"
              objectFit="cover"
            />
            <Text marginLeft="0.4em">Tealfleet early development version</Text>
            <Spacer/>
            <Link marginRight="1em" href="https://github.com/iakobj/TealFleetCode" isExternal>
              GitHub <ExternalLinkIcon marginBottom="0.3em" />
            </Link>
          </Flex>
        </Card>
      </GridItem>
    </Grid>
  );
}

export default Footer;
