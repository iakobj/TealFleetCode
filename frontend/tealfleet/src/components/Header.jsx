// React components
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Chakra-UI components 
import {
    Grid,
    GridItem,
    Text,
    Box,
    Image,
    Flex,
    Spacer,
    Container,
    Tab,
    Tabs,
    TabList
  } from '@chakra-ui/react';

  // Navigation bar components
import HeaderMainNav from './HeaderMainNav';
import HeaderSubNav from './HeaderSubNav';

function Header() {

    return (
        <Grid
        height={{base: '7em', sm: '7em', md: '7em'}}
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
            borderRadius={{md: '1.0em 1.0em 0em 0em'}}>
                <Flex>
                    <Image
                    src='public/images/TealFleet-White.png'
                    alt='TealFleet Logo'
                    boxSize={{base: '2.2em', sm: '2.2em', md: '2.2em'  }}
                    margin={{base: '0.35em', sm: '0.35em', md: '0.35em'}}
                    objectFit='cover'
                    />

                        <Text
                        color='white'
                        fontSize='1.55em'
                        marginTop={{base: '0.15em', sm: '0.15em', md: '0.15em'}}
                        margin={{base: '0.15em', sm: '0.15em', md: '0.15em'}}
                        >
                            TealFleet
                        </Text>
                    <HeaderMainNav/>
                </Flex>

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