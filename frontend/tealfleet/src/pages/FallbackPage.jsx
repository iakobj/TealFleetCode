// React components
import * as React from "react";

// Chakra-UI components
import {
  Text,
  VStack,
  Box,
  Flex,
  Spacer,
  CircularProgress,
} from "@chakra-ui/react";

function FallbackPage() {
  return (
    <Flex>
      <Spacer />
      <VStack>
        <Box>
      <CircularProgress
        marginTop="3em"
        isIndeterminate
        color="teal"
        size="100px"
        thickness="15px"
      />
      </Box>
      <Box marginTop="1em">
        <Text>Loading</Text>
      </Box>
      </VStack>
      <Spacer />
    </Flex>
  );
}

export default FallbackPage;
