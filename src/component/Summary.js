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
    <>
      <h4 className='text-center'>Summary</h4>
      <div className='row justify-content-center'>
        <div className='col-3 mx-auto'>Income {formatMoney(postotal)}</div>
        <div className='col-3 mx-auto'>Expense {formatMoney(negtotal)}</div>
      </div>
    </>
  );
};
