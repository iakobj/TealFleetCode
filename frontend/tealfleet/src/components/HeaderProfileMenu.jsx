// React components
import * as React from 'react';

// Chakra-UI components 
import {
    Text,
    Flex,
    Icon,
    Box,
    HStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    
  } from '@chakra-ui/react';
  
  // Chakra-UI icons 
  import { BellIcon } from '@chakra-ui/icons'

  function HeaderProfileMenu() {

    return (
        <Flex>
            <HStack>
                <Box>
                    <BellIcon 
                    boxSize={6}
                    color='white'/>
                </Box>
                <Box marginRight='1em'>
                    <Text
                    as='b' 
                    color='white'>
                        12
                    </Text>
                </Box>

                <Menu>
                    <MenuButton>
                        <Text
                        as='b'
                        color='white'
                        fontSize={{base: 'sm', sm:'sm', md: 'lg'}}>
                            Jakob Jozelj
                        </Text>
                    </MenuButton>
                    <MenuList>
                            <MenuItem as='a' href='#'>Profile</MenuItem>
                            <MenuItem as='a' href='#'>About</MenuItem>
                            <MenuItem as='a' href='#'>Log Out</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Flex>
    )
  }

  export default HeaderProfileMenu;