import * as React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLoaderData, useSearchParams } from "react-router-dom";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Button,
  Input,
  Textarea,
  Box,
  Text,
  Flex,
  Spacer,
  HStack,
  SimpleGrid,
  GridItem,
  Wrap,
  WrapItem,
  Card,
  Hide,
  IconButton,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

import {
  CloseIcon,
  ArrowForwardIcon,
  RepeatIcon,
  ArrowBackIcon,
  AddIcon,
} from "@chakra-ui/icons";

// import location of the API server
import { API_ENDPOINT } from "../../constants/apiEndpoint";

function AddAssetsToContracts({ isOpen, onClose }) {

    const steps = [
        { title: "Create contract", description: "Contract Information" },
        { title: "Add assets", description: "Search & Select assets" },
      ];
    
      const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
      });


  return (
    <>
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={"full"}
      scrollBehavior={"inside"}
    >
      <ModalOverlay bg="blackAlpha.500" />
      <ModalContent>
        <ModalHeader bg="#f4f7f4" >ADD ASSETS TO THE CONTRACT</ModalHeader>
        <ModalCloseButton marginTop="0.5em" />
        <ModalBody>
        <Card marginBottom={"1em"} padding={"0.5em"}>
        <Stepper index={activeStep} colorScheme='teal'>
                {steps.map((step, index) => (
                  <Step key={index}>
                    <StepIndicator>
                      <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                      />
                    </StepIndicator>

                    <Box flexShrink="0">
                      <StepTitle>{step.title}</StepTitle>
                      <StepDescription>{step.description}</StepDescription>
                    </Box>

                    <StepSeparator />
                  </Step>
                ))}
              </Stepper>
              </Card>
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
            <Wrap>
              <WrapItem>
                <IconButton
                  aria-label="Reset filter"
                  icon={<RepeatIcon />}
                  size={"sm"}
                  colorScheme={"teal"}
                  marginLeft={"0.6em"}
                />
              </WrapItem>

              <WrapItem marginLeft="0.5em">
                <FormControl>
                  <Select
                    placeholder="Vendor"
                    id="vendor"
                    name="vendor"
                    size="sm"
                    w={{ base: "7em", sm: "7em", md: "7em", lg: "8em" }}
                  ></Select>
                </FormControl>
              </WrapItem>
              <WrapItem marginLeft="0.5em">
                <FormControl>
                  <Select
                    placeholder="Tenant"
                    id="tenant"
                    name="tenant"
                    size="sm"
                    w={{ base: "7em", sm: "7em", md: "7em", lg: "8em" }}
                  ></Select>
                </FormControl>
              </WrapItem>
              <WrapItem marginLeft="0.5em">
                <FormControl>
                  <Select
                    placeholder="Software"
                    size="sm"
                    w={{ base: "7em", sm: "7em", md: "7em", lg: "8em" }}
                    id="swmodel"
                    name="swmodel"
                  ></Select>
                </FormControl>
              </WrapItem>
              <WrapItem marginLeft="0.5em">
                <FormControl>
                  <Select
                    placeholder="Hardware"
                    size="sm"
                    w={{ base: "7em", sm: "7em", md: "7em", lg: "8em" }}
                    id="hwmodel"
                    name="hwmodel"
                  ></Select>
                </FormControl>
              </WrapItem>
              <WrapItem marginLeft="0.5em">
                <FormControl>
                  <Select
                    placeholder="Site"
                    size="sm"
                    w={{ base: "7em", sm: "7em", md: "7em", lg: "8em" }}
                    id="sitename"
                    name="sitename"
                  ></Select>
                </FormControl>
              </WrapItem>
            </Wrap>
          </Card>

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
                <Thead>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th>multiply by</Th>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th>multiply by</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td>30.48</Td>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td>0.91444</Td>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td>0.91444</Td>
                  </Tr>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td>30.48</Td>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td>0.91444</Td>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td>0.91444</Td>
                  </Tr>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td>30.48</Td>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td>0.91444</Td>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td>0.91444</Td>
                  </Tr>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td>30.48</Td>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td>0.91444</Td>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td>0.91444</Td>
                  </Tr>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td>30.48</Td>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td>0.91444</Td>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td>0.91444</Td>
                  </Tr>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td>30.48</Td>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td>0.91444</Td>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td>0.91444</Td>
                  </Tr>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td>30.48</Td>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td>0.91444</Td>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td>0.91444</Td>
                  </Tr>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td>30.48</Td>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td>0.91444</Td>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td>0.91444</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Card>

          <Card
            marginTop="1em"
            paddingTop="0.6em"
            paddingBottom="0.6em"
            variant="outline"
            bg="#fdfdfd"
            borderRadius={"0.6em 0.6em 0.6em 0.6em"}
          >
            <Wrap>
              <WrapItem>
                <IconButton
                  marginRight={"0.6em"}
                  aria-label="Reset filter"
                  icon={<ArrowBackIcon />}
                  size={"sm"}
                  colorScheme={"teal"}
                  marginLeft={"0.6em"}
                />
              </WrapItem>
              <WrapItem marginTop="0.3em">
                <Stack direction="row"></Stack>
              </WrapItem>
              <WrapItem>
                <IconButton
                  marginRight={"0.6em"}
                  aria-label="Reset filter"
                  icon={<ArrowForwardIcon />}
                  size={"sm"}
                  colorScheme={"teal"}
                  marginLeft={"0.6em"}
                />
              </WrapItem>
              <Spacer />
              <WrapItem marginRight="1em" marginTop="0.2em">
                <Text>Found assets</Text>
              </WrapItem>
            </Wrap>
          </Card>
        </ModalBody>

        <ModalFooter bg="#f4f7f4" >
          <Button
            marginRight="1em"
            leftIcon={<CloseIcon />}
            size="sm"
            variant="ghost"
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
          <Button
            type="submit"
            rightIcon={<ArrowForwardIcon />}
            size="sm"
            colorScheme="teal"
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  );
}

export default AddAssetsToContracts;
