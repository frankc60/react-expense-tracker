import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";

export const History = () => {
  const { transactions, formatMoney } = useContext(GlobalState);

  return (
    <div>
      <h3>History</h3>
      {transactions.map((state) => (
        <p
          key={state.id}
          className={
            state.amount < 0
              ? "transactions-amounts-negative"
              : "transactions-amounts-positive"
          }
        >
          {state.trans} {formatMoney(state.amount)}
        </p>
      ))}
    </div>
  );
};
