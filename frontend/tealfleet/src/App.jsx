// React components
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Root Layout scheme
import RootLayout from "./layouts/RootLayout";

// Fallback and Error elements
import FallbackPage from "./pages/FallbackPage";
import ErrorBoundary from "./pages/ErrorBoundary";

// Pages

// Dashboard
import Dashboard from "./pages/Dashboard";
import ApplianceSuits from "./pages/dashboard/ApplianceSuits";

import Fleet, {FleetDataLoader} from "./pages/Fleet";

// Support
import Support from "./pages/Support";
import Contracts from "./pages/support/Contracts";

import Administration from "./pages/Administration";

// Authentication
import Login from "./pages/login";
import Register from "./pages/register";

import Hardware from "./pages/dashboard/Hardware";

// ChakraProvider component
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {      
  path: "/",
  element: <RootLayout />,
  errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Dashboard/>,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "dashboard",
        element: <ApplianceSuits/>,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "dashboard/appliance-suits",
        element: <ApplianceSuits/>,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "dashboard/hardware",
        element: <Hardware/>,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "fleet",
        element: <Fleet/>,
        loader: FleetDataLoader,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "fleet/:vendor",
        element: <Fleet/>,
        loader: FleetDataLoader,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "support",
        element: <Support/>,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "support/contracts",
        element: <Contracts/>,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "administration",
        element: <Administration/>,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
  {
    path: "login",
    element: <Login/>,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "register",
    element: <Register/>,
    errorElement: <ErrorBoundary />,
  }
]);

function App() {
  // Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <RouterProvider router={router} fallbackElement={<FallbackPage/>} />
    </ChakraProvider>
  );
}

export default App;
