import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";

export const History = () => {
  const { transactions } = useContext(GlobalState);

  return (
    <div>
      History
      {transactions.map((state) => (
        <p
          key={state.id}
          className={
            state.amount < 0
              ? "transactions-amounts-negative"
              : "transactions-amounts-positive"
          }
        >
          {state.trans} - ${state.amount}
        </p>
      ))}
    </div>
  );
};
