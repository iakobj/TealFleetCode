// React components
import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

// Chakra-UI components 
import {
    Grid,
    GridItem,
    Text,
    Box,
    Image,
    Flex,
    Spacer,
    Center,
    Show, 
    Hide 
  } from '@chakra-ui/react';

  // Navigation bar components
import HeaderMainNav from './HeaderMainNav';
import HeaderSubNav from './HeaderSubNav';
import HeaderProfileMenu from './HeaderProfileMenu';
import HeaderMobileMenu from './HeaderMobileMenu';

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
                    boxSize={{base: '2.5em', sm: '2.5em', md: '2em'  }}
                    margin={{base: '0.65em', sm: '0.65em', md: '0.35em'}}
                    objectFit='cover'
                    />
                    <Hide breakpoint='(max-width: 980px)'>
                        <Text
                        color='white'
                        fontSize='1.5em'
                        margin={{base: '0.15em', sm: '0.15em', md: '0.15em'}}
                        >
                            TealFleet
                        </Text>
                    </Hide>

                    <Show breakpoint='(max-width: 800px)'>
                        <Text
                        color='white'
                        fontSize='1.5em'
                        margin={{base: '0.45em', sm: '0.45em', md: '0.15em'}}
                        >
                            TealFleet
                        </Text>
                    </Show>

                    <Hide breakpoint='(max-width: 800px)'>
                        <Spacer/>
                        <Box margin={{base: '0.5em', sm: '0.5em', md: '0.5em'}}>
                            <HeaderMainNav/>
                        </Box>
                    </Hide>
                    
                    <Spacer/>

                    <Hide breakpoint='(max-width: 800px)'>
                        <Box margin={{base: '0.7em', sm: '0.7em', md: '0.5em'}}>
                            <HeaderProfileMenu/>
                        </Box>
                    </Hide>

                    <Show breakpoint='(max-width: 800px)'>
                        <Box margin={{base: '0.7em', sm: '0.7em', md: '0.5em'}}>
                            <HeaderMobileMenu/>
                        </Box>
                    </Show>
                </Flex>
            </GridItem>

            <Hide breakpoint='(max-width: 800px)'>
                <GridItem
                colSpan={{base: 12, sm: 12, md: 12}}
                colStart={{base: 1, sm: 1, md: 1}}
                rowSpan={{base: 1, sm: 1, md: 1}}
                rowStart={{base: 2, sm: 2, md: 2}}
                bg='#F4F7F4'
                boxShadow='md'
                marginBottom={{md: '1.1em'}}
                borderRadius={{md: '0em 0em 0em 0em'}}>

                    <Center margin={{base: '0.2em', sm: '0.2em', md: '0.2em'}}>
                        <HeaderSubNav/>
                    </Center>

                </GridItem>
            </Hide>
        </Grid>

    )
  }

  export default Header;