import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ui/color-mode";
import "./App.css";
import Main from "./components/main/Main";

function App() {
  return (
    <Container
      maxW={"container.xl"}
      minH={"100vh"}
      px={{ base: 2, md: 6 }}
      py={{ base: 2, md: 6 }}
      bg={{ base: "lightBg", _dark: "darkBg" }}
      transition="background 0.3s"
    >
      <Flex direction="column" minH="100vh">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          py={4}
          mb={4}
        >
          <VStack align="start" spacing={1}>
            <Heading
              as="h1"
              size="lg"
              color={{ base: "brand.700", _dark: "brand.200" }}
              fontFamily="heading"
              letterSpacing="tight"
              fontWeight="extrabold"
              transition="color 0.3s"
            >
              Smart Expense Tracker
            </Heading>
            <Text
              fontSize="sm"
              color={{ base: "gray.600", _dark: "gray.400" }}
              maxW="400px"
            >
              Controla tus gastos e ingresos fácilmente con nuestra aplicación de gestión financiera personal
            </Text>
          </VStack>
          <ColorModeButton />
        </Flex>
        <Box flex={1} w="full">
          <Main />
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
