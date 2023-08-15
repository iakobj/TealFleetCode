// React components
import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

// Chakra-UI components 
import {
    Flex,
    Text,
    HStack
  } from '@chakra-ui/react';

  let mainNavItems = {
    NavItems: {
        main_nav_item_1: {
            nav_item_id: 1,
            nav_item: 'All'
        },
        main_nav_item_2: {
            nav_item_id: 2,
            nav_item: 'PaloAlto'
        },
        main_nav_item_3: {
            nav_item_id: 3,
            nav_item: 'Cisco'
        },
        main_nav_item_4: {
            nav_item_id: 4,
            nav_item: 'Dell'
        },
        main_nav_item_5: {
            nav_item_id: 5,
            nav_item: 'PureStorage'
        }
    }
};

const navItems = mainNavItems.NavItems;
  
  function HeaderSubNav() {

    return (
        <Flex>
            <HStack spacing='0.8em'> 
            {Object.keys(navItems).map(key => (
                <Text
                color='blackAlpha.700'
                fontSize={{base: 'sm', sm:'sm', md: 'lg'}}
                key={navItems[key].nav_item_id}>
                    {navItems[key].nav_item}
                </Text>
            ))}
            </HStack>
        </Flex>
    )
  }

  export default HeaderSubNav;