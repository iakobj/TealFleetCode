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

import {
  CheckCircleIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons";

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
    <Box marginTop="1.25em">
      <Grid templateColumns="repeat(10, 1fr)" templateRows="1" gap={4}>
        <GridItem colSpan={3} marginRight="-1em">
          <SimpleGrid spacing="1em" paddingRight="1em">
            {contractsData.map((contractsData) => (
              <Card
                borderRadius={{ md: "0.6em 0.6em 0.6em 0.6em" }}
                boxShadow="md"
                key={contractsData.contract_no}
                onClick={() => handleCardClick(contractsData.contract_no)}
                bg={selectedContract === contractsData.contract_no ? "#F4F7F4" : "#fdfdfd"}
                _hover={{ cursor: "pointer" }}
              >
                <CardHeader paddingTop="0.6em" paddingBottom="0.6em">
                  <Flex>
                    <Heading size="sm" color="teal.700" textTransform="uppercase">
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
                    <Text color="gray.800">{contractsData.contractor_name}</Text>
                    <Text color="gray.800">{contractsData.type}</Text>
                  </CardBody>
                  <Divider orientation="horizontal" />

                  <Box marginLeft="1em" marginRight="1em" marginBottom="0.5em">
                    <Flex>
                      <Box>
                        <Text color="gray.800">{contractsData.contract_valid_from}</Text>
                      </Box>
                      <Spacer />
                      <Box>
                        <Text color="gray.800">{contractsData.contract_valid_to}</Text>
                      </Box>
                    </Flex>
                  </Box>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={7} marginLeft="0.6em">
        <Box position="sticky" top="11em">
          <ContractsAssetsList selectedContractData={selectedContractData}/>
          </Box>

        </GridItem>
      </Grid>
    </Box>
  );
}

export default ContractsListCard;
