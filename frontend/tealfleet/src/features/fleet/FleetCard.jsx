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
  Stack,
  VStack,
  HStack,
  Image,
  Spacer,
  IconButton,
} from "@chakra-ui/react";

import { EmailIcon, InfoOutlineIcon } from "@chakra-ui/icons";

function FleetCard({ fleetCardItems }) {
  return (
    <Card overflow="hidden" height={"20em"} variant="outline" bg="#fdfdfd">
      <CardHeader marginTop={"0em"} marginBottom={"0em"}>
        <VStack>
          <Box
            marginTop={"-0.8em"}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <Text
              textAlign="center"
              fontWeight="400"
              color="gray.600"
              fontSize="sm"
            >
              {fleetCardItems.tenant_name.length > 20
                ? `${fleetCardItems.tenant_name.slice(0, 20)}...`
                : fleetCardItems.tenant_name}
            </Text>
          </Box>
          <Box marginTop={"-0.5em"}>
            <Text
              textAlign="center"
              fontWeight="500"
              color="gray.600"
              fontSize="sm"
            >
              {" "}
              {fleetCardItems.software_asset_name &&
                fleetCardItems.software_asset_name}
              {!fleetCardItems.software_asset_name &&
                fleetCardItems.hardware_asset_name}
            </Text>
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
            maxH={"110px"}
            src={
              fleetCardItems.hardware_image
                ? fleetCardItems.hardware_image
                : fleetCardItems.software_image
            }
          />
          <Spacer />
        </Flex>
      </CardBody>

      <CardBody flex="1" style={{ overflow: "hidden" }}>
        <Stack direction="row">
          <Text color="gray.600" fontSize="sm" textAlign="left">
            {fleetCardItems.vendor_name ? fleetCardItems.vendor_name + " " : ""}
          </Text>
          <Spacer />
          <Text color="gray.600" fontSize="sm" textAlign="right">
            {fleetCardItems.hardware_model_name
              ? fleetCardItems.hardware_part_number + " "
              : ""}
            {fleetCardItems.software_model_name
              ? fleetCardItems.software_model_name + " "
              : ""}
          </Text>
        </Stack>
        <Divider marginTop="0.2em" marginBottom="0.2em"/>
        <Flex justifyContent="space-between">
          <Text color="gray.600" fontSize="sm" textAlign="left">
            {fleetCardItems.software_version_number ? "Version:" : "Serial:"}
          </Text>
          <Text color="gray.600" fontSize="sm" textAlign="right">
            {fleetCardItems.software_version_number ||
              fleetCardItems.hardware_serial_no}
          </Text>
        </Flex>
        <Divider marginTop="0.2em" marginBottom="0.2em"/>
      </CardBody>
      <CardFooter>
        <HStack spacing="0.5em">
          <IconButton
            variant={'outline'}
            colorScheme="teal"
            size="xs"
            aria-label="Open Ticket"
            icon={<EmailIcon />}
          />
          <IconButton colorScheme="teal" size="xs" variant={'outline'} icon={<InfoOutlineIcon />}>
            Details
          </IconButton>
        </HStack>
      </CardFooter>
    </Card>
  );
}

export default FleetCard;
