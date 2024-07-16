// React components
import * as React from "react";

// Chakra-UI components
import {
  Box,
  Flex,
  Card,
  CircularProgress,
  CircularProgressLabel,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

function AssetsStatusCard({ AssetsStatusCardData }) {
  return (
    <Card variant="outline" bg="#fdfdfd" borderRadius={{ md: "0.6em 0.6em 0.6em 0.6em" }}>

        <Flex margin="0.5em" >
            <Stat>
            <StatLabel>{AssetsStatusCardData.title}</StatLabel>
            <StatNumber>{AssetsStatusCardData.total}</StatNumber>
            <StatHelpText>{AssetsStatusCardData.StatHelpText}</StatHelpText>
            </Stat>
            
          <Box >
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
    </Card>
  );
}

export default AssetsStatusCard;