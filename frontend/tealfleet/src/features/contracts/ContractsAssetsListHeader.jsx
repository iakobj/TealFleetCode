import * as React from "react";
import { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react"; 

// import location of the API server
import { contractsGetByContractNo } from "../../constants/api/contracts";

import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Card,
  CardHeader,
  CardBody,
  Box,
  Text,
  HStack,
  Stack,
  Badge,
  Flex,
  Spacer,

} from "@chakra-ui/react";

import { HamburgerIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import DeleteContract from "./DeleteContract";

function ContractsAssetsListHeader({ selectedContract }) {
  const [contractData, setContractData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await contractsGetByContractNo(selectedContract);
  
      setContractData(data);
    };
    fetchData();
  }, [selectedContract]);

  const { isOpen, onOpen, onClose } = useDisclosure(); 
  const cancelRef = React.useRef();

  return (
    <Card bg="#FDFDFD" variant="outline" borderRadius="0.6em 0.6em 0.6em 0.6em" position="sticky" zIndex="80" top="0em">
      <DeleteContract isOpen={isOpen} onClose={onClose} cancelRef={cancelRef} selectedContract={contractData}/>
      <CardHeader borderRadius="0.55em 0.55em 0.55em 0.55em" bg="#F4F7F4">
        <Flex>
          <Text fontWeight="500" color="gray.600">
          {contractData &&
              contractData.data &&
              contractData.data.length > 0
                ? contractData.data[0].contract_no
                : "Nothing Selected"}
          </Text>
          <Spacer />
          <Text fontWeight="500" color="gray.600">
            {contractData &&
            contractData.data &&
            contractData.data.length > 0
              ? contractData.data[0].tenant_name
              : "Nothing Selected"}
          </Text>
          <Menu>
            <MenuButton
              as={IconButton}
              colorScheme="teal"
              variant="solid"
              size="sm"
              icon={<HamburgerIcon />}
              marginLeft={"1em"}
              marginTop={"-0.25em"}
            >
            </MenuButton>
            <MenuList>
              <MenuItem icon={<EditIcon />}>Edit Contract</MenuItem>
              <MenuItem icon={<DeleteIcon />} onClick={onOpen}>Delete Contract</MenuItem>
            </MenuList>
          </Menu>
          
        </Flex>
      </CardHeader>

      <CardBody bg="#F4F7F4" paddingBottom="1.2em" borderRadius="0.55em 0.55em 0.55em 0.55em">
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
