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

} from "@chakra-ui/react";

import { ChevronDownIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";

function ContractsAssetsListHeader({ selectedContract }) {
  const [contractData, setContractData] = useState([]);
  const ContractsDataLoader = async (selectedContract) => {
    try {
      const contractData = await fetch(
        `http://${API_ENDPOINT}/contracts/basic/information/${selectedContract}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const data = await contractData.json();
      setContractData(data);
    } catch (error) {
      console.error("Error loading contract data:", error);
    }
  };

  useEffect(() => {
    ContractsDataLoader(selectedContract);
  }, [selectedContract]);

  return (
    <Card bg="#FDFDFD" variant="outline" borderRadius="0.6em 0.6em 0.6em 0.6em">
      <CardHeader borderRadius="0.55em 0.55em 0em 0em" bg="#F4F7F4">
        <Flex>
          <Text fontWeight="500" color="gray.600">
            {contractData &&
            contractData.data &&
            contractData.data.length > 0
              ? contractData.data[0].tenant_name
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
              {contractData &&
              contractData.data &&
              contractData.data.length > 0
                ? contractData.data[0].contract_no
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
          {contractData &&
          contractData.data &&
          contractData.data.length > 0
            ? contractData.data[0].contract_description
            : "Nothing Selected"}
        </Text>

        <Stack direction="row" marginTop="0.2em" marginBottom="0.2em">
          {contractData &&
          contractData.data &&
          contractData.data.length > 0 ? (
            <Badge variant="solid" colorScheme="teal">
              {contractData.data && contractData.data[0].type}
            </Badge>
          ) : null}
          {contractData &&
          contractData.data &&
          contractData.data.length > 0 ? (
            <Badge variant="solid" colorScheme="teal">
              SLA: {contractData.data && contractData.data[0].contract_sla}
            </Badge>
          ) : null}
        </Stack>

        <Box marginBottom="-0.2em">
          <Flex>
            <Box paddingTop="0.35em" marginBottom="-0.3em">
              <HStack>
                <Text fontWeight="500">Supported by:</Text>
                <Text color="gray.600">
                  {contractData &&
                  contractData.data &&
                  contractData.data.length > 0
                    ? contractData.data[0].contractor_name
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
                  {contractData &&
                  contractData.data &&
                  contractData.data.length > 0
                    ? contractData.data[0].contract_valid_from
                    : "Nothing Selected"}
                </Text>
                <Text fontWeight="500" color="gray.600">
                  Until:
                </Text>
                <Text color="gray.600">
                  {contractData &&
                  contractData.data &&
                  contractData.data.length > 0
                    ? contractData.data[0].contract_valid_to
                    : "Nothing Selected"}
                </Text>
              </HStack>
            </Box>
          </Flex>
        </Box>
      </CardBody>
    </Card>
  );
}

export default ContractsAssetsListHeader;
