import {
  Button,
  ChakraProvider,
  extendBaseTheme,
  extendTheme,
} from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import { DNDProvider } from "./Context/DNDContext";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";
import Deisgn from "./Pages/Design";
import NotFound from "./Pages/NotFound";
import Create from "./Pages/Create";
import DataContextProvider from "./Context/DataContext";
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/design/:templateId", element: <Deisgn /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/create", element: <Create /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => (
  <DNDProvider>
    <DataContextProvider>
      <ChakraProvider portalZIndex={9999} theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </DataContextProvider>
  </DNDProvider>
);

export default App;
