import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

function SparePartsTable() {
  return (
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
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default SparePartsTable;
