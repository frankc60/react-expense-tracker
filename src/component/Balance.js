import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";

export const Balance = () => {
  const { transactions, formatMoney } = useContext(GlobalState);

  //loop through array of amounts and load them all into a new array
  let amounts = transactions.map((item) => {
    return item.amount;
  });

  //use a JS Reducer to add up all items in the array.
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  let total = amounts.reduce(reducer);

  //output total amount
  return <h4 className='text-center'>Balance: {formatMoney(total)}</h4>;
};
