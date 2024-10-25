import * as React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLoaderData, useSearchParams } from "react-router-dom";

import ContractsList from "./ContractsList";
import FilterNothingFound from "../../../components/FilterNothingFound";

// import location of the API server
import { cContractsGetByAssetId } from "../../../constants/api/contracts.js";

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
  GridItem,
  FormControl,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import {
  RepeatIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
  AddIcon,
} from "@chakra-ui/icons";

import FormStepper from "./FormStepper";

function ContractsFilter() {
  const loaderData = useLoaderData();
  const [nextStep, setNextStep] = useState(false);

  const contractItems = loaderData.cItems.data;
  const contractorsItems = loaderData.contractorsItems.data;
  const tenantItems = loaderData.tItems.data;

  const [offset, setOffset] = useState(0);
  const [tenant, setTenant] = useState();
  const [validity, setValidity] = useState();
  const [contractor, setContractor] = useState();

  const [arrowForward, setArrowForward] = useState(false);
  const [arrowBack, setArrowBack] = useState(false);
  const [selectedPage, setSelectedPage] = useState(1);

  const [selectedContracts, setSelectedContracts] = useState();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const selContracts = await cContractsGetByAssetId(newAssetId);

      setSelectedContracts(selContracts);
    };
    fetchData();
  }, [offset, arrowForward, selectedPage]);

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
        break;
      default:
        break;
    }

    params = {
      offset: filterName === "offset" ? selected : 0,
      tenant: filterName === "tenant" ? selected : tenant,
      validity: filterName === "validity" ? selected : validity,
      contractor: filterName === "contractor" ? selected : contractor,
    };
    setSearchParams(params);
  }

  let numberOfContractsOnPage = 24;
  let elements = [];
  let totalPages = 0;
  let foundContracts = 0;

  useEffect(() => {
    if (offset / totalPages === 0) {
      setSelectedPage(1);
    } else {
      const currentPage = Math.floor(
        (offset + numberOfContractsOnPage) / numberOfContractsOnPage
      );
      setSelectedPage(currentPage);
    }
  }, [offset, totalPages]);

  useEffect(() => {
    if (
      offset ===
        Math.ceil(foundContracts / numberOfContractsOnPage) * totalPages ||
      totalPages === 1
    ) {
      setArrowForward(true);
    } else if (totalPages === selectedPage) {
      setArrowForward(true);
    } else if (totalPages === 1) {
      setArrowForward(true);
    } else {
      setArrowForward(false);
    }
  }, [offset, totalPages, contractItems]);

  useEffect(() => {
    if (offset === 0) {
      setArrowBack(true);
    } else {
      setArrowBack(false);
    }
  }, [offset, totalPages]);

  if (
    contractItems &&
    contractItems.length > 0 &&
    contractItems[0].total_count !== undefined
  ) {
    foundContracts = contractItems[0].total_count;
    totalPages = Math.ceil(
      contractItems[0].total_count / numberOfContractsOnPage
    );
    elements = Array.from({ length: totalPages });
  }

  return (
    <>
      <GridItem colSpan={{ sm: "12", md: "12", lg: "3", xl: "2" }}>
        <FormStepper stepperAt={3} />
      </GridItem>

      <GridItem colSpan={{ sm: "12", md: "12", lg: "9", xl: "10" }}>
        <Box marginTop={{ base: "1em", sm: "1em", md: "0em" }}>
          <Hide breakpoint="(max-width: 17em)">
            <Card
              marginBottom="1em"
              paddingTop="0.6em"
              paddingBottom="0.6em"
              variant="outline"
              bg="#fdfdfd"
              borderRadius={"0.6em 0.6em 0.6em 0.6em"}
              marginLeft={{ base: "0.5em", sm: "0.5em", md: "0em" }}
              marginRight={{ base: "0.5em", sm: "0.5em", md: "0em" }}
              position="sticky"
              zIndex="90"
              top="6.5em"
            >
              <Wrap>
                <WrapItem marginLeft={"0.5em"}>
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
              </Wrap>
            </Card>
          </Hide>

          <Card
            variant="outline"
            bg="#fdfdfd"
            borderRadius={"0.6em 0.6em 0.6em 0.6em"}
            paddingTop="0.2em"
          >
            <TableContainer marginTop="0.5em" marginBottom="1.0em">
              <Table
                variant="simple"
                size={{ sm: "sm", md: "sm", lg: "sm", xl: "sm" }}
              >
                <TableCaption>Contracts list</TableCaption>
                <Thead>
                  <Tr>
                    <Th></Th>
                    <Th>Contract No.</Th>
                    <Th>Tenant</Th>
                    <Th>Contractor</Th>
                    <Th>Valid from</Th>
                    <Th>Valid to</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {contractItems && contractItems.length > 0 ? (
                    contractItems
                      .filter((item) => item.contract_id)
                      .map((contractItems) => (
                        <ContractsList
                          contractItems={contractItems}
                          selectedContracts={selectedContracts}
                          key={contractItems.contract_id}
                        />
                      ))
                  ) : (
                    <Card>
                      <FilterNothingFound />
                    </Card>
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </Card>

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
                  aria-label="Arrow Back"
                  icon={<ArrowBackIcon />}
                  size={"sm"}
                  colorScheme={"teal"}
                  marginLeft={"0.6em"}
                  onClick={() =>
                    handleChange(offset - numberOfContractsOnPage, "offset")
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
                        handleChange(index * numberOfContractsOnPage, "offset")
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
                  aria-label="Arrow Forward"
                  icon={<ArrowForwardIcon />}
                  size={"sm"}
                  colorScheme={"teal"}
                  marginLeft={"0.6em"}
                  onClick={() =>
                    handleChange(offset + numberOfContractsOnPage, "offset")
                  }
                  isDisabled={arrowForward}
                />
              </WrapItem>
              <Spacer />
              <WrapItem marginRight="1em" marginTop="0.2em">
                <Text>Found {foundContracts} contracts</Text>
              </WrapItem>
              <WrapItem marginRight="1em" marginTop="0.2em">
                <NavLink to="/assets/fleet">
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    marginTop={"-0.28em"}
                    size="sm"
                    colorScheme="teal"
                    width={"7em"}
                  >
                    Finish
                  </Button>
                </NavLink>
              </WrapItem>
            </Wrap>
          </Card>
        </Box>
      </GridItem>
    </>
  );
}

export default ContractsFilter;
