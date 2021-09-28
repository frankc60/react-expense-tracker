import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";

export const History = () => {
  const { transactions, formatMoney, clearTransactions } =
    useContext(GlobalState);

  return (
    <div>
      <h4 className='text-center'>History</h4>
      <div className='history'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Description</th>
              <th scope='col'>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((state) => (
              <tr key={state.id}>
                <td className={state.amount < 0 ? "bg-danger" : "bg-success"}>
                  {state.trans}
                </td>
                <td className={state.amount < 0 ? "bg-danger" : "bg-success"}>
                  {formatMoney(state.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className='btn btn-warning'
        onClick={() => {
          clearTransactions();
        }}
      >
        Clear All History
      </button>
    </div>
  );
};
