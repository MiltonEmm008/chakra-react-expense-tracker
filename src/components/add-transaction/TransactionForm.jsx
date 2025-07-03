import React, { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { GlobalContext } from "@/context/GlobalContext";

function TransactionForm({ isOpen, onClose }) {
  const { formData, setFormData, value, setValue, handleFormSubmit } =
    useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();
    handleFormSubmit(formData);
  }

  function handleFormChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const modalBg = useColorModeValue("white", "gray.900");
  const border = useColorModeValue("brand.100", "gray.700");
  const btnBg = useColorModeValue("brand.600", "brand.400");
  const btnHover = useColorModeValue("brand.700", "brand.200");
  const btnColor = useColorModeValue("white", "gray.900");

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg={modalBg} color="inherit" borderRadius="2xl" borderWidth={2} borderColor={border}>
        <ModalHeader fontWeight="bold">Añadir transacción</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <FormControl mb={4} isRequired>
              <FormLabel>Descripción</FormLabel>
              <Input
                name="description"
                placeholder="Descripción de la transacción"
                onChange={handleFormChange}
                value={formData.description}
                focusBorderColor="brand.400"
                borderRadius="lg"
                size="lg"
                autoComplete="off"
                _focus={{ boxShadow: "0 0 0 2px #2196f3" }}
              />
            </FormControl>
            <FormControl mb={4} isRequired>
              <FormLabel>Monto</FormLabel>
              <Input
                type="number"
                placeholder="Monto de la transacción"
                name="amount"
                onChange={handleFormChange}
                value={formData.amount}
                focusBorderColor="brand.400"
                borderRadius="lg"
                size="lg"
                autoComplete="off"
                _focus={{ boxShadow: "0 0 0 2px #2196f3" }}
              />
            </FormControl>
            <FormControl as="fieldset" mb={4} isRequired>
              <FormLabel as="legend">Tipo</FormLabel>
              <RadioGroup value={value} onChange={setValue}>
                <Stack direction="row" spacing={6}>
                  <Radio
                    checked={formData.type === "income"}
                    value="income"
                    colorScheme="brand"
                    name="type"
                    onChange={handleFormChange}
                  >
                    Ingreso
                  </Radio>
                  <Radio
                    checked={formData.type === "expense"}
                    value="expense"
                    colorScheme="accent"
                    name="type"
                    onChange={handleFormChange}
                  >
                    Gasto
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose} _hover={{ bg: "gray.100", _dark: { bg: "gray.700" } }}>
              Cancelar
            </Button>
            <Button
              bg={btnBg}
              color={btnColor}
              _hover={{ bg: btnHover, transform: "scale(1.05)", boxShadow: "md" }}
              type="submit"
              onClick={onClose}
              borderRadius="lg"
              fontWeight="bold"
              px={6}
              py={2}
              transition="all 0.2s"
            >
              Añadir
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default TransactionForm;
