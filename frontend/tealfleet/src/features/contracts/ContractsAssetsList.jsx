import * as React from "react";
import { useState, useEffect } from "react";

// import location of the API server
import { API_ENDPOINT } from "../../constants/apiEndpoint";

import {
  Card,
  CardBody,
  Box,
  Text,
  TableContainer,
  TableCaption,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

import ContractsAssetsListHeader from "./ContractsAssetsListHeader";

function ContractsAssetsList({ selectedContract }) {
  const [contractAssets, setContractAssets] = useState([]);

  const AssetsDataLoader = async (selectedContract) => {
    try {
      const contractAssets = await fetch(
        `${API_ENDPOINT}/contracts/numbers/${selectedContract}`,
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
    AssetsDataLoader(selectedContract);
  }, [selectedContract]);

  return (
    <Box >

      <ContractsAssetsListHeader selectedContract={selectedContract}/>

      <Card
        bg="#FDFDFD"
        variant="outline"
        borderRadius="0.6em 0.6em 0.6em 0.6em"
        marginTop="0.75em"

      >
        <CardBody >
          <TableContainer height={"calc((100vh) - 25.13em)"} overflowY="auto">
            <Table
              variant="simple"
              size={{
                base: "sm",
                sm: "sm",
                md: "sm",
                lg: "sm",
                xl: "sm",
                "2xl": "md",
              }}
            >
              <TableCaption>
                    {contractAssets &&
                    contractAssets.data &&
                    contractAssets.data.length > 0
                      ? contractAssets.data[0].contract_no
                      : <Text fontSize='xl' >Nothing found</Text>}
              </TableCaption>
              <Thead position="sticky" zIndex="80" top="0em" backgroundColor={"#FDFDFD"}>
                <Tr>
                  <Th>ASSET NAME</Th>
                  <Th>TENANT</Th>
                  <Th>VENDOR</Th>
                  <Th>MODEL</Th>
                  <Th>SERIAL NUMBER</Th>
                  <Th>SOFTWARE VERSION</Th>
                </Tr>
              </Thead>
              <Tbody>
                {contractAssets.data &&
                  contractAssets.data.map((data) => (
                    <Tr key={data.software_asset_id || data.hardware_asset_id}>
                      <Td>
                        <Text color="gray.800">
                          {data.software_asset_name || data.hardware_asset_name}
                        </Text>
                      </Td>
                      <Td>
                        <Text color="gray.800">{data.tenant_name}</Text>
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
                      <Td>
                        <Text color="gray.800">{data.software_version_number}</Text>
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
