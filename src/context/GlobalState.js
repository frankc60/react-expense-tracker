import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const LOCALSTORAGE_KEY = "expenseTrackerApp";

const localStore = localStorage.getItem(LOCALSTORAGE_KEY);

//run to clear ALL localStorage
//localStorage.clear();

console.log(`localStore: ${localStore}`);
let initialState = [];
if (localStore) {
  //localstorage is stored as a string, so need to JSON parse.
  initialState = JSON.parse(localStore);
} else {
  //set some dummy data, as nothing stored.
  console.log("localstorage doesnt exists");
  initialState = [
    {
      trans: "coffee",
      amount: -1.25,
      id: "aaa",
    },
    {
      trans: "fuel",
      amount: -2.5,
      id: "bbb",
    },
    {
      trans: "Scratch Ticket",
      amount: 5,
      id: "ccc",
    },
  ];
}

export const GlobalState = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [trans, setTrans] = useState(initialState);

  useEffect(() => {
    //set localstorage, just stringify as trans is an array of objects.
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(trans));
  });
  //ss
  const formatMoney = (money) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(money);
  };

  const addTransaction = (txt, amount, posneg) => {
    //console.log(`running addTransaction(${txt},${amount},${posneg})`);

    let newArray = [
      ...trans,
      { trans: txt, amount: parseFloat(amount), id: uuidv4() },
    ];
    setTrans(newArray);
    console.log(newArray);
    //localstorage can be set here, or in a useEffect, when 'trans' changes.
    // localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newArray));
  };

  return (
    <GlobalState.Provider
      value={{ transactions: trans, addTransaction, formatMoney }}
    >
      {children}
    </GlobalState.Provider>
  );
};
