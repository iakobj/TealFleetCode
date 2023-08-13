// React components
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Chakra-UI components 
import {
    Grid,
    GridItem,
    Text,
    Image,
    Flex,
    Spacer,
    Container,
    Tab,
    Tabs,
    TabList
  } from '@chakra-ui/react';

  function Header() {

    return (
        <Grid
        
        height={{base: '13em', sm: '13em', md: '13em'}}
        gridTemplateColumns= 'repeat(12, 1fr)'
        gridTemplateRows='repeat(2, 1fr)'>  
            <GridItem
                colSpan={{base: 12, sm: 12, md: 12}}
                colStart={{base: 1, sm: 1, md: 1}}
                rowSpan={{base: 12, sm: 12, md: 12}}
                rowStart={{base: 1, sm: 1, md: 1}}
                bg='#2978A0'
                boxShadow='lg'
                marginTop={{md: '0.8em'}}
                marginLeft={{md: '0.8em'}}
                marginRight={{md: '0.8em'}}
                borderRadius={{md: '0.5em 0.5em 0.5em 0.5em'}}>
            </GridItem>

        </Grid>
    )
  }

  export default Header;