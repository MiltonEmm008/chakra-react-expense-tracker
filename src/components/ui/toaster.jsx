'use client'

import { useToast } from '@chakra-ui/react';
import * as React from 'react';

export function Toaster({ children }) {
  // Chakra UI v2 no requiere un provider especial para los toasts
  return children;
}

export { useToast };
