import * as React from "react";
import { useState, useEffect } from "react";

// import location of the API server
import { API_ENDPOINT } from "../../constants/apiEndpoint";

import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Text,
  Heading,
  HStack,
  Stack,
  Badge,
  Flex,
  Spacer,
  Divider,
  TableContainer,
  TableCaption,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

import { InfoOutlineIcon } from "@chakra-ui/icons";

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
      <Card
        bg="#FDFDFD"
        variant="outline"
        borderRadius="0.6em 0.6em 0.6em 0.6em"
      >
        <CardHeader borderRadius="0.55em 0.55em 0em 0em" bg="#F4F7F4">
          <Flex>
            <Heading color="gray.600" size="md">
              {selectedContractData.contract_no}
            </Heading>
            <Spacer />
            <Text color="gray.600">
              {" "}
              <b>{selectedContractData.tenant_name}</b>
            </Text>
          </Flex>
        </CardHeader>

        <CardBody bg="#F4F7F4" paddingBottom="1.2em">
          <Text color="gray.600" paddingBottom="0.4em">
            {selectedContractData.contract_description}
          </Text>

          <Stack direction="row" marginTop="0.2em" marginBottom="0.2em">
            {selectedContractData.type ? (
              <Badge variant="outline" colorScheme="teal">
                {selectedContractData.type}
              </Badge>
            ) : null}
            {selectedContractData.contract_sla ? (
              <Badge variant="solid" colorScheme="teal">
                {selectedContractData.contract_sla}
              </Badge>
            ) : null}
          </Stack>

          <Box marginBottom="-0.2em">
            <Flex>
              <Box paddingTop="0.35em" marginBottom="-0.3em">
                <Text color="gray.600">
                  <b>Supported by:</b> {selectedContractData.contractor_name}{" "}
                </Text>
              </Box>
              <Spacer />
              <Box paddingTop="0.35em" marginBottom="-0.3em">
                <HStack>
                  <Text color="gray.600" marginRight="1em">
                    <b>From:</b> {selectedContractData.contract_valid_from}
                  </Text>
                  <Text color="gray.600">
                    <b>Until:</b> {selectedContractData.contract_valid_to}
                  </Text>
                </HStack>
              </Box>
            </Flex>
          </Box>
        </CardBody>
        <Divider />
        <CardBody>
          <TableContainer>
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
              <TableCaption>
                Assets covered in {selectedContractData.contract_no}
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>ASSET NAME</Th>
                  <Th>TENANT</Th>
                  <Th>VENDOR</Th>
                  <Th>MODEL</Th>
                  <Th>SERIAL NUMBER</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {contractAssets.data &&
                  contractAssets.data.map((data) => (
                    <Tr key={data.hardware_asset_id || data.software_asset_id}>
                      <Td>
                        <Text color="gray.800">
                          {data.software_asset_name || data.hardware_asset_name}
                        </Text>
                      </Td>
                      <Td>
                        <Text color="gray.800">
                        {data.tenant_name}
                        </Text>
                      </Td>
                      <Td textTransform="capitalize">
                        <Text color="gray.800">{data.vendor_name}</Text>
                      </Td>
                      <Td>
                        <Text color="gray.800">
                          {data.software_model_name || data.hardware_model_name}
                        </Text>
                      </Td>
                      <Td>
                        <Text color="gray.800">{data.hardware_serial_no}</Text>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </Box>
  );
}

export default ContractsAssetsList;
