import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
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
          <Heading size="lg" mb={2} color={balanceColor} fontFamily="heading">
            Balance: ${totalIncome - totalExpense}
          </Heading>
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
      <TransactionForm onClose={onClose} isOpen={isOpen} />
    </Box>
  );
}

export default Summary;
