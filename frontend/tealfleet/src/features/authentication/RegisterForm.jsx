// React components
import * as React from "react";

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

function RegisterForm() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Card
      marginTop={"3em"}
      width={{
        base: "25em",
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
            Request access
          </Heading>
        </Center>
      </CardHeader>

      <CardBody>
        <Stack spacing="4">
          <Box marginTop={"1.5em"}>
            <Center>
              <Input
                placeholder="Email"
                size="md"
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
              <Input
                placeholder="First name"
                size="md"
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
              <Input
                placeholder="Last name"
                size="md"
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
              <Input
                placeholder="Phone number"
                size="md"
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
              <Input
                placeholder="Company"
                size="md"
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
              <Input
                placeholder="Title"
                size="md"
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
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
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
          <Box marginTop={"2.5em"} marginBottom={"1em"}>
            <Center>
              <Button
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
                Request access
              </Button>
            </Center>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default RegisterForm;
