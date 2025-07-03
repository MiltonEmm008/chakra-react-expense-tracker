import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function ExpenseView({ type, data }) {
  const cardBg = useColorModeValue(
    type === "expense" ? "accent.100" : "brand.100",
    type === "expense" ? "accent.700" : "brand.800"
  );
  const cardBorder = useColorModeValue(
    type === "expense" ? "accent.300" : "brand.300",
    type === "expense" ? "accent.500" : "brand.500"
  );
  const cardText = useColorModeValue(
    type === "expense" ? "accent.700" : "brand.800",
    type === "expense" ? "accent.100" : "brand.100"
  );
  const amountColor = useColorModeValue(
    type === "expense" ? "accent.600" : "brand.700",
    type === "expense" ? "accent.200" : "brand.200"
  );
  const cardBgHover = useColorModeValue(
    type === "expense" ? "accent.200" : "brand.200",
    type === "expense" ? "accent.600" : "brand.700"
  );

  return (
    <Box
      flex={1}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="md"
      mt={{ base: 4, md: 0 }}
      p={{ base: 4, md: 6 }}
      borderRadius="2xl"
      borderWidth={2}
      borderColor={cardBorder}
      transition="all 0.2s"
      minH="320px"
    >
      <Flex justifyContent={"space-between"} alignItems={"center"} mb={2}>
        <Heading size={"md"} color={cardText} fontFamily="heading">
          {type === "income" ? "Ingresos" : "Gastos"}
        </Heading>
      </Flex>
      {data.length === 0 && (
        <Text color="gray.400" mt={8} fontSize="lg">
          No hay {type === "income" ? "ingresos" : "gastos"} registrados.
        </Text>
      )}
      {data.map((item, index) => (
        <Flex
          key={`${item.description}-${index}`}
          bg={cardBg}
          mt={4}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={4}
          borderRadius="lg"
          borderWidth={1}
          borderColor={cardBorder}
          boxShadow="sm"
          transition="all 0.2s"
          _hover={{
            boxShadow: "lg",
            transform: "scale(1.03)",
            bg: cardBgHover,
          }}
        >
          <Text fontWeight="bold" color={cardText} fontSize="md">
            {item.description}
          </Text>
          <Text fontWeight="bold" color={amountColor} fontSize="lg">
            ${item.amount}
          </Text>
        </Flex>
      ))}
    </Box>
  );
}

export default ExpenseView;
