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
} from "@chakra-ui/react";

function HwComponentsForm({ index, formData, onInputChange }) {
  return (
    <Grid templateColumns="repeat(24, 1fr)" gap={6} marginBottom="1em">
      <GridItem colSpan={1} colStart={1} marginTop={"0.0em"}>
        <Text fontSize="lg" marginTop={"0.35em"} textColor={"gray.700"}>
          <HStack>
            <Box>{index + 1}.</Box>
          </HStack>
        </Text>
      </GridItem>
      <GridItem colSpan={3} colStart={2}>
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
          >
            <NumberInputField name="amount" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </GridItem>
      <GridItem colSpan={4}>
        <FormControl>
          <Input
            id="hw_part_make"
            name="hw_part_make"
            type="text"
            placeholder="Vendor"
            focusBorderColor="teal.600"
            onChange={onInputChange}
            value={formData.hw_part_make}
          />
        </FormControl>
      </GridItem>
      <GridItem colSpan={4}>
        <FormControl>
          <Input
            id="hw_part_model"
            name="hw_part_model"
            type="text"
            placeholder="Model"
            focusBorderColor="teal.600"
            onChange={onInputChange}
            value={formData.hw_part_model}
          />
        </FormControl>
      </GridItem>
      <GridItem colSpan={4}>
        <FormControl>
          <Input
            id="hw_part_number"
            name="hw_part_number"
            type="text"
            placeholder="Part Number"
            focusBorderColor="teal.600"
            onChange={onInputChange}
            value={formData.hw_part_number}
          />
        </FormControl>
      </GridItem>
      <GridItem colSpan={4}>
        <FormControl>
          <Input
            id="hw_serial_no"
            name="hw_serial_no"
            type="text"
            placeholder="Serial Number"
            focusBorderColor="teal.600"
            onChange={onInputChange}
            value={formData.hw_serial_no}
          />
        </FormControl>
      </GridItem>
      <GridItem colSpan={4}>
        <FormControl>
          <Input
            id="hw_asset_tag"
            name="hw_asset_tag"
            type="text"
            placeholder="Asset Tag"
            focusBorderColor="teal.600"
            onChange={onInputChange}
            value={formData.hw_asset_tag}
          />
        </FormControl>
      </GridItem>
    </Grid>
  );
}

export default HwComponentsForm;
