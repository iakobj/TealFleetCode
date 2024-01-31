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
import Dashboard, {DashboardDataLoader} from "./pages/Dashboard";

import Fleet, {FleetDataLoader} from "./pages/Fleet";

// Support
import Support from "./pages/Support";
import Contracts, {ContractsDataLoader} from "./pages/support/Contracts";

import Administration from "./pages/Administration";

// Authentication
import Login from "./pages/login";
import Register from "./pages/register";


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
        element: <Dashboard/>,
        loader: DashboardDataLoader,
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
  // Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <RouterProvider router={router} fallbackElement={<FallbackPage/>} />
    </ChakraProvider>
  );
}

export default App;
