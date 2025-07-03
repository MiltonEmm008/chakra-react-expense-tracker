import { Button, HStack } from "@chakra-ui/react";
import React from "react";

export default function Demo() {
  return (
    <HStack spacing={4}>
      <Button colorScheme="blue">Demo 1</Button>
      <Button colorScheme="green">Demo 2</Button>
    </HStack>
  );
}
