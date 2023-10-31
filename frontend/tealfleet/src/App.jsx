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
import Dashboard from "./pages/Dashboard";
import Fleet from "./pages/Fleet";
import Support from "./pages/Support";
import Marketplace from "./pages/Marketplace";
import Administration from "./pages/Administration";

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
        errorElement: <ErrorBoundary />,
      },
      {
        path: "fleet",
        element: <Fleet/>,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "support",
        element: <Support/>,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "marketplace",
        element: <Marketplace/>,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "administration",
        element: <Administration/>,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

function App() {
  // Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </ChakraProvider>
  );
}

export default App;
