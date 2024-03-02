// React components
import * as React from "react";

// Chakra-UI components
import {
  Box,
  Text,
  Flex,
  Spacer,
  Card,
  CardBody,
  CardHeader,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

function AssetsStatusCard({ AssetsStatusCardData }) {
  return (
    <Card variant="outline" bg="#fdfdfd" borderRadius={{ md: "0.6em 0.6em 0.6em 0.6em" }}>
      <CardHeader marginTop="-0.6em">
        <Text fontSize="md" color="gray.800"> {AssetsStatusCardData.title} </Text>
      </CardHeader>
      <CardBody>
        <Flex>
          <Box marginTop="-0.8em">
            <Text fontSize="2xl" color="gray.800">{AssetsStatusCardData.total}</Text>
          </Box>
          <Spacer />
          <Box marginTop="-2.2em">
            <CircularProgress
              value={AssetsStatusCardData.percent}
              color="teal"
              size="65px"
              thickness="9px"
            >
              <CircularProgressLabel>
                {AssetsStatusCardData.percent}%
              </CircularProgressLabel>
            </CircularProgress>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default AssetsStatusCard;