// React components
import * as React from "react";

// Chakra-UI components
import { Text, Box, HStack, Image, Hide } from "@chakra-ui/react";

function HeaderLogo() {
  return (
    <HStack w={{base: "3em", sm: "5em", md: "10em"}}>
      <Hide breakpoint="(max-width: 600px)">
        <Box>
          <Image
            src="/images/TealFleet-White.png"
            alt="TealFleet Logo"
            boxSize={{ base: "2.3em", sm: "2.3em", md: "2.1em" }}
            marginLeft={{ base: "0.35em", sm: "0.35em", md: "0.35em" }}
            objectFit="cover"
          />
        </Box>
      </Hide>

      <Hide breakpoint="(max-width: 1060px)">
        <Box>
          <Text
            color="white"
            fontSize="1.3em"
          >
            <b>Teal</b>fleet
          </Text>
        </Box>
      </Hide>
    </HStack>
  );
}

export default HeaderLogo;