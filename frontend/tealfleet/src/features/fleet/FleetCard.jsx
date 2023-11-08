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

function FleetCard({ fleetCardItems }) {
  return (
    <Card boxShadow="md" overflow="hidden" height={"20em"} variant="outline">
      <CardHeader>
        <VStack>
          <Box marginTop={"-0.6em"}>
            <Center>
              <Heading size="sm">
                {fleetCardItems.hw_tenant_name
                  ? fleetCardItems.hw_tenant_name
                  : fleetCardItems.sw_tenant_name}
              </Heading>
            </Center>
          </Box>
          <Box marginTop={"-0.5em"}>
            <Center>
              <Text fontSize="md">
                {" "}
                {fleetCardItems.software_asset_name &&
                  fleetCardItems.software_asset_name}
                {!fleetCardItems.software_asset_name &&
                  fleetCardItems.hardware_asset_name}
              </Text>
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
        height="100%"
      >
        <Flex align="center" justify="center" height="100%">
          <Spacer />
          <Image
            maxH={"100px"}
            src={
              fleetCardItems.hardware_image
                ? fleetCardItems.hardware_image
                : fleetCardItems.software_image
            }
            alt={"UCSC-220-M5S"}
          />
          <Spacer />
        </Flex>
      </CardBody>

      <CardBody flex="1" style={{ overflow: "hidden" }}>
        <VStack height="50%">
          <Box>
            <Center>
              <Text size="md">
                {fleetCardItems.hw_vendor_name
                  ? fleetCardItems.hw_vendor_name + " "
                  : ""}
                {fleetCardItems.sw_vendor_name
                  ? fleetCardItems.sw_vendor_name + " "
                  : ""}
              </Text>
            </Center>
            <Divider orientation="horizontal" />
            <Center>
              <Text size="md">
                {fleetCardItems.hardware_model_name
                  ? fleetCardItems.hardware_model_name + " "
                  : ""}
                {fleetCardItems.software_model_name
                  ? fleetCardItems.software_model_name + " "
                  : ""}
              </Text>
            </Center>
            <Center>
              <Text size="md">{fleetCardItems.software_version_number}</Text>
            </Center>
          </Box>
        </VStack>
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
