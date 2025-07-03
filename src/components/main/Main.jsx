import { Button, Flex, Heading, useDisclosure, Grid, useColorModeValue, Text, VStack, Box, HStack, Link } from "@chakra-ui/react";
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
  const linkColor = useColorModeValue("brand.600", "brand.300");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <VStack spacing={6} align="stretch">
      {/* Navegación interna */}
      <Box
        bg={useColorModeValue("gray.50", "gray.800")}
        p={4}
        borderRadius="lg"
        borderWidth={1}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Text fontSize="sm" fontWeight="medium" mb={2} color={{ base: "gray.700", _dark: "gray.300" }}>
          Navegación rápida:
        </Text>
        <HStack spacing={4} flexWrap="wrap">
          <Link
            color={linkColor}
            onClick={() => scrollToSection('transactions')}
            cursor="pointer"
            _hover={{ textDecoration: 'underline' }}
            fontSize="sm"
          >
            Gestión de Transacciones
          </Link>
          <Link
            color={linkColor}
            onClick={() => scrollToSection('summary')}
            cursor="pointer"
            _hover={{ textDecoration: 'underline' }}
            fontSize="sm"
          >
            Resumen Financiero
          </Link>
          <Link
            color={linkColor}
            onClick={() => scrollToSection('details')}
            cursor="pointer"
            _hover={{ textDecoration: 'underline' }}
            fontSize="sm"
          >
            Detalle de Transacciones
          </Link>
        </HStack>
      </Box>

      <Box id="transactions">
        <Heading as="h2" size="md" mb={2} color={{ base: "gray.700", _dark: "gray.300" }}>
          Gestión de Transacciones
        </Heading>
        <Text color={{ base: "gray.600", _dark: "gray.400" }} mb={4}>
          Añade nuevas transacciones para mantener un control preciso de tus finanzas personales. 
          Registra tanto ingresos como gastos para tener una visión completa de tu situación económica.
        </Text>
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
      </Box>

      <Box id="summary">
        <Heading as="h2" size="md" mb={2} color={{ base: "gray.700", _dark: "gray.300" }}>
          Resumen Financiero
        </Heading>
        <Text color={{ base: "gray.600", _dark: "gray.400" }} mb={4}>
          Visualiza tu balance actual, total de ingresos y gastos con gráficos interactivos que te ayudan 
          a entender mejor tu situación financiera.
        </Text>
        <Summary
          totalExpense={totalExpense}
          totalIncome={totalIncome}
          isOpen={isOpen}
          onClose={onClose}
        />
      </Box>

      <Box id="details">
        <Heading as="h2" size="md" mb={2} color={{ base: "gray.700", _dark: "gray.300" }}>
          Detalle de Transacciones
        </Heading>
        <Text color={{ base: "gray.600", _dark: "gray.400" }} mb={4}>
          Revisa todas tus transacciones organizadas por tipo. Mantén un historial completo de tus 
          movimientos financieros para un mejor control de tu presupuesto.
        </Text>
        <Grid
          w="full"
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={6}
          mt={8}
          alignItems="flex-start"
        >
          <Box>
            <Heading as="h3" size="sm" mb={2} color={{ base: "gray.700", _dark: "gray.300" }}>
              Gastos Registrados
            </Heading>
            <ExpenseView
              data={allTransactions.filter((item) => item.type === "expense")}
              type={"expense"}
            />
          </Box>
          <Box>
            <Heading as="h3" size="sm" mb={2} color={{ base: "gray.700", _dark: "gray.300" }}>
              Ingresos Registrados
            </Heading>
            <ExpenseView
              data={allTransactions.filter((item) => item.type === "income")}
              type={"income"}
            />
          </Box>
        </Grid>
      </Box>
    </VStack>
  );
}

export default Main;
