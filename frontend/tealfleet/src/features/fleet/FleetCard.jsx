import * as React from "react";

// Chakra-UI components
import {
  Text,
  Flex,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Divider,
  Button,
  Center,
  VStack,
  HStack,
  Image,
  Spacer,
  IconButton,
} from "@chakra-ui/react";

import { EmailIcon, InfoOutlineIcon } from "@chakra-ui/icons";

function FleetCard() {
  return (
    <Card boxShadow="md" overflow="hidden" height={"25em"} variant="outline">
      <CardHeader>
        <VStack>
          <Box marginTop={"-0.6em"}>
            <Center>
              <Heading size="md">UCSC-220-M5S</Heading>
            </Center>
          </Box>
          <Box marginTop={"-0.5em"}>
            <Center>
              <Text fontSize="lg">superbigcorpesxi01.acme.com</Text>
            </Center>
          </Box>
        </VStack>
      </CardHeader>

      <CardBody
        bg="#F4F7F4"
        flex="1"
        style={{ overflow: "hidden" }}
        marginTop={"-1.0em"}
        marginBottom={"-1.0em"}
      >
        <Flex align="center" justify="center" height="100%">
          <Spacer />
          <Image
            maxH={"140px"}
            //src={"/public/images/vendors/cisco/cisco-ucs-5108-ac2.png"}
            src={"/public/images/vendors/cisco/cisco-c220-m6-sff.png"}
            alt={"UCSC-220-M5S"}
          />
          <Spacer />
        </Flex>
      </CardBody>

      <CardBody flex="1" style={{ overflow: "hidden" }}>
        <VStack height="50%">
          <Box>
            <Center>
              <Text size="md">ACME Big Corporation</Text>
            </Center>
          </Box>
        </VStack>
        <Box>
          <Text fontSize="md">VMware vSphere ESXi 7.0 U3f</Text>
          <Text fontSize="md">Cisco IMC 4.2(2c)</Text>
        </Box>
      </CardBody>
      <Divider orientation="horizontal" />
      <CardFooter>
        <HStack>
          <IconButton
            colorScheme="teal"
            size="sm"
            aria-label="Search database"
            icon={<EmailIcon />}
          />

          <Button colorScheme="teal" size="sm" leftIcon={<InfoOutlineIcon />}>
            Details
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
}

export default FleetCard;
