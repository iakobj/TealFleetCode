// React components
import * as React from 'react';

// Chakra-UI components 
import {
    Flex,
    Text

  } from '@chakra-ui/react';

let mainNavItems = {
    NavItems: {
        main_nav_item_1: {
            nav_item_id: 1,
            nav_item: 'DASHBOARD'
        },
        main_nav_item_2: {
            nav_item_id: 2,
            nav_item: 'FLEET'
        },
        main_nav_item_3: {
            nav_item_id: 3,
            nav_item: 'MARKETPLACE'
        },
        main_nav_item_4: {
            nav_item_id: 4,
            nav_item: 'SUPPORT'
        },
        main_nav_item_5: {
            nav_item_id: 5,
            nav_item: 'ADMINISTRATION'
        }
    }
};

const navItems = mainNavItems.NavItems;


  function HeaderMainNav() {

    return (
        <Flex>
            {Object.keys(navItems).map(key => (
                <Text key={navItems[key].nav_item_id}
                color='white'>
                    {navItems[key].nav_item}
                </Text>
            ))}
        </Flex>
    )
  }

  export default HeaderMainNav;