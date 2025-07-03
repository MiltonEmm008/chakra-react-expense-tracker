import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    type: "income",
    amount: 0,
    description: "",
  });

  const [value, setValue] = useState("income");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);

  function handleFormSubmit(currFormData) {

    console.log(currFormData)
    if (!currFormData.description || !currFormData.amount) return;

    setAllTransactions([
      ...allTransactions,
      { ...currFormData, id: Date.now() },
    ]);

    
  }

  console.log(allTransactions)

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        value,
        setValue,
        allTransactions,
        setAllTransactions,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
