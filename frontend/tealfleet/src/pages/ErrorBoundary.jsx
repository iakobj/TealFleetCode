// React components
import * as React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

// Chakra-UI components
import { Center, Stack, Heading, Text, Box, Image } from "@chakra-ui/react";

function ErrorBoundary() {
  return (
    <Stack spacing={6} marginTop={{base: '6em', sm: '6em', md: '6em'}}>
      <Box>
        <Center>
        <Image
          src="/images/ErrorHamster.png"
          alt="TealFleet Logo"
          boxSize={{ base: "4em", sm: "6em", md: "10em" }}
          marginLeft={{ base: "0.35em", sm: "0.35em", md: "0.35em" }}
          objectFit="cover"
        />
        </Center>
      </Box>
      <Center>
        <Heading as='h1' size='4xl'>Oopsie!</Heading>
      </Center>
      <Center>
        <Text fontSize={{base: 'xl', sm: '2xl', md: '4xl'}}>Sorry, an unexpected error has occured.</Text>
      </Center>
      <Center>
        <Text fontSize='xl'>Not Found</Text>
      </Center>  
    </Stack>
  );
}

export default ErrorBoundary;
