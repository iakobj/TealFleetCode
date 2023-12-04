// React components
import * as React from "react";

// Chakra-UI components
import { Text, Box, SimpleGrid } from "@chakra-ui/react";

import ContractsListCard from "../../components/support/ContractsListCard";

function Contracts() {
  const ContractsListCardData = [
    {
      no: "1",
      contract_id: "123",
      contract_no: "CON-TRACT-001231",
      contract_type: "BREAK FIX",
      contractor_name: "MSP Pro Guys",
      contract_valid: "FALSE",
      valid_from: "2023-09-18",
      valid_to: "2024-02-12",
    },
    {
      no: "2",
      contract_id: "1234",
      contract_no: "CON-TRACT-08831",
      contract_type: "SUPPORT",
      contractor_name: "Vendor Support",
      contract_valid: "TRUE",
      valid_from: "2023-06-18",
      valid_to: "2024-02-12",
    },
    {
      no: "3",
      contract_id: "1235",
      contract_no: "CON-TRACT-0287431",
      contract_type: "NBD HW FIX",
      contractor_name: "MSP ACME",
      contract_valid: "TRUE",
      valid_from: "2023-05-22",
      valid_to: "2024-02-12",
    },
    {
      no: "4",
      contract_id: "12344",
      contract_no: "CON-TRACT-001231",
      contract_type: "BREAK FIX",
      contractor_name: "MSP Pro Guys",
      contract_valid: "TRUE",
      valid_from: "2023-09-18",
      valid_to: "2024-02-12",
    },
    {
      no: "5",
      contract_id: "123455",
      contract_no: "CON-TRACT-08831",
      contract_type: "SUPPORT",
      contractor_name: "Vendor Support",
      contract_valid: "FALSE",
      valid_from: "2023-06-18",
      valid_to: "2024-02-12",
    },
    {
      no: "6",
      contract_id: "123566",
      contract_no: "CON-TRACT-0287431",
      contract_type: "NBD HW FIX",
      contractor_name: "MSP ACME",
      contract_valid: "TRUE",
      valid_from: "2023-05-22",
      valid_to: "2024-02-12",
    },
    {
      no: "7",
      contract_id: "127735",
      contract_no: "CON-TRACT-0287431",
      contract_type: "WARRANTY",
      contractor_name: "MSP ACME",
      contract_valid: "TRUE",
      valid_from: "2023-05-22",
      valid_to: "2024-02-12",
    },
    {
      no: "8",
      contract_id: "1238844",
      contract_no: "CON-TRACT-001231",
      contract_type: "BREAK FIX",
      contractor_name: "MSP Pro Guys",
      contract_valid: "TRUE",
      valid_from: "2023-09-18",
      valid_to: "2024-02-12",
    },
    {
      no: "9",
      contract_id: "1293455",
      contract_no: "CON-TRACT-08831",
      contract_type: "WARRANTY",
      contractor_name: "Vendor Support",
      contract_valid: "FALSE",
      valid_from: "2023-06-18",
      valid_to: "2024-02-12",
    },
    {
      no: "10",
      contract_id: "12310566",
      contract_no: "CON-TRACT-0287431",
      contract_type: "NBD HW FIX",
      contractor_name: "MSP ACME",
      contract_valid: "TRUE",
      valid_from: "2023-05-22",
      valid_to: "2024-02-12",
    },
  ];
  return (
    <Box>
      <SimpleGrid
        marginTop={{ base: "1em", sm: "1em", md: "0em" }}
        spacing="1em"
        columns={{ base: "1", sm: "1", md: "1", lg: "1" }}
      >
        <ContractsListCard ContractsListCardData={ContractsListCardData} />
      </SimpleGrid>
    </Box>
  );
}

export default Contracts;
