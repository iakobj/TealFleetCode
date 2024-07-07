// React components
import * as React from "react";

// Chakra-UI components
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function FilterNothingFound() {
  return (
    <Alert status='info' marginTop={"1em"} borderRadius={"0.5em"} height={{ base: "6em", sm: "6em", md: "5em", lg: "4em", xl: "3.5em", "2xl": "3.5em" }}>
      <AlertIcon />
      <AlertTitle>Nothing found</AlertTitle>
      <AlertDescription>
        Oops! Looks like nothing matches your search criteria. Try resetting the filters to broaden your search.
      </AlertDescription>
    </Alert>
  );
}

export default FilterNothingFound;
