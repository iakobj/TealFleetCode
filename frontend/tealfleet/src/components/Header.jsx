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
        height={{base: '5em', sm: '6em', md: '7em'}}
        gridTemplateColumns= 'repeat(12, 1fr)'
        gridTemplateRows='repeat(2, 1fr)'>  

            <GridItem
                colSpan={{base: 12, sm: 12, md: 12}}
                colStart={{base: 1, sm: 1, md: 1}}
                rowSpan={{base: 1, sm: 1, md: 1}}
                rowStart={{base: 1, sm: 1, md: 1}}
                bg='#008080'
                boxShadow='md'
                marginTop={{md: '0.8em'}}
                borderRadius={{md: '0.5em 0.5em 0em 0em'}}>

                    <Text align={'center'}>
                        Main navbar 
                    </Text>
            </GridItem>

            <GridItem
                colSpan={{base: 12, sm: 12, md: 12}}
                colStart={{base: 1, sm: 1, md: 1}}
                rowSpan={{base: 1, sm: 1, md: 1}}
                rowStart={{base: 2, sm: 2, md: 2}}
                bg='#F4F7F4'
                boxShadow='md'
                marginBottom={{md: '0.8em'}}
                borderRadius={{md: '0em 0em 0em 0em'}}>

                    <Text align={'center'}>
                        bottom navbar
                    </Text>
            </GridItem>

        </Grid>
    )
  }

  export default Header;