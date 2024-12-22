'use client'

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";

export function UIProvider ({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ChakraProvider value={defaultSystem}>
      {children}
    </ChakraProvider>
  );
}
