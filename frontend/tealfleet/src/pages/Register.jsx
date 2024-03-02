// React components
import * as React from "react";

import RegisterForm from "../features/authentication/RegisterForm.jsx";
import Header from "../features/authentication/Header.jsx";
import Footer from "../layouts/footer/Footer";

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
      <Footer/>
    </Box>
  );
}

export default Register;
