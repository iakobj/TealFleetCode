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
} from "@chakra-ui/react";

import stickyHeader from './stickyHeader.css';

// Navigation bar components
import HeaderMainNav from "./HeaderMainNav";
import HeaderSubNav from "./HeaderSubNav";
import HeaderProfileMenu from "./HeaderProfileMenu";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderAlertsBell from "./HeaderAlertsBell";

function Header() {
  return (
    <div className={stickyHeader.stickyHeader}>
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
        bg="teal.600"
        boxShadow="md"
        marginTop={{ md: "0.5em" }}
        borderRadius={{ md: "1.0em 1.0em 0em 0em" }}
      >
        <HStack>
          <Box>
            <Image
              src="/images/TealFleet-White.png"
              alt="TealFleet Logo"
              boxSize={{ base: "2.5em", sm: "2.5em", md: "2.3em" }}
              marginLeft={{ base: "0.35em", sm: "0.35em", md: "0.35em" }}
              objectFit="cover"
            />
          </Box>

          <Hide breakpoint="(max-width: 1060px)">
            <Box>
              <Text
                color="white"
                fontSize="1.5em"
                marginLeft={{ base: "0.15em", sm: "0.15em", md: "0.15em" }}
              >
                TealFleet
              </Text>
            </Box>
          </Hide>

          <Show breakpoint="(max-width: 870px)">
            <Box>
              <Text color="white" fontSize="1.5em">
                TealFleet
              </Text>
            </Box>
          </Show>

          <Spacer />

          <Hide breakpoint="(max-width: 870px)">
            <Box margin={{ base: "0.6em", sm: "0.6em", md: "0.6em" }}>
              <HeaderMainNav />
            </Box>
          </Hide>

          <Spacer />

          <Box margin={{ base: "0.7em", sm: "0.7em", md: "0.5em" }}>
            <HeaderAlertsBell />
          </Box>

          <Hide breakpoint="(max-width: 870px)">
            <Box margin={{ base: "0.7em", sm: "0.7em", md: "0.5em" }}>
              <HeaderProfileMenu />
            </Box>
          </Hide>

          <Show breakpoint="(max-width: 870px)">
            <Box margin={{ base: "0.7em", sm: "0.7em", md: "0.5em" }}>
              <HeaderMobileMenu />
            </Box>
          </Show>
        </HStack>
      </GridItem>

      <Hide breakpoint="(max-width: 870px)">
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
          <Center margin={{ base: "0.2em", sm: "0.2em", md: "0.2em" }}>
            <HeaderSubNav />
          </Center>
        </GridItem>
      </Hide>
    </Grid>
    </div>
  );
}

export default Header;
