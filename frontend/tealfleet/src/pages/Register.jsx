// React components
import * as React from "react";

import RegisterForm from "../features/authentication/RegisterForm.jsx";
import Header from "../features/authentication/Header.jsx";

// Chakra-UI components
import { Flex, Spacer, Box } from "@chakra-ui/react";

function Register() {
  return (
    <Box>
      <Header />

      <Flex>
        <Spacer />
        <RegisterForm />
        <Spacer />
      </Flex>
    </Box>
  );
}

export default Register;
