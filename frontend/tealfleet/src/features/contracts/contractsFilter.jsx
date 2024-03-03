import * as React from "react";
import { NavLink } from "react-router-dom";

import ContractsListCard from "../../features/contracts/ContractsListCard";

// Chakra-UI components
import {
  Spacer,
  Box,
  Button,
  Card,
  Wrap,
  WrapItem,
  Select,
  Hide,
  IconButton,
} from "@chakra-ui/react";

import { RepeatIcon } from "@chakra-ui/icons";

function ContractsFilter({ contractsData }) {
  return (
    <Box>
      <Hide breakpoint="(max-width: 17em)">
        <Card
          variant="outline"
          marginBottom="1em"
          paddingTop="0.6em"
          paddingBottom="0.6em"
          bg="#fdfdfd"
          position="sticky"
          top="6.5em"
          zIndex="1"
        >
          <Wrap>
            <WrapItem>
              <NavLink to={"#"}>
                <IconButton
                  marginRight={"0.6em"}
                  aria-label="Reset filter"
                  icon={<RepeatIcon />}
                  size={"sm"}
                  colorScheme={"teal"}
                  marginLeft={"0.6em"}
                />
              </NavLink>
            </WrapItem>

            <WrapItem marginRight={"0.5em"}>
              <Select
                placeholder="Tenant"
                id="tenant"
                name="tenant"
                size="sm"
                w={{ base: "7em", sm: "7em", md: "7em", lg: "8em" }}
              >
                <option value="true">Tenant name 1</option>
                <option value="false">Tenant name 2</option>
              </Select>
            </WrapItem>
            <WrapItem marginRight={"0.5em"}>
              <Select
                placeholder="Validity"
                size="sm"
                w={{ base: "7em", sm: "7em", md: "7em", lg: "8em" }}
                id="valid"
                name="valid"
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </Select>
            </WrapItem>

            <WrapItem>
              <Select
                placeholder="Contractor"
                size="sm"
                w={{ base: "7em", sm: "7em", md: "7em", lg: "8em" }}
                id="contractor"
                name="contractor"
              >
                <option value="true">Contractor 1</option>
                <option value="false">Contractor 2</option>
              </Select>
            </WrapItem>
            <Spacer />
            <WrapItem>
              <Spacer />
              <Button size={"sm"} colorScheme={"teal"} marginRight="0.6em">
                New Contract
              </Button>
            </WrapItem>
          </Wrap>
        </Card>
      </Hide>
      <Box>
        <ContractsListCard contractsData={contractsData} />
      </Box>
    </Box>
  );
}

export default ContractsFilter;
