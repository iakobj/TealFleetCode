import * as React from "react";
import { useState, useEffect } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";

import AssetList from "./AssetList.jsx";
import FilterNothingFound from "../../components/FilterNothingFound.jsx";

// Chakra-UI components
import {
  Spacer,
  Text,
  Box,
  Button,
  SimpleGrid,
  GridItem,
  Wrap,
  WrapItem,
  Card,
  Select,
  Hide,
  IconButton,
  FormControl,
  Stack,
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

import {
  RepeatIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
  AddIcon,
} from "@chakra-ui/icons";

import { useToast } from "@chakra-ui/react";

function AssetFilter({newContractId, newContractNo}) {
  const loaderData = useLoaderData();

  const assetInformations = loaderData.fItems.data;
  const vendorItems = loaderData.vItems.data;
  const tenantItems = loaderData.tItems.data;
  const swModelItems = loaderData.swItems.data;
  const hwModelItems = loaderData.hwItems.data;
  const siteNameItems = loaderData.siteItems.data;

  const [offset, setOffset] = useState(0);
  const [vendor, setVendor] = useState();
  const [tenant, setTenant] = useState();
  const [swmodel, setSwmodel] = useState();
  const [hwmodel, setHwmodel] = useState();
  const [sitename, setSitename] = useState();

  const [arrowForward, setArrowForward] = useState();
  const [arrowBack, setArrowBack] = useState();
  const [selectedPage, setSelectedPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();

  const toast = useToast();

  let params = {};
  function handleChange(selected, filterName) {
    // Update the state based on the selected filter
    switch (filterName) {
      case "vendor":
        setVendor(selected);
        break;
      case "tenant":
        setTenant(selected);
        break;
      case "swmodel":
        setSwmodel(selected);
        break;
      case "hwmodel":
        setHwmodel(selected);
        break;
      case "sitename":
        setSitename(selected);
        break;
      case "offset":
        setOffset(selected);
      default:
        break;
    }

    params = {
      offset: filterName == "offset" ? selected : setOffset(0),
      vendor: filterName == "vendor" ? selected : vendor,
      tenant: filterName == "tenant" ? selected : tenant,
      swmodel: filterName == "swmodel" ? selected : swmodel,
      hwmodel: filterName == "hwmodel" ? selected : hwmodel,
      sitename: filterName == "sitename" ? selected : sitename,
    };
    setSearchParams(params);
  }

  let numberOfAssetsOnPage = 24;
  let elements = [];
  let totalPages = 0;
  let foundAssets = 0;

  useEffect(() => {
    if (offset / totalPages == 0) {
      setSelectedPage(1);
    } else {
      const currentPage = Math.floor(
        (offset + numberOfAssetsOnPage) / numberOfAssetsOnPage
      );
      setSelectedPage(currentPage);
    }
  }, [offset, totalPages]);

  useEffect(() => {
    if (
      offset == Math.ceil(foundAssets / numberOfAssetsOnPage) * totalPages ||
      totalPages == 1
    ) {
      setArrowForward(true);
    } else if (totalPages == selectedPage) {
      setArrowForward(true);
    } else if (totalPages == 1) {
      setArrowForward(true);
    } else {
      setArrowForward(false);
    }
  }, [offset, totalPages, assetInformations]);

  useEffect(() => {
    if (offset === 0) {
      setArrowBack(true);
    } else {
      setArrowBack(false);
    }
  }, [offset, totalPages]);

  if (
    assetInformations &&
    assetInformations.length > 0 &&
    assetInformations[0].total_count !== undefined
  ) {
    foundAssets = assetInformations[0].total_count;
    totalPages = Math.ceil(
      assetInformations[0].total_count / numberOfAssetsOnPage
    );
    elements = Array.from({ length: totalPages });
  }

  function resetForm() {
    setOffset(0);
    setArrowBack(true);
    setArrowForward(false);
    setVendor("");
    setTenant("");
    setSwmodel("");
    setHwmodel("");
    setSitename("");
  }

  return (
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
        >
          <Wrap>
            <WrapItem marginLeft="0.5em">
              <FormControl>
                <Select
                  placeholder="Vendor"
                  id="vendor"
                  name="vendor"
                  size="sm"
                  w={{ base: "7em", sm: "7em", md: "7em", lg: "8em" }}
                  value={vendor}
                  onChange={(e) => handleChange(e.target.value, "vendor")}
                >
                  {vendorItems &&
                    vendorItems
                      .filter((item) => item.vendor_id)
                      .map((vendorItems) => (
                        <option
                          key={vendorItems.vendor_id}
                          value={vendorItems.vendor_name}
                        >
                          {vendorItems.vendor_name}
                        </option>
                      ))}
                </Select>
              </FormControl>
            </WrapItem>
            <WrapItem marginLeft="0.5em">
              <FormControl>
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
              </FormControl>
            </WrapItem>
            <WrapItem marginLeft="0.5em">
              <FormControl>
                <Select
                  placeholder="Software"
                  size="sm"
                  w={{ base: "7em", sm: "7em", md: "7em", lg: "8em" }}
                  id="swmodel"
                  name="swmodel"
                  value={swmodel}
                  onChange={(e) => handleChange(e.target.value, "swmodel")}
                >
                  {swModelItems &&
                    swModelItems
                      .filter((item) => item.software_model_name)
                      .map((swModelItems) => (
                        <option key={swModelItems.software_model_name}>
                          {swModelItems.software_model_name}
                        </option>
                      ))}
                </Select>
              </FormControl>
            </WrapItem>
            <WrapItem marginLeft="0.5em">
              <FormControl>
                <Select
                  placeholder="Hardware"
                  size="sm"
                  w={{ base: "7em", sm: "7em", md: "7em", lg: "8em" }}
                  id="hwmodel"
                  name="hwmodel"
                  value={hwmodel}
                  onChange={(e) => handleChange(e.target.value, "hwmodel")}
                >
                  {hwModelItems &&
                    hwModelItems
                      .filter((item) => item.hardware_model_name)
                      .map((hwModelItems) => (
                        <option key={hwModelItems.hardware_model_name}>
                          {hwModelItems.hardware_model_name}
                        </option>
                      ))}
                </Select>
              </FormControl>
            </WrapItem>
            <WrapItem marginLeft="0.5em">
              <FormControl>
                <Select
                  placeholder="Site"
                  size="sm"
                  w={{ base: "7em", sm: "7em", md: "7em", lg: "8em" }}
                  id="sitename"
                  name="sitename"
                  value={sitename}
                  onChange={(e) => handleChange(e.target.value, "sitename")}
                >
                  {siteNameItems &&
                    siteNameItems
                      .filter((item) => item.site_name)
                      .map((siteNameItems) => (
                        <option key={siteNameItems.site_id}>
                          {siteNameItems.site_name}
                        </option>
                      ))}
                </Select>
              </FormControl>
            </WrapItem>
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
            onClick={() => {
              if (newContractNo === "") {
                toast({
                  title: "Action Required",
                  description:
                    "Create a contract first to enable asset addition.",
                  status: "warning",
                  duration: 9000,
                  isClosable: true,
                });
              }
            }}
          >
            <TableCaption>{newContractNo}</TableCaption>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Asset name</Th>
                <Th>Tenant</Th>
                <Th>Vendor</Th>
                <Th>Model</Th>
                <Th>Serial number</Th>
                <Th>Software version</Th>
              </Tr>
            </Thead>
            <Tbody>
              {assetInformations && assetInformations.length > 0 ? (
                assetInformations
                  .filter(
                    (item) => item.hardware_asset_id || item.software_asset_id
                  )
                  .map((assetInformations) => (
                    <AssetList
                      assetInformations={assetInformations}
                      newContractNo={newContractNo}
                      newContractId={newContractId}
                      key={
                        assetInformations.hardware_asset_id
                          ? assetInformations.hardware_asset_id
                          : assetInformations.software_asset_id
                      }
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
              aria-label="Reset filter"
              icon={<ArrowBackIcon />}
              size={"sm"}
              colorScheme={"teal"}
              marginLeft={"0.6em"}
              onClick={() =>
                handleChange(offset - numberOfAssetsOnPage, "offset")
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
                    handleChange(index * numberOfAssetsOnPage, "offset")
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
              aria-label="Reset filter"
              icon={<ArrowForwardIcon />}
              size={"sm"}
              colorScheme={"teal"}
              marginLeft={"0.6em"}
              onClick={() =>
                handleChange(offset + numberOfAssetsOnPage, "offset")
              }
              isDisabled={arrowForward}
            />
          </WrapItem>
          <Spacer />
          <WrapItem marginRight="1em" marginTop="0.2em">
            <Text>Found {foundAssets} assets</Text>
          </WrapItem>
        </Wrap>
      </Card>
    </Box>
  );
}

export default AssetFilter;
