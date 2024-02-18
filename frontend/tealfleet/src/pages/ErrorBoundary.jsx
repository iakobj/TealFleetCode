// React components
import * as React from "react";

// Chakra-UI components
import {
  Center,
  Stack,
  Heading,
  Text,
  Box,
  Image,
  Grid,
  Container,
  GridItem,
} from "@chakra-ui/react";

function ErrorBoundary() {
  return (
    <Container maxWidth={"1600px"}>
      <Grid
        marginLeft={{ base: "-16px", sm: "-16px", md: "0px" }}
        marginRight={{ base: "-16px", sm: "-16px", md: "0px" }}
        templateColumns="repeat(12, 1fr)"
      >
        <GridItem
          marginBottom={"1em"}
          colSpan={{ base: 12, sm: 12, md: 12 }}
          colStart={{ base: 1, sm: 1, md: 1 }}
        >
          <Stack spacing={6} marginTop={{ base: "3em", sm: "3em", md: "4em" }}>
            <Box>
              <Center>
                <Image
                  src="/images/TealFleet-Teal.png"
                  alt="Error Hamster"
                  boxSize={{ base: "4em", sm: "6em", md: "8em" }}
                  objectFit="cover"
                />
              </Center>
            </Box>
            <Center>
              <Heading as="h1" size="2xl" color="gray.600">
                Oopsie!
              </Heading>
            </Center>
            <Center>
              <Text fontSize={{ base: "md", sm: "xl", md: "2xl" }} color="gray.600">
                Sorry, an unexpected error has occured.
              </Text>
            </Center>
            <Center>
              <Text fontSize="xl" color="gray.600">Not Found</Text>
            </Center>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default ErrorBoundary;
