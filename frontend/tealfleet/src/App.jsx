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


// Dashboard
import Dashboard, {DashboardDataLoader} from "./pages/Dashboard";

import Fleet, {FleetDataLoader} from "./pages/Fleet";

// Support
import Contracts, {ContractsDataLoader} from "./pages/support/Contracts";

import Administration from "./pages/Administration";

// Authentication
import Login from "./pages/login";
import Register from "./pages/register";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Fonts from '../public/fonts/Fonts';
import theme from '../public/theme';

const router = createBrowserRouter([
  {      
  path: "/",
  element: <RootLayout />,
  errorElement: <ErrorBoundary />,
    children: [
      {
        path: "dashboard/:tenant?",
        element: <Dashboard/>,
        loader: DashboardDataLoader,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "fleet/:vendor?",
        element: <Fleet/>,
        loader: FleetDataLoader,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "support",
        element: <Contracts/>,
        loader: ContractsDataLoader,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "support/contracts",
        element: <Contracts/>,
        loader: ContractsDataLoader,
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
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <RouterProvider router={router} fallbackElement={<FallbackPage/>} />
    </ChakraProvider>
  );
}

export default App;
