import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [eneterdAmount, setEnteredAmount] = useState("");
  const [eneterdDate, setEnteredDate] = useState("");
  const [show, setShow] = useState(false);

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: eneterdAmount,
      date: new Date(eneterdDate),
    };
    console.log(expenseData);

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const expandHandler = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <form onSubmit={submitHandler}>
      {show ? (
        <>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                onChange={titleChangeHandler}
                value={enteredTitle}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
                value={eneterdAmount}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler}
                value={eneterdDate}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={expandHandler}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </>
      ) : (
        <button type="button" onClick={expandHandler}>
          Add New Expense
        </button>
      )}
    </form>
  );
};

export default ExpenseForm;
