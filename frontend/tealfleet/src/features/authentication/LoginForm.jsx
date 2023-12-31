// React components
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useToast } from "@chakra-ui/react";

// import location of the API server
import { API_ENDPOINT } from '../../constants/apiEndpoint';

// Chakra-UI components
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Box,
  Center,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

function LoginForm() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const toast = useToast();

  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    // Read the form data
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const jsonData = JSON.stringify(Object.fromEntries(formData));
    console.log(jsonData);
    // You can pass formData as a fetch body directly:
    fetch(`http://${API_ENDPOINT}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: jsonData,
    }).then((response) => {
      if (response.status == 200) {
        navigate("/dashboard");
        toast({
          title: 'Login successeful',
          description: "Welcome to TealFleet",
          status: "success",
          position: "bottom",
          variant: "subtle"
        });
      } else {
        toast({
          title: 'Login error',
          description: "Wrong username or password.",
          status: "error",
          position: "bottom",
          variant: "subtle"
        });
      }
    });
  };
  return (
    <Card
      marginTop={"3em"}
      width={{
        base: "22em",
        sm: "25em",
        md: "32em",
        lg: "32em",
        xl: "32em",
        "2xl": "32em",
      }}
    >
      <CardHeader
        bg="#F4F7F4"
        flex="1"
        style={{ overflow: "hidden" }}
        height="100%"
      >
        <Center>
          <Heading margin={"0.5em"} size="xl" color={"teal.600"}>
            Login
          </Heading>
        </Center>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardBody>
          <Stack spacing="4">
            <Box marginTop={"1.5em"}>
              <Center>
                <Input
                  placeholder="Email"
                  type="text"
                  name="email"
                  size="md"
                  onChange={handleInputChange}
                  width={{
                    base: "25em",
                    sm: "20em",
                    md: "20em",
                    lg: "20em",
                    xl: "20em",
                    "2xl": "20em",
                  }}
                />
              </Center>
            </Box>
            <Box>
              <Center>
                <InputGroup
                  size="md"
                  width={{
                    base: "25em",
                    sm: "20em",
                    md: "20em",
                    lg: "20em",
                    xl: "20em",
                    "2xl": "20em",
                  }}
                >
                  <Input
                    name="password"
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    onChange={handleInputChange}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      colorScheme="teal"
                      onClick={handleClick}
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Center>
            </Box>
            <Box marginTop={"2.5em"}>
              <Center>
                <Button
                  type="submit"
                  colorScheme="teal"
                  width={{
                    base: "25em",
                    sm: "20em",
                    md: "20em",
                    lg: "20em",
                    xl: "20em",
                    "2xl": "20em",
                  }}
                >
                  login
                </Button>
              </Center>
            </Box>

            <Box marginBottom={"2.5em"}>
              <Center>
                <Button
                  variant="outline"
                  colorScheme="teal"
                  width={{
                    base: "25em",
                    sm: "20em",
                    md: "20em",
                    lg: "20em",
                    xl: "20em",
                    "2xl": "20em",
                  }}
                >
                  Forgot password
                </Button>
              </Center>
            </Box>
          </Stack>
        </CardBody>
      </form>
    </Card>
  );
}

export default LoginForm;
