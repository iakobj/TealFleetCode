// React components
import * as React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Button, Link as ChakraLink } from "@chakra-ui/react";

// Chakra-UI components
import { Text, Box } from "@chakra-ui/react";

// Chakra-UI icons
import { BellIcon } from "@chakra-ui/icons";

function HeaderAlertsBell() {
  return (
    <Button
      colorScheme="white"
      size={{ base: "md", sm: "md", md: "sm", lg: "sm" }}
    >
      <BellIcon boxSize={6} color="white" />

      <Text fontSize={{ base: "md", sm: "md", md: "md" }} color="white">
        21
      </Text>
    </Button>
  );
}

export default HeaderAlertsBell;
