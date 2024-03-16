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
      bg="#fdfdfd"
      variant="outline"
      marginTop={"3em"}
      marginBottom="5em"
      width={{
        base: "22em",
        sm: "24em",
        md: "24em",
        lg: "24em",
        xl: "24em",
        "2xl": "24em",
      }}
    >
      <CardHeader>
        <Center>
          <Heading margin={"0.5em"} size="lg" color={"teal.600"} fontWeight="500">
            Request access
          </Heading>
        </Center>
      </CardHeader>

      <CardBody>
        <Stack spacing="4">
          <Box>
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
                  placeholder="Password"
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
