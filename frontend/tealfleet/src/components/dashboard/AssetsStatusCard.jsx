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
  Heading,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

function AssetsStatusCard({ AssetsStatusCardData }) {
  return (
    <Card boxShadow="md">
      <CardHeader
        borderRadius={{ md: "0.6em 0.6em 0em 0em" }}
        paddingTop="0.3em"
        paddingBottom="0.3em"
        bg="gray.50"
      >
        <Text size="md"> {AssetsStatusCardData.title} </Text>
      </CardHeader>
      <CardBody>
        <Flex>
          <Box>
            <Heading size="xl">{AssetsStatusCardData.percent}</Heading>
          </Box>
          <Spacer />
          <Box marginTop="-0.6em">
            <CircularProgress
              value={AssetsStatusCardData.percent}
              color="teal"
              size="80px"
              thickness="10px"
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
