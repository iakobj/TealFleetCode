// React components
import * as React from "react";

// Chakra-UI components
import {
  Box,
} from "@chakra-ui/react";

// Navigation bar components
import HeaderMainNav from "./HeaderMainNav";
import LogedInChecker from "../../components/LogedInChecker";

function Header() {
  return (
    <Box>
      <LogedInChecker/>
      <HeaderMainNav/>
    </Box>
  );
}

export default Header;
