// React components
import * as React from "react";
import { useLocation } from "react-router-dom";

import LoginForm from "../features/authentication/LoginForm.jsx";
import Header from "../features/authentication/Header.jsx";
import Footer from "../layouts/footer/Footer";

// Chakra-UI components
import { Flex, Spacer, Box } from "@chakra-ui/react";

function Login() {
  const {actionLocation =  location.pathname} = useLocation();

  return (
    
    <Box>
      <Header action={actionLocation}/>

      <Flex>
        <Spacer />
        <LoginForm />
        <Spacer />
      </Flex>
      <Footer/>
    </Box>
  );
}

export default Login;
