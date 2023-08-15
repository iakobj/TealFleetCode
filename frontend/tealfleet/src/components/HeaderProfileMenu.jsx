// React components
import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

// Chakra-UI components 
import {
    Text,
    Flex,
    Box,
    HStack,
    Button,
    Menu,
    IconButton,
    MenuButton,
    MenuList,
    MenuItem,
    Show,
    Hide 
  } from '@chakra-ui/react';
  
  // Chakra-UI icons 
  import { BellIcon, HamburgerIcon } from '@chakra-ui/icons'

  function HeaderProfileMenu() {

    return (
        <Flex>
            <HStack>
                <Box>
                <HStack>
                    <Button
                    colorScheme='teal'
                    size='sm'>
                        <BellIcon 
                        boxSize={6}
                        color='white'/>

                        <Text
                        fontSize={{base: 'md', sm:'md', md: 'lg'}}
                        color='white'>
                            12
                        </Text>
                    </Button>
                </HStack>
                </Box>

                <Menu>
                    <MenuButton 
                    as={Button} 
                    colorScheme='teal'
                    size='sm'>

                    <Hide breakpoint='(max-width: 980px)'>
                        <Text
                        as='b'
                        color='white'
                        fontSize={{base: 'sm', sm:'sm', md: 'lg'}}>
                            Jakob Jozelj
                        </Text>
                    </Hide>
                    <Show breakpoint='(max-width: 980px)'>
                        <Box>
                            <HamburgerIcon 
                            boxSize={6}
                            color='white'/>
                        </Box>
                    </Show>
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