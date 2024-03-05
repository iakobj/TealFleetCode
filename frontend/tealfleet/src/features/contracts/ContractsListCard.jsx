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

  const [arrowForward, setArrowForward] = useState();
  const [arrowBack, setArrowBack] = useState();
  const [selectedPage, setSelectedPage] = useState(1);

  let numberOfAssetsOnPage = 4;
  let elements = [];
  let totalPages = 0;
  let foundAssets = 0;

  return (
    <Box marginTop="1em">
      <Grid templateColumns="repeat(12, 1fr)" templateRows="1" gap="0em">
        <GridItem colSpan={3}>
          <SimpleGrid spacing="0.8em" marginRight="1em">
            {contractsData.map((contractsData) => (
              <Card
                borderRadius="0.6em 0.6em 0.6em 0.6em"
                key={contractsData.contract_no}
                onClick={() => handleCardClick(contractsData.contract_no)}
                bg={
                  selectedContract === contractsData.contract_no
                    ? "#F4F7F4"
                    : "#FDFDFD"
                }
                _hover={{ cursor: "pointer" }}
                variant="outline"
              >
                <CardHeader marginLeft="-0.75em" paddingTop="0.6em" paddingBottom="0.6em">
                  <Flex>
                    <Heading
                      size="xs"
                      color="gray.600"
                      textTransform="uppercase"
                      fontWeight="500"
                    >
                      {contractsData.contract_no}
                    </Heading>
                    <Spacer />
                    {contractsData.contract_valid === "true" ? (
                      <CheckCircleIcon boxSize={4} color="teal" />
                    ) : (
                      <WarningTwoIcon boxSize={4} color="red.600" />
                    )}
                  </Flex>
                </CardHeader>
                <Stack marginLeft="-0.75em">
                  <CardBody paddingTop="0em" paddingBottom="0.3em">
                    <Text fontWeight="400" fontSize="sm" color="gray.600">
                      {contractsData.contractor_name}
                    </Text>
                    <Box marginTop="0.2em">
                      <Text fontSize="sm" color="gray.600">
                        Expires: {contractsData.contract_valid_to}
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
            <ContractsAssetsList selectedContractData={selectedContractData} />
          </Box>
        </GridItem>
      </Grid>

      <Card
        marginTop="1em"
        paddingTop="0.6em"
        paddingBottom="0.6em"
        variant="outline"
        bg="#fdfdfd"
        borderRadius={"0.6em 0.6em 0.6em 0.6em"}
      >
        <Wrap>
          <WrapItem>
            <IconButton
              marginRight={"0.6em"}
              aria-label="Reset filter"
              icon={<ArrowBackIcon />}
              size={"sm"}
              colorScheme={"teal"}
              marginLeft={"0.6em"}
              onClick={() =>
                handleChange(offset - numberOfAssetsOnPage, "offset")
              }
              isDisabled={arrowBack}
            />
          </WrapItem>
          <WrapItem marginTop="0.3em">
            <Stack direction="row">
              {elements.map((_, index) => (
                <Button
                  colorScheme="blackAlpha"
                  variant="ghost"
                  size="sm"
                  key={index}
                  paddingLeft="-1em"
                  paddingRight="-1em"
                  marginTop="-0.35em"
                  onClick={() =>
                    handleChange(index * numberOfAssetsOnPage, "offset")
                  }
                >
                  <Text
                    fontSize="md"
                    fontWeight={index + 1 === selectedPage ? "600" : "400"}
                  >
                    {index + 1}
                  </Text>
                </Button>
              ))}
            </Stack>
          </WrapItem>
          <WrapItem>
            <IconButton
              marginRight={"0.6em"}
              aria-label="Reset filter"
              icon={<ArrowForwardIcon />}
              size={"sm"}
              colorScheme={"teal"}
              marginLeft={"0.6em"}
              onClick={() =>
                handleChange(offset + numberOfAssetsOnPage, "offset")
              }
              isDisabled={arrowForward}
            />
          </WrapItem>
          <Spacer />
          <WrapItem marginRight="1em" marginTop="0.2em">
            <Text>Found {foundAssets} contracts</Text>
          </WrapItem>
        </Wrap>
      </Card>
    </Box>
  );
}

export default ContractsListCard;
