// React components
import * as React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

// Chakra-UI components
import { Box, Text } from "@chakra-ui/react";

function ErrorBoundary() {
  return (
    <Box>
      <Text as="b" align={"center"} marginTop={"60px"}>
        Something went wrong...
      </Text>
    </Box>
  );
}

export default ErrorBoundary;
