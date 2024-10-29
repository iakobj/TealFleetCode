// React components
import * as React from "react";
import { useState, useEffect, useRef } from "react";

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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Checkbox,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

// import location of the API server
import { API_ENDPOINT } from "../../../constants/apiEndpoint";

import {
  CheckCircleIcon,
  WarningTwoIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";

function ContractsList({ contractItems, selectedContracts, newAssetId, assetType }) {
  const [isChecked, setIsChecked] = useState(false);
  const toast = useToast();
  const handleChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);

    const contract_id = contractItems.contract_id;
    const contract_no = contractItems.contract_no;

    let action = "none";

    let contractInfo = {
        newContractNo: contract_no,
        newContractId: contract_id,
      asset_id: newAssetId,
      asset_type: assetType,
    };

    if (checked) {
      action = "add";

      const addContract = JSON.stringify(contractInfo, null, 2);
      console.log(contractInfo);
      fetch(`${API_ENDPOINT}/contracts/add/asset`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: addContract,
      })
        .then(async (response) => {
          if (response.ok) {
            toast({
              title: "Asset added",
              description: `${contract_no}`,
              status: "success",
              position: "bottom",
              variant: "subtle",
            });
          } else {
            toast({
              title: "Error",
              description: `Error adding ${contract_no}`,
              status: "error",
              position: "bottom",
              variant: "subtle",
            });
            setIsChecked(false);
          }
        })
        .catch((error) => {
          console.error("Error adding asset:", error);
          setIsChecked(false);
        });
    } else {
      action = "remove";

      const removeContract = JSON.stringify(contractInfo, null, 2);
      console.log(contractInfo);
      fetch(`${API_ENDPOINT}/contracts/remove/asset`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: removeContract,
      })
        .then(async (response) => {
          if (response.ok) {
            toast({
              title: "Asset removed",
              description: `${contract_no}`,
              status: "success",
              position: "bottom",
              variant: "subtle",
            });
          } else {
            toast({
              title: "Error",
              description: `Error removing ${contract_no}`,
              status: "error",
              position: "bottom",
              variant: "subtle",
            });
            setIsChecked(true);
          }
        })
        .catch((error) => {
          console.error("Error removing asset:", error);
          setIsChecked(true);
        });
    }
  };

  useEffect(() => {
    if (selectedContracts && selectedContracts.data) {
      const isSelected = selectedContracts.data.some((contract) => {
        if (contractItems.asset_type == "SW") {
            return contract.software_asset_id === contractItems.software_asset_id;
          } else if (contractItems.asset_type == "HW" && !contract.software_asset_id) {
            return contract.hardware_asset_id === contractItems.hardware_asset_id;
          }
          return false;
        });
      setIsChecked(isSelected);
    }
  }, [selectedContracts, contractItems]);

  return (
    <Tr>
      <Td>
        <Checkbox
          size="md"
          colorScheme="teal"
          isChecked={isChecked}
          onChange={handleChange}
        />
      </Td>
      <Td>{contractItems.contract_no}</Td>
      <Td>{contractItems.tenant_name}</Td>
      <Td>{contractItems.contractor_name}</Td>
      <Td>{contractItems.contract_valid_from}</Td>

      <Td>{contractItems.contract_valid_to}</Td>
    </Tr>
  );
}

export default ContractsList;