import { Box, Flex, Heading, Text, useColorModeValue, VStack } from "@chakra-ui/react";
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
      <VStack spacing={4} align="stretch">
        <Flex justifyContent={"space-between"} alignItems={"center"} mb={2}>
          <Heading size={"md"} color={cardText} fontFamily="heading">
            {type === "income" ? "Ingresos" : "Gastos"}
          </Heading>
        </Flex>
        
        <Text color={{ base: "gray.600", _dark: "gray.400" }} fontSize="sm">
          {type === "income" 
            ? "Aquí puedes ver todos tus ingresos registrados. Mantener un registro detallado de tus fuentes de ingresos te ayuda a planificar mejor tu presupuesto y establecer metas financieras realistas."
            : "Aquí puedes ver todos tus gastos registrados. El seguimiento detallado de tus gastos es fundamental para identificar patrones de consumo y encontrar oportunidades de ahorro."
          }
        </Text>

        {data.length === 0 && (
          <Box textAlign="center" py={8}>
            <Text color="gray.400" fontSize="lg" mb={2}>
              No hay {type === "income" ? "ingresos" : "gastos"} registrados.
            </Text>
            <Text color="gray.500" fontSize="sm">
              {type === "income" 
                ? "Comienza añadiendo tu primer ingreso para mantener un control completo de tus finanzas."
                : "Comienza añadiendo tu primer gasto para tener una visión completa de tus movimientos financieros."
              }
            </Text>
          </Box>
        )}
        
        {data.length > 0 && (
          <Text color={{ base: "gray.600", _dark: "gray.400" }} fontSize="xs" textAlign="center">
            Total de {type === "income" ? "ingresos" : "gastos"}: {data.length} {type === "income" ? "registro" : "registro"}{data.length !== 1 ? 's' : ''}
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
      </VStack>
    </Box>
  );
}

export default ExpenseView;
