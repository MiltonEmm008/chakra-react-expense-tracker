import { Box, Flex, Heading, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import TransactionForm from "../add-transaction/TransactionForm";
import TransactionChartSummary from "../chart/TransactionChartSummary";

function Summary({ onClose, isOpen, totalExpense, totalIncome }) {
  const bg = useColorModeValue("white", "gray.900");
  const border = useColorModeValue("brand.100", "gray.700");
  const balanceColor = useColorModeValue("brand.700", "brand.200");
  const incomeColor = useColorModeValue("brand.600", "brand.300");
  const expenseColor = useColorModeValue("accent.600", "accent.200");

  return (
    <Box
      p={{ base: 4, md: 8 }}
      borderWidth={2}
      borderColor={border}
      borderRadius="2xl"
      background={bg}
      boxShadow="lg"
      mb={8}
      transition="all 0.2s"
    >
      <VStack spacing={6} align="stretch">
        <Box>
          <Heading size="md" mb={2} color={{ base: "gray.700", _dark: "gray.300" }}>
            Análisis de tu Situación Financiera
          </Heading>
          <Text color={{ base: "gray.600", _dark: "gray.400" }} fontSize="sm">
            El resumen financiero te proporciona una visión clara de tu balance actual, mostrando 
            la diferencia entre tus ingresos totales y gastos acumulados. Esta información es fundamental 
            para tomar decisiones financieras informadas y mantener un control efectivo de tu presupuesto personal.
          </Text>
        </Box>

        <Flex
          w="full"
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap={8}
        >
          <Flex
            flex={1}
            w="full"
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap={6}
          >
            <Box textAlign="center">
              <Heading size="lg" mb={2} color={balanceColor} fontFamily="heading">
                Balance: ${totalIncome - totalExpense}
              </Heading>
              <Text color={{ base: "gray.600", _dark: "gray.400" }} fontSize="sm">
                Tu balance actual representa la diferencia entre ingresos y gastos. 
                Un balance positivo indica que estás gastando menos de lo que ganas.
              </Text>
            </Box>
            <Flex
              justifyContent="space-evenly"
              alignItems="center"
              bg={useColorModeValue("brand.50", "gray.800")}
              w="full"
              h="80px"
              borderRadius="lg"
              borderWidth={1}
              borderColor={border}
              mb={2}
            >
              <Flex direction="column" align="center">
                <Heading color={incomeColor} size="md">${totalIncome}</Heading>
                <Text color={incomeColor} fontWeight="medium">Ingresos</Text>
              </Flex>
            </Flex>
            <Flex
              justifyContent="space-evenly"
              alignItems="center"
              bg={useColorModeValue("accent.50", "gray.800")}
              w="full"
              h="80px"
              borderRadius="lg"
              borderWidth={1}
              borderColor={border}
            >
              <Flex direction="column" align="center">
                <Heading color={expenseColor} size="md">${totalExpense}</Heading>
                <Text color={expenseColor} fontWeight="medium">Gastos</Text>
              </Flex>
            </Flex>
          </Flex>
          <Box
            flex={1}
            mt={{ base: 8, md: 0 }}
            w={{ base: "100%", md: "320px" }}
            h={{ base: "220px", md: "320px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <TransactionChartSummary expense={totalExpense} income={totalIncome} />
          </Box>
        </Flex>

        <Box>
          <Text color={{ base: "gray.600", _dark: "gray.400" }} fontSize="sm" textAlign="center">
            El gráfico circular muestra la proporción de tus ingresos versus gastos, 
            ayudándote a visualizar rápidamente la distribución de tus finanzas. 
            Utiliza esta información para identificar áreas de mejora en tu gestión financiera.
          </Text>
        </Box>
      </VStack>
      <TransactionForm onClose={onClose} isOpen={isOpen} />
    </Box>
  );
}

export default Summary;
