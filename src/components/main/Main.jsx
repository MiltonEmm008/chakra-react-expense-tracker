import { Button, Flex, useDisclosure, Grid, useColorModeValue } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Summary from "../summary/Summary";
import ExpenseView from "../expense-view/ExpenseView";
import { GlobalContext } from "@/context/GlobalContext";

function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
    allTransactions,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransactions.forEach((item) => {
      item.type === "income"
        ? (income += parseFloat(item.amount))
        : (expense += parseFloat(item.amount));
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransactions,setTotalExpense,setTotalIncome]);

  const btnBg = useColorModeValue("brand.600", "brand.400");
  const btnHover = useColorModeValue("brand.700", "brand.200");
  const btnColor = useColorModeValue("white", "gray.900");

  return (
    <Flex textAlign={"center"} flexDirection={"column"} px={{ base: 0, md: 5 }}>
      <Flex alignItems={"center"} justifyContent={"flex-end"} mt={{ base: 4, md: 8 }} mb={4}>
        <Button
          onClick={onOpen}
          bg={btnBg}
          _hover={{ bg: btnHover, transform: "scale(1.05)", boxShadow: "md" }}
          color={btnColor}
          size="lg"
          px={8}
          py={6}
          borderRadius="xl"
          fontWeight="bold"
          fontSize="md"
          transition="all 0.2s"
        >
          Añadir transacción
        </Button>
      </Flex>

      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      />

      <Grid
        w="full"
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={6}
        mt={8}
        alignItems="flex-start"
      >
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "expense")}
          type={"expense"}
        />
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "income")}
          type={"income"}
        />
      </Grid>
    </Flex>
  );
}

export default Main;
