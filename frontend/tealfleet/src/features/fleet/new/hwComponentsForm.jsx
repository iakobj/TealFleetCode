import * as React from "react";
import {
  Text,
  FormControl,
  Input,
  Box,
  HStack,
  Grid,
  GridItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function HwComponentsForm({ index, formData, onInputChange }) {
  return (
      <Tr fontSize="lg" marginTop={"0.35em"} textColor={"gray.700"}>
        <Td>{index + 1}</Td>

        <Td>
          <FormControl>
            <NumberInput
              defaultValue={formData.amount}
              max={999}
              min={1}
              keepWithinRange={true}
              focusBorderColor="teal.600"
              onChange={(value) =>
                onInputChange({ target: { name: "amount", value } })
              }
              value={formData.amount}
              variant='unstyled'
            >
              <NumberInputField name="amount" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </Td>
        <Td>
          <FormControl>
            <Input
              id="hw_part_make"
              name="hw_part_make"
              type="text"
              placeholder="Vendor"
              focusBorderColor="teal.600"
              onChange={onInputChange}
              value={formData.hw_part_make}
              variant='unstyled'
            />
          </FormControl>
        </Td>
        <Td>
          <FormControl>
            <Input
              id="hw_part_model"
              name="hw_part_model"
              type="text"
              placeholder="Model"
              focusBorderColor="teal.600"
              onChange={onInputChange}
              value={formData.hw_part_model}
              variant='unstyled'
            />
          </FormControl>
        </Td>
        <Td>
          <FormControl>
            <Input
              id="hw_part_number"
              name="hw_part_number"
              type="text"
              placeholder="Part Number"
              focusBorderColor="teal.600"
              onChange={onInputChange}
              value={formData.hw_part_number}
              variant='unstyled'
            />
          </FormControl>
        </Td>
        <Td>
          <FormControl>
            <Input
              id="hw_serial_no"
              name="hw_serial_no"
              type="text"
              placeholder="Serial Number"
              focusBorderColor="teal.600"
              onChange={onInputChange}
              value={formData.hw_serial_no}
              variant='unstyled'
            />
          </FormControl>
        </Td>
        <Td>
          <FormControl>
            <Input
              id="hw_asset_tag"
              name="hw_asset_tag"
              type="text"
              placeholder="Asset Tag"
              focusBorderColor="teal.600"
              onChange={onInputChange}
              value={formData.hw_asset_tag}
              variant='unstyled'
            />
          </FormControl>
        </Td>
      </Tr>
  );
}

export default HwComponentsForm;
