// React components
import * as React from "react";
import { useState, useEffect } from "react";

import ContractsAssetsList from "./ContractsAssetsList";

// Chakra-UI components
import {
  Stack,
  Card,
  CardHeader,
  CardBody,
  Box,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  Heading,
  Flex,
  Spacer,
  Wrap,
  WrapItem,
  IconButton,
} from "@chakra-ui/react";

import {
  CheckCircleIcon,
  WarningTwoIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";

function ContractsListCard({ contractItems }) {
  const [selectedContract, setSelectedContract] = useState();

  useEffect(() => {
    if (
      !contractItems ||
      !contractItems.length ||
      !contractItems[0].contract_no
    ) {
      console.log("Undefined");
    } else {
      setSelectedContract(contractItems[0].contract_no);
    }
  }, [contractItems]);

  const handleCardClick = (contract_no) => {
    setSelectedContract(contract_no);
  };

  return (
    <Box marginTop="1em">
      <Grid templateColumns="repeat(12, 1fr)" templateRows="1" gap="0em">
        <GridItem colSpan={3}>
          <SimpleGrid spacing="0.8em" marginRight="1em">
            {contractItems.map((contractItems) => (
              <Card
                borderRadius="0.6em 0.6em 0.6em 0.6em"
                key={contractItems.contract_no}
                onClick={() => handleCardClick(contractItems.contract_no)}
                bg={
                  selectedContract === contractItems.contract_no
                    ? "#F4F7F4"
                    : "#FDFDFD"
                }
                _hover={{ cursor: "pointer" }}
                variant="outline"
              >
                <CardHeader
                  marginLeft="-0.75em"
                  paddingTop="0.6em"
                  paddingBottom="0.6em"
                >
                  <Flex>
                    <Heading
                      size="xs"
                      color="gray.600"
                      textTransform="uppercase"
                      fontWeight="500"
                    >
                      {contractItems.contract_no}
                    </Heading>
                    <Spacer />
                    {contractItems.contract_valid === "true" ? (
                      <CheckCircleIcon boxSize={4} color="teal" />
                    ) : (
                      <WarningTwoIcon boxSize={4} color="red.600" />
                    )}
                  </Flex>
                </CardHeader>
                <Stack marginLeft="-0.75em">
                  <CardBody paddingTop="0em" paddingBottom="0.3em">
                    <Text fontWeight="400" fontSize="sm" color="gray.600">
                      {contractItems.contractor_name}
                    </Text>
                    <Box marginTop="0.2em">
                      <Text fontSize="sm" color="gray.600">
                        Expires: {contractItems.contract_valid_to}
                      </Text>
                    </Box>
                  </CardBody>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={9}>
          <Box>
            <ContractsAssetsList selectedContract={selectedContract} />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default ContractsListCard;
