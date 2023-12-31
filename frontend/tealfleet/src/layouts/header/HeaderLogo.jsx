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
            boxSize={{ base: "2.5em", sm: "2.5em", md: "2.3em" }}
            marginLeft={{ base: "0.35em", sm: "0.35em", md: "0.35em" }}
            objectFit="cover"
          />
        </Box>
      </Hide>

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
    </HStack>
  );
}

export default HeaderLogo;
