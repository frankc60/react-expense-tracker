import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalState);
  //globalState
  let amounts = transactions.map((item) => {
    return item.amount;
  });

  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  let total = amounts.reduce(reducer);

  return <div>Balance: ${total}</div>;
};
