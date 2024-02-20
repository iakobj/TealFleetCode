// React components
import * as React from "react";

// Chakra-UI components
import {
  Box,
  Text,
  Flex,
  Spacer,
  HStack,
  Card,
  CardBody,
  CardHeader,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

import { InfoOutlineIcon } from "@chakra-ui/icons";

function AssetsStatusCard({ assetsStatusCardData }) {
  return (
    <Card variant="outline" bg="#fdfdfd" borderRadius="0.6em 0.6em 0.6em 0.6em">
      <CardHeader marginTop="-0.6em">
        <HStack>
        <Text fontSize={{ md: "xs", xl: "sm" }} as="b" textTransform="uppercase" color="gray.600"> {assetsStatusCardData.title} </Text>
        <InfoOutlineIcon boxSize="3.5" color="gray.400"/>
        </HStack>
      </CardHeader>
      <CardBody>
        <Flex>
          <Box marginTop="-0.8em">
            <Text fontSize="2xl" as="b" color="gray.600">{assetsStatusCardData.total}</Text>
          </Box>
          <Spacer />
          <Box marginTop="-1.8em">
            <CircularProgress
              value={assetsStatusCardData.percent}
              color="teal"
              size="65px"
              thickness="9px"
            >
              <CircularProgressLabel>
                {assetsStatusCardData.percent}%
              </CircularProgressLabel>
            </CircularProgress>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default AssetsStatusCard;
