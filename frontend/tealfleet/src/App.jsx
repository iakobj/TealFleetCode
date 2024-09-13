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


import NewAsset from "./features/fleet/new/NewAsset";
import SpareParts, {SparePartsDataLoader} from "./pages/SpareParts";

// Support
import Contracts, {ContractsDataLoader} from "./pages/support/Contracts";
import NewContract from "./features/contracts/new/NewContract";

import Administration from "./pages/Administration";

// Authentication
import Login from "./pages/Login";
import Register from "./pages/Register";

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
        path: "assets/fleet",
        element: <Fleet/>,
        loader: FleetDataLoader,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "assets/spareparts",
        element: <SpareParts/>,
        loader: SparePartsDataLoader,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "assets/new",
        element: <NewAsset/>,
        loader: ContractsDataLoader,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "support/contracts/new",
        element: <NewContract/>,
        loader: FleetDataLoader,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "support/contracts",
        element: <Contracts/>,
        loader: ContractsDataLoader,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "administration/:something?",
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
