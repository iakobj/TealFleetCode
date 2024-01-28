import * as React from "react";
import { useState, useEffect } from "react";

// import location of the API server
import { API_ENDPOINT } from "../../constants/apiEndpoint";

import {
  Stack,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  Heading,
  HStack,
  Flex,
  Spacer,
  Divider,
  TableCaption,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

function ContractsAssetsList({ selectedContractData }) {
  const [contractAssets, setContractAssets] = useState([]);
  const AssetsDataLoader = async (selectedContractData) => {
    try {
      const contractAssets = await fetch(
        `http://${API_ENDPOINT}/contracts/numbers/${selectedContractData.contract_no}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const assets = await contractAssets.json();
      console.log(assets);
      setContractAssets(assets);
    } catch (error) {
      console.error("Error loading asset data:", error);
    }
  };

  useEffect(() => {
    AssetsDataLoader(selectedContractData);
  }, [selectedContractData]);

  return (
    <Box>
      <Card boxShadow="md" borderRadius={{ md: "0.6em 0.6em 0.6em 0.6em" }}>
        <CardHeader bgColor="gray.50" borderRadius={{ md: "0.6em 0.6em 0.6em 0.6em" }}>
          <Flex>
            <Heading color="teal.700" size="md">{selectedContractData.contract_no}</Heading>
            <Spacer/>
            <Text color="teal.700"> <b>{selectedContractData.type}</b></Text>
            <Spacer/>
            <Text color="teal.700"> <b>{selectedContractData.tenant_name}</b></Text>
          </Flex>
        </CardHeader>

        <CardBody>
          <Text color="gray.800" paddingBottom="0.4em">
            <b>Description: </b>
            {selectedContractData.contract_description}
          </Text>

          <Box marginBottom="-0.2em"> 
          <Divider orientation="horizontal" />
            <Flex>
              <Box paddingTop="0.35em" marginBottom="-0.3em">
                <Text color="gray.800">
                  <b>Supported by:</b> {selectedContractData.contractor_name}{" "}
                </Text>
              </Box>
              <Spacer />
              <Box paddingTop="0.35em" marginBottom="-0.3em">
                <HStack>
                  <Text color="gray.800" marginRight="1em">
                    <b>From:</b> {selectedContractData.contract_valid_from}
                  </Text>
                  <Text color="gray.800">
                    <b>Until:</b> {selectedContractData.contract_valid_to}
                  </Text>
                </HStack>
              </Box>
            </Flex>
          </Box>
        </CardBody>
      </Card>

      <Card
        boxShadow="md"
        marginTop="1em"
        borderRadius={{ md: "0.6em 0.6em 0.6em 0.6em" }}
      >
        <CardBody>
          <Table
            variant="simple"
            size={{
              base: "sm",
              sm: "sm",
              md: "sm",
              lg: "sm",
              xl: "md",
            }}
          >
            <TableCaption>Assets covered in {selectedContractData.contract_no}</TableCaption>
            <Thead>
              <Tr>
                <Th>ASSET NAME</Th>
                <Th>VENDOR</Th>
                <Th>MODEL</Th>
                <Th>SERIAL NUMBER</Th>
                <Th>SITE</Th>
              </Tr>
            </Thead>
            <Tbody>
              {contractAssets.data &&
                contractAssets.data.map((data) => (
                  <Tr key={data.hardware_asset_id || data.software_asset_id}>
                    <Td>
                      <Text color="gray.800">{data.software_asset_name || data.hardware_asset_name}</Text>
                    </Td>
                    <Td textTransform="capitalize">
                      <Text color="gray.800">{data.vendor_name}</Text>
                    </Td>
                    <Td>
                      <Text color="gray.800">{data.software_model_name || data.hardware_model_name}</Text>
                    </Td>
                    <Td><Text color="gray.800">{data.hardware_serial_no}</Text></Td>
                    <Td><Text color="gray.800">{data.site_name}</Text></Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Box>
  );
}

export default ContractsAssetsList;
