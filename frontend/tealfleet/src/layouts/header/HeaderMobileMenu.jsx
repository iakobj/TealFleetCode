// React components
import * as React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
// Chakra-UI components
import {
  Text,
  Box,
  HStack,
  VStack,
  Button,
  IconButton,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

// Chakra-UI icons
import { HamburgerIcon } from "@chakra-ui/icons";

let mainNavItems = {
  NavItems: {
    main_nav_item_1: {
      nav_item_id: 1,
      nav_item: "DASHBOARD",
    },
    main_nav_item_2: {
      nav_item_id: 2,
      nav_item: "FLEET",
    },
    main_nav_item_3: {
      nav_item_id: 3,
      nav_item: "MARKETPLACE",
    },
    main_nav_item_4: {
      nav_item_id: 4,
      nav_item: "SUPPORT",
    },
    main_nav_item_5: {
      nav_item_id: 5,
      nav_item: "ADMINISTRATION",
    },
  },
};

let subNavItems = {
  NavItems: {
    main_nav_item_1: {
      nav_item_id: 1,
      nav_item: "All",
    },
    main_nav_item_2: {
      nav_item_id: 2,
      nav_item: "PaloAlto",
    },
    main_nav_item_3: {
      nav_item_id: 3,
      nav_item: "Cisco",
    },
    main_nav_item_4: {
      nav_item_id: 4,
      nav_item: "Dell",
    },
    main_nav_item_5: {
      nav_item_id: 5,
      nav_item: "PureStorage",
    },
  },
};

const mNavItems = mainNavItems.NavItems;
const sNavItems = subNavItems.NavItems;

function HeaderMobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box>
      <HStack>
        <IconButton
          aria-label="Main menu"
          icon={<HamburgerIcon boxSize={{ base: 6, sm: 6, md: 6 }} />}
          ref={btnRef}
          colorScheme="teal"
          size={{ base: "md", sm: "md", md: "sm", lg: "md" }}
          onClick={onOpen}
        ></IconButton>
      </HStack>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Box>
              <VStack spacing="0.3em" align="left">
                {Object.keys(mNavItems).map((key) => (
                  <Text
                    as="b"
                    color="black"
                    fontSize={{ base: "md", sm: "md", md: "md" }}
                    key={mNavItems[key].nav_item_id}
                  >
                    {mNavItems[key].nav_item}
                  </Text>
                ))}
              </VStack>
            </Box>
            <Divider margin={"1em 0em 1em 0em"} />
            <Box>
              <VStack spacing="0.3em" align="left">
                {Object.keys(sNavItems).map((key) => (
                  <Text
                    color="black"
                    fontSize={{ base: "md", sm: "md", md: "md" }}
                    key={sNavItems[key].nav_item_id}
                  >
                    {sNavItems[key].nav_item}
                  </Text>
                ))}
              </VStack>
            </Box>
            <Divider margin={"1em 0em 1em 0em"} />
            <Box>
              <VStack spacing="0.3em" align="left">
                <ChakraLink as={ReactRouterLink} to="/Profile">
                  Profile
                </ChakraLink>
                <ChakraLink as={ReactRouterLink} to="/About">
                  About
                </ChakraLink>
                <ChakraLink as={ReactRouterLink} to="/LogOut">
                  Log Out
                </ChakraLink>
              </VStack>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Text>TealFleet v0.1.0</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default HeaderMobileMenu;
