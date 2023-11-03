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
  Stack,
  Heading,
  Divider,
  Button,
  ButtonGroup,
  SimpleGrid,
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
    <Card boxShadow="md" overflow="hidden" height={"35em"} variant="outline">
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
          <Box marginBottom={"-1.0em"}>
            <Center>
              <Text fontSize="sm">Serial No. 1234567890</Text>
            </Center>
          </Box>
        </VStack>
      </CardHeader>

      <CardBody bg="#F4F7F4" height={"11.0em"}>
        <Flex align="center" justify="center" height="100%">
          <Spacer />
          <Image
            maxW={"20em"}
            minW={"12em"}
            //src={"/public/images/vendors/cisco/cisco-ucs-5108-ac2.png"}
            src={"/public/images/vendors/cisco/cisco-c220-m6-sff.png"}
            alt={"UCSC-220-M5S"}
          />
          <Spacer />
        </Flex>
      </CardBody>

      <CardBody>
        <VStack>
          <Box marginTop={"-1.0em"}>
            <Center>
              <Text size="md">ACME Corporation</Text>
            </Center>
          </Box>
        </VStack>
        <Box marginTop={"0.8em"}>
          <Text fontSize="md">VMware vSphere ESXi 7.0 U3f</Text>
          <Text fontSize="md">Cisco IMC 4.2(2c)</Text>
        </Box>

        <Box marginTop={"1.0em"}>
          <Divider orientation="horizontal" />
          <Center>
            <Text fontSize="md">Support information</Text>
          </Center>
        </Box>

        <Box>
          <HStack>
            <Text fontSize="sm">MSP</Text>
            <Spacer />
            <Text fontSize="sm">1.11.2020</Text>
            <Text fontSize="sm">Until</Text>
            <Text fontSize="sm">29.6.2023</Text>
          </HStack>
        </Box>

        <Box>
          <HStack>
            <Text fontSize="sm">GoodITGuys</Text>
            <Spacer />
            <Text fontSize="sm">1.3.2020</Text>
            <Text fontSize="sm">Until</Text>
            <Text fontSize="sm">29.6.2023</Text>
          </HStack>
        </Box>

        <Box>
          <HStack>
            <Text fontSize="sm">VMware</Text>
            <Spacer />
            <Text fontSize="sm">1.3.2020</Text>
            <Text fontSize="sm">Until</Text>
            <Text fontSize="sm">29.6.2023</Text>
          </HStack>
        </Box>

        <Divider orientation="horizontal" marginTop={"0.2em"} />

        <Box marginTop={"0.5em"}>
          <HStack>
            <IconButton
              colorScheme="teal"
              size="sm"
              aria-label="Search database"
              icon={<EmailIcon />}
            />
            
            <Button colorScheme="teal" size="sm" leftIcon={<InfoOutlineIcon/>}>
              Details
            </Button>
          </HStack>
        </Box>
      </CardBody>
    </Card>
  );
}

export default FleetCard;
