import * as React from "react";
import { useState, useEffect } from "react";

// import location of the API server
import { API_ENDPOINT } from "../../constants/apiEndpoint";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
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

import { ChevronDownIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";

function ContractsAssetsList({ selectedContract }) {
  const [contractAssets, setContractAssets] = useState([]);
  const AssetsDataLoader = async (selectedContract) => {
    try {
      const contractAssets = await fetch(
        `http://${API_ENDPOINT}/contracts/numbers/${selectedContract}`,
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
    <Box>
      <Card
        bg="#FDFDFD"
        variant="outline"
        borderRadius="0.6em 0.6em 0.6em 0.6em"
      >
        <CardHeader borderRadius="0.55em 0.55em 0em 0em" bg="#F4F7F4">
          <Flex>
            <Text fontWeight="500" color="gray.600">
              {contractAssets &&
              contractAssets.data &&
              contractAssets.data.length > 0
                ? contractAssets.data[0].tenant_name
                : "Nothing Selected"}
            </Text>
            <Spacer />
            <Menu>
              <MenuButton
                as={Button}
                colorScheme="teal"
                variant="outline"
                size="sm"
                rightIcon={<ChevronDownIcon />}
              >
                {contractAssets &&
                contractAssets.data &&
                contractAssets.data.length > 0
                  ? contractAssets.data[0].contract_no
                  : "Nothing Selected"}
              </MenuButton>
              <MenuList>
                <MenuItem icon={<EditIcon />}>Edit Contract</MenuItem>
                <MenuItem icon={<DeleteIcon />}>Delete Contract</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </CardHeader>

        <CardBody bg="#F4F7F4" paddingBottom="1.2em">
          <Text color="gray.600" paddingBottom="0.4em">
            {contractAssets &&
            contractAssets.data &&
            contractAssets.data.length > 0
              ? contractAssets.data[0].contract_description
              : "Nothing Selected"}
          </Text>

          <Stack direction="row" marginTop="0.2em" marginBottom="0.2em">
            {contractAssets &&
            contractAssets.data &&
            contractAssets.data.length > 0 ? (
              <Badge variant="solid" colorScheme="teal">
                {contractAssets.data && contractAssets.data[0].type}
              </Badge>
            ) : null}
            {contractAssets &&
            contractAssets.data &&
            contractAssets.data.length > 0 ? (
              <Badge variant="solid" colorScheme="teal">
                SLA:{" "}
                {contractAssets.data && contractAssets.data[0].contract_sla}
              </Badge>
            ) : null}
          </Stack>

          <Box marginBottom="-0.2em">
            <Flex>
              <Box paddingTop="0.35em" marginBottom="-0.3em">
                <HStack>
                  <Text fontWeight="500">Supported by:</Text>
                  <Text color="gray.600">
                    {contractAssets &&
                    contractAssets.data &&
                    contractAssets.data.length > 0
                      ? contractAssets.data[0].contractor_name
                      : "Nothing Selected"}
                  </Text>
                </HStack>
              </Box>
              <Spacer />
              <Box paddingTop="0.35em" marginBottom="-0.3em">
                <HStack>
                  <Text fontWeight="500" color="gray.600">
                    From:
                  </Text>
                  <Text color="gray.600" marginRight="1em">
                    {contractAssets &&
                    contractAssets.data &&
                    contractAssets.data.length > 0
                      ? contractAssets.data[0].contract_valid_from
                      : "Nothing Selected"}
                  </Text>
                  <Text fontWeight="500" color="gray.600">
                    Until:
                  </Text>
                  <Text color="gray.600">
                    {contractAssets &&
                    contractAssets.data &&
                    contractAssets.data.length > 0
                      ? contractAssets.data[0].contract_valid_to
                      : "Nothing Selected"}
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
                xl: "sm",
                "2xl": "md",
              }}
            >
              <TableCaption>
                <HStack>
                  <Spacer />
                  <Text>Assets covered in</Text>
                  <Text>
                    {contractAssets &&
                    contractAssets.data &&
                    contractAssets.data.length > 0
                      ? contractAssets.data[0].contract_no
                      : "Nothing Selected"}
                  </Text>
                  <Spacer />
                </HStack>
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
