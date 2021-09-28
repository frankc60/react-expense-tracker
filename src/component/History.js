import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";

export const History = () => {
  const { transactions, formatMoney, clearTransactions } =
    useContext(GlobalState);

  return (
    <div>
      <h4 className='text-center'>History</h4>
      <div className='history'>
        <form>
          <table className='table table-bordered table-hover'>
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
                  <td>
                    <div className='form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='customCheck'
                        name='example1'
                      />
                      <label className='form-check-label' htmlFor='customCheck'>
                        Select Item
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
      <button
        className='btn btn-warning my-2'
        onClick={() => {
          clearTransactions();
        }}
      >
        Clear All History
      </button>
    </div>
  );
};
