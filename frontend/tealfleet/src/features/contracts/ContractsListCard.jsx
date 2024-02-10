// React components
import * as React from "react";
import { useState } from "react";

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
  Divider,
} from "@chakra-ui/react";

import { CheckCircleIcon, WarningTwoIcon } from "@chakra-ui/icons";

function ContractsListCard({ contractsData }) {
  const [selectedContract, setSelectedContract] = useState(
    contractsData[0].contract_no
  );

  const handleCardClick = (contract_no) => {
    setSelectedContract(contract_no);
  };

  const selectedContractData = contractsData.find(
    (contract) => contract.contract_no === selectedContract
  );

  return (
    <Box marginTop="1em">
      <Grid templateColumns="repeat(10, 1fr)" templateRows="1" gap="1em">
        <GridItem colSpan={3}>
          <SimpleGrid spacing="1em">
            {contractsData.map((contractsData) => (
              <Card
                borderRadius="0.6em 0.6em 0.6em 0.6em"
                key={contractsData.contract_no}
                onClick={() => handleCardClick(contractsData.contract_no)}
                bg={
                  selectedContract === contractsData.contract_no
                    ? "#F4F7F4"
                    : "#fdfdfd"
                }
                _hover={{ cursor: "pointer" }}
                variant="outline"
              >
                <CardHeader paddingTop="0.6em" paddingBottom="0.6em">
                  <Flex>
                    <Heading
                      size="sm"
                      color="gray.600"
                      textTransform="uppercase"
                    >
                      {contractsData.contract_no}
                    </Heading>
                    <Spacer />
                    {contractsData.contract_valid === "true" ? (
                      <CheckCircleIcon boxSize={5} color="teal" />
                    ) : (
                      <WarningTwoIcon boxSize={5} color="red.600" />
                    )}
                  </Flex>
                </CardHeader>
                <Stack>
                  <CardBody paddingTop="0.6em" paddingBottom="0.6em">
                    <Text as="b" fontSize="sm" color="gray.600">
                      {contractsData.contractor_name}
                    </Text>
                    <Box marginTop="0.2em">
                      <Flex>
                        <Box>
                          <Text fontSize="sm" color="gray.600">
                            {contractsData.contract_valid_from}
                          </Text>
                        </Box>
                        <Spacer />
                        <Box>
                          <Text fontSize="sm" color="gray.600">
                            {contractsData.contract_valid_to}
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </CardBody>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={7}>
          <Box position="sticky" top="10em">
            <ContractsAssetsList selectedContractData={selectedContractData} />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default ContractsListCard;
