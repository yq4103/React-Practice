import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [expand, setExpand] = useState(false);

  const expandHandler = () => {
    expand ? setExpand(false) : setExpand(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {!expand && <button onClick={expandHandler}>Add New Expense</button>}
      {expand && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={expandHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
