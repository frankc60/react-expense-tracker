import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";

export const Summary = () => {
  const { transactions, formatMoney } = useContext(GlobalState);

  let negAmounts = transactions.map((item) => {
    return item.amount < 0 ? item.amount : null;
  });

  let posAmounts = transactions.map((item) => {
    return item.amount > 0 ? item.amount : null;
  });

  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  let negtotal = negAmounts.reduce(reducer);
  let postotal = posAmounts.reduce(reducer);

  return (
    <div>
      <h3>Summary</h3>
      Expenses: {formatMoney(negtotal)} Income: {formatMoney(postotal)}
    </div>
  );
};
