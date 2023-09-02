// React components
import * as React from "react";
import { Outlet } from "react-router-dom";

// Routes and Components
import Header from "./header/Header";

// Chakra-UI components
import { Grid, GridItem, Container } from "@chakra-ui/react";

function RootLayout() {
  return (
    <Container maxWidth={"1600px"}>
      <Grid
        marginLeft={{ base: "-16px", sm: "-16px", md: "0px" }}
        marginRight={{ base: "-16px", sm: "-16px", md: "0px" }}
        templateColumns="repeat(12, 1fr)"
      >
        <GridItem
          as="header"
          colSpan={{ base: 12, sm: 12, md: 12 }}
          colStart={{ base: 1, sm: 1, md: 1 }}
        >
          <Header />
        </GridItem>

        <GridItem
          as="main"
          marginBottom={"1em"}
          colSpan={{ base: 12, sm: 12, md: 12 }}
          colStart={{ base: 1, sm: 1, md: 1 }}
        >
          <Outlet />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default RootLayout;
