import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "services/queryClient";
import { ChakraProvider, theme } from "@chakra-ui/react";

function App() {
  return <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <Router />
      </BrowserRouter>
      </QueryClientProvider>
  </ChakraProvider>;
}

export default App;
