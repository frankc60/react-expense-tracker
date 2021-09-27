import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

let initialState = [
  {
    trans: "coffee",
    amount: -1.25,
    id: "aaa",
  },
  {
    trans: "fuel",
    amount: -25,
    id: "bbb",
  },
  {
    trans: "salary",
    amount: 150,
    id: "ccc",
  },
];

export const GlobalState = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [trans, setTrans] = useState(initialState);
  const addTransaction = (txt, amount, posneg) => {
    console.log(`running addTransaction(${txt},${amount},${posneg})`);

    let newArray = [
      ...trans,
      { trans: txt, amount: parseFloat(amount), id: uuidv4() },
    ];
    setTrans(newArray);
    console.log(newArray);
  };

  return (
    <GlobalState.Provider value={{ transactions: trans, addTransaction }}>
      {children}
    </GlobalState.Provider>
  );
};
