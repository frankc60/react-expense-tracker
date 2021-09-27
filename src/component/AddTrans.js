import React, { useContext, useState } from "react";
import { GlobalState } from "../context/GlobalState";

export const AddTrans = () => {
  const { addTransaction } = useContext(GlobalState);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [posneg, setPosneg] = useState("expense");

  const onSubmitHandle = (e) => {
    e.preventDefault();
    let am = null;
    posneg === "expense" ? (am = amount * -1) : (am = amount * 1);
    setAmount("");

    addTransaction(text, am, posneg);
    setText("");
  };

  const onChangeAmountHandler = (e) => {
    setAmount(e.target.value);
  };

  const onChangeTxtHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmitHandle}>
        <input
          type='text'
          onChange={onChangeTxtHandler}
          placeholder='Description'
          value={text}
        />
        <input
          type='radio'
          name='amountType'
          value='expense'
          checked={posneg === "expense"}
          onChange={() => setPosneg("expense")}
        />
        expense
        <input
          type='radio'
          name='amountType'
          value='income'
          checked={posneg === "income"}
          onChange={() => setPosneg("income")}
        />
        income
        <input
          type='number'
          onChange={onChangeAmountHandler}
          step='0.01'
          placeholder='Amount'
          value={amount}
        />
        <input type='submit' />
      </form>
    </div>
  );
};
