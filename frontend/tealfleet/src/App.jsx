// React components
import * as React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Root Layout scheme
import RootLayout from "./layouts/RootLayout";

// Pages
import ErrorBoundary from "./pages/ErrorBoundary";

// ChakraProvider component
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="*"
      element={<RootLayout />}
      errorElement={<ErrorBoundary />}
    ></Route>
  )
);

function App() {
  // Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </ChakraProvider>
  );
}

export default App;
