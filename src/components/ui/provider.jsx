'use client'

import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import React from 'react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
    },
    accent: {
      50: '#ffe3e3',
      100: '#ffbdbd',
      200: '#ff9b9b',
      300: '#f86a6a',
      400: '#ef4e4e',
      500: '#e12d39',
      600: '#cf1124',
      700: '#ab091e',
      800: '#8a041a',
      900: '#610316',
    },
    darkBg: '#181A20',
    lightBg: '#F7FAFC',
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Inter, system-ui, sans-serif',
  },
});

export function Provider({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}
