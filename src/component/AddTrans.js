import React, { useContext, useState, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import { GlobalState } from "../context/GlobalState";

export const AddTrans = () => {
  const { addTransaction } = useContext(GlobalState);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [posneg, setPosneg] = useState("expense");
  const descInputRef = useRef();

  useEffect(() => {
    descInputRef.current.focus();
  }, [addTransaction]);

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
    <div className='alert alert-dark'>
      <h4 className='text-center'>Add Transaction</h4>
      <form onSubmit={onSubmitHandle} className='form-check'>
        <div className='row'>
          <div className='col'>
            <input
              type='text'
              ref={descInputRef}
              onChange={onChangeTxtHandler}
              placeholder='Description'
              value={text}
            />
          </div>
          <div className='col'>
            <input
              type='number'
              onChange={onChangeAmountHandler}
              step='0.01'
              placeholder='Amount'
              value={amount}
            />
          </div>
        </div>

        <div className='form-check'>
          <input
            type='radio'
            className='form-check-input'
            id='customRadio1'
            name='amountType'
            value='expense'
            checked={posneg === "expense"}
            onChange={() => setPosneg("expense")}
          />
          <label className='form-check-label' htmlFor='customRadio1'>
            expense
          </label>
        </div>

        <div className='form-check'>
          <input
            type='radio'
            className='form-check-input'
            id='customRadio2'
            name='amountType'
            value='income'
            checked={posneg === "income"}
            onChange={() => setPosneg("income")}
          />
          <label className='form-check-label' htmlFor='customRadio2'>
            income
          </label>
        </div>

        <input type='submit' className='btn btn-primary' />
      </form>
    </div>
  );
};
