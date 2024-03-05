// React components
import * as React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, Spacer } from "@chakra-ui/react";

// Chakra-UI components
import {
  Text,
  Flex,
  Box,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Show,
  Hide,
} from "@chakra-ui/react";

// Chakra-UI icons
import { HamburgerIcon } from "@chakra-ui/icons";

function HeaderProfileMenu({user}) {
  return (
    <Flex>
      <HStack w={{base: "3em", sm: "5em", md: "10em"}}>
        <Spacer/>
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="teal"
            size="sm"
          >
            <Hide breakpoint="(max-width: 980px)">
              <Text
                fontWeight="600"
                color="white"
                fontSize={{ base: "sm", sm: "sm", md: "md" }}
              >
                {user[0].first_name}
              </Text>
            </Hide>
            <Show breakpoint="(max-width: 980px)">
              <Box>
                <HamburgerIcon boxSize={6} color="white" />
              </Box>
            </Show>

          </MenuButton>
          <MenuList>
            <MenuItem zIndex="50" as="a" href="#">
              Profile
            </MenuItem>
            <MenuItem as="a" href="#">
              About
            </MenuItem>
            <MenuItem as="a" href="#">
              Log Out
            </MenuItem>
          </MenuList>
        </Menu>

      </HStack>
    </Flex>
  );
}

export default HeaderProfileMenu;
