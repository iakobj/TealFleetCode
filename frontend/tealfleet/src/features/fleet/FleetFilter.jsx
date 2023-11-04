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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Select,
  Hide,
} from "@chakra-ui/react";

import { Search2Icon } from '@chakra-ui/icons'


function FleetCard() {
  return (
    <Hide breakpoint="(max-width: 750px)">
      <Flex marginBottom={"0.8em"}>
        <Box marginRight={"1em"}>
          <Select placeholder="Tenant" size='md'>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Box marginRight={"1em"}>
          <Select placeholder="Model Name" size='md'>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Box marginRight={"1em"}>
          <Select placeholder="Software" size='md'>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Box>
          <Select placeholder="Site" size='md'>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Spacer/>
        <Button leftIcon={<Search2Icon />} size={"md"} colorScheme={"teal"}>Search</Button>
      </Flex>
      </Hide>
  );
}

export default FleetCard;
