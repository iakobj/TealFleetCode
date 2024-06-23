import * as React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLoaderData, useSearchParams } from "react-router-dom";

import ContractsListCard from "../../features/contracts/ContractsListCard";
import FilterNothingFound from "../../components/FilterNothingFound";

// Chakra-UI components
import {
  Text,
  Spacer,
  Box,
  Button,
  Card,
  Wrap,
  WrapItem,
  Select,
  Hide,
  IconButton,
  Stack,
} from "@chakra-ui/react";

import { RepeatIcon, ArrowBackIcon, ArrowForwardIcon, AddIcon } from "@chakra-ui/icons";

function ContractsFilter() {
  const loaderData = useLoaderData();

  const contractItems = loaderData.cItems.data;
  const contractorsItems = loaderData.contractorsItems.data;
  const tenantItems = loaderData.tItems.data;

  const [offset, setOffset] = useState(0);
  const [tenant, setTenant] = useState();
  const [validity, setValidity] = useState();
  const [contractor, setContractor] = useState();

  const [arrowForward, setArrowForward] = useState();
  const [arrowBack, setArrowBack] = useState();
  const [selectedPage, setSelectedPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();

  let params = {};
  function handleChange(selected, filterName) {
    // Update the state based on the selected filter
    switch (filterName) {
      case "tenant":
        setTenant(selected);
        break;
      case "validity":
        setValidity(selected);
        break;
      case "contractor":
        setContractor(selected);
        break;
      case "offset":
        setOffset(selected);
      default:
        break;
    }

    params = {
      offset: filterName == "offset" ? selected : setOffset(0),
      tenant: filterName == "tenant" ? selected : tenant,
      validity: filterName == "validity" ? selected : validity,
      contractor: filterName == "contractor" ? selected : contractor,
    };
    setSearchParams(params);
  }

  function resetForm() {
    setOffset(0);
    setArrowBack(true);
    setArrowForward(false);
    setTenant("");
    setValidity("");
    setContractor("");
  }


  return (
    <Box>
      <Hide breakpoint="(max-width: 17em)" >
        <Card
          marginBottom="0em"
          paddingTop="0.6em"
          paddingBottom="0.6em"
          variant="outline"
          bg="#fdfdfd"
          borderRadius={"0.6em 0.6em 0.6em 0.6em"}
          marginLeft={{ base: "0.5em", sm: "0.5em", md: "0em" }}
          marginRight={{ base: "0.5em", sm: "0.5em", md: "0em" }}
          position="sticky" zIndex="90" top="6.5em"
        >
          <Wrap>
            <WrapItem>
              <NavLink to={"/support/contracts"}>
                <IconButton
                  aria-label="Reset filter"
                  icon={<RepeatIcon />}
                  size={"sm"}
                  colorScheme={"teal"}
                  marginLeft={"0.6em"}
                  onClick={resetForm}
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
                value={tenant}
                onChange={(e) => handleChange(e.target.value, "tenant")}
              >
                {tenantItems &&
                  tenantItems
                    .filter((item) => item.tenant_id)
                    .map((tenantItems) => (
                      <option
                        key={tenantItems.tenant_id}
                        value={tenantItems.tenant_name}
                      >
                        {tenantItems.tenant_name}
                      </option>
                    ))}
              </Select>
            </WrapItem>
            <WrapItem marginRight={"0.5em"}>
              <Select
                placeholder="Validity"
                size="sm"
                w={{ base: "7em", sm: "7em", md: "7em", lg: "8em" }}
                id="validity"
                name="validity"
                onChange={(e) => handleChange(e.target.value, "validity")}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Select>
            </WrapItem>

            <WrapItem marginRight={"0.5em"}>
              <Select
                placeholder="Contractor"
                id="contractor"
                name="contractor"
                size="sm"
                w={{ base: "7em", sm: "7em", md: "7em", lg: "8em" }}
                value={contractor}
                onChange={(e) => handleChange(e.target.value, "contractor")}
              >
                {contractorsItems &&
                  contractorsItems
                    .filter((item) => item.contractor_name)
                    .map((contractorsItems) => (
                      <option
                        key={contractorsItems.contractor_name}
                        value={contractorsItems.contractor_name}
                      >
                        {contractorsItems.contractor_name}
                      </option>
                    ))}
              </Select>
            </WrapItem>
            <Spacer />
            <WrapItem>
              <Spacer />
              <NavLink to="new">
                <Button
                  leftIcon={<AddIcon />}
                  size={"sm"}
                  colorScheme={"teal"}
                  marginRight="0.6em"
                >
                  New Contract
                </Button>
              </NavLink>
            </WrapItem>
          </Wrap>
        </Card>
      </Hide>
      <Box height={"calc((100vh) - 12.9em)"} >
        {contractItems == false ? (
          <FilterNothingFound />
        ) : (
          <ContractsListCard contractItems={contractItems} />
        )}
      </Box>
     
    </Box>
  );
}

export default ContractsFilter;
