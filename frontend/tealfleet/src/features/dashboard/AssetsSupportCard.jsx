// React components
import * as React from "react";

// Chakra-UI components
import {
  Card,
  CardBody,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import {
  CheckCircleIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons";

function AssetsSupportCard({ assetsSupportCardData }) {
  return (
    <Card key="AssetsSupportCard" variant="outline" bg="#fdfdfd" borderRadius={"0.6em 0.6em 0.6em 0.6em"}>
      <CardBody>
        <TableContainer>
          <Table
            variant="simple"
            size={{
              base: "sm",
              sm: "sm",
              md: "sm",
              lg: "md",
            }}
          >
            <TableCaption>
              Support status of assets by vendor
            </TableCaption>
            <Thead>
              <Tr>
                <Th>CONTRACT</Th>
                <Th>SUPPORTED BY</Th>
                <Th>STATUS</Th>
              </Tr>
            </Thead>
            <Tbody>
              {assetsSupportCardData.map((data) => (
                <Tr key={data.contract_no}>
                  <Td color="gray.600">{data.contract_no}</Td>
                  <Td color="gray.600">{data.contractor_name}</Td>
                  <Td color="gray.600" textAlign="center">{data.contract_valid === true ? (
                      <CheckCircleIcon boxSize={{base: 4, sm: 4, md: 4, lg: 4}} color="teal" />
                    ) : (
                      <WarningTwoIcon boxSize={{base: 4, sm: 4, md: 4, lg: 4}} color="red.600" />
                    )}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
}

export default AssetsSupportCard;
