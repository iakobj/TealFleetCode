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
              <Th>AMOUNT</Th>
              <Th>VENDOR</Th>
              <Th>PART MODEL</Th>
              <Th>PART NUMBER</Th>
              <Th>SERIAL</Th>
              <Th>ASSET TAG</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Cisco</Td>
              <Td>VIC 1445</Td>
              <Td>UCSC-VIC-1445-2</Td>
              <Td>290374832748</Td>
              <Td>43534</Td>
            </Tr>

            <Tr>
              <Td>1</Td>
              <Td>Cisco</Td>
              <Td>VIC 1445</Td>
              <Td>UCSC-VIC-1445-2</Td>
              <Td>290374832748</Td>
              <Td>43534</Td>
            </Tr>

            <Tr>
              <Td>1</Td>
              <Td>Cisco</Td>
              <Td>VIC 1445</Td>
              <Td>UCSC-VIC-1445-2</Td>
              <Td>290374832748</Td>
              <Td>43534</Td>
            </Tr>

            <Tr>
              <Td>1</Td>
              <Td>Cisco</Td>
              <Td>VIC 1445</Td>
              <Td>UCSC-VIC-1445-2</Td>
              <Td>290374832748</Td>
              <Td>43534</Td>
            </Tr>

            <Tr>
              <Td>1</Td>
              <Td>Cisco</Td>
              <Td>VIC 1445</Td>
              <Td>UCSC-VIC-1445-2</Td>
              <Td>290374832748</Td>
              <Td>43534</Td>
            </Tr>

            <Tr>
              <Td>1</Td>
              <Td>Cisco</Td>
              <Td>VIC 1445</Td>
              <Td>UCSC-VIC-1445-2</Td>
              <Td>290374832748</Td>
              <Td>43534</Td>
            </Tr>

            <Tr>
              <Td>1</Td>
              <Td>Cisco</Td>
              <Td>VIC 1445</Td>
              <Td>UCSC-VIC-1445-2</Td>
              <Td>290374832748</Td>
              <Td>43534</Td>
            </Tr>

            <Tr>
              <Td>1</Td>
              <Td>Cisco</Td>
              <Td>VIC 1445</Td>
              <Td>UCSC-VIC-1445-2</Td>
              <Td>290374832748</Td>
              <Td>43534</Td>
            </Tr>

            <Tr>
              <Td>1</Td>
              <Td>Cisco</Td>
              <Td>VIC 1445</Td>
              <Td>UCSC-VIC-1445-2</Td>
              <Td>290374832748</Td>
              <Td>43534</Td>
            </Tr>

            <Tr>
              <Td>1</Td>
              <Td>Cisco</Td>
              <Td>VIC 1445</Td>
              <Td>UCSC-VIC-1445-2</Td>
              <Td>290374832748</Td>
              <Td>43534</Td>
            </Tr>

            <Tr>
              <Td>1</Td>
              <Td>Cisco</Td>
              <Td>VIC 1445</Td>
              <Td>UCSC-VIC-1445-2</Td>
              <Td>290374832748</Td>
              <Td>43534</Td>
            </Tr>

          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default SparePartsTable;
