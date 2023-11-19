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
  Hide,
  Flex,
} from "@chakra-ui/react";

// Navigation bar components
import HeaderMainNav from "./HeaderMainNav";

function Header() {
  return (
    <Box>
      <HeaderMainNav />
    </Box>
  );
}

export default Header;
