import React, { useState } from "react";
import * as database from "../../../database";

const ExpenseForm = ({ onAddExpense }) => {
  const [where, setWhere] = useState("");
  const [amount, setAmount] = useState("");
  const [when, setWhen] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!where || !amount || !when) return;
    const expense = {
      where,
      amount: +amount,
      when,
    };
    onAddExpense(expense);
    setWhere("");
    setAmount("");
    setWhen("");
  };

  return (
    <form onSubmit={handleSubmit} className="input__field">
      <div className="input__data">
        <label>Title</label>
        <input
          type="text"
          value={where}
          onChange={(e) => setWhere(e.target.value)}
        />
      </div>

      <div className="input__data">
        <label>Date</label>
        <input
          type="date"
          value={when}
          onChange={(e) => setWhen(e.target.value)}
        />
      </div>

      <div className="input__data">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button type="submit">Add Expense</button>
    </form>
  );
};

const ExpenseItem = ({ expense, onDeleteExpense }) => {
  const {where, amount, when } = expense;

  const handleDelete = (id) => {
    onDeleteExpense(id);
  };

  return (
    <div>
      <h2>You spent on: {where}</h2>
      <p>Date: {when}</p>
      <p>Amount Spent: ${amount}</p>
      <button onClick={handleDelete}>Delete Data</button>
    </div>
  );
};

export default function Form() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);

    database.write(expense);
    console.log("Saved data", expense);
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
    // database.deleteData(id);
    // console.log("The id that was removed is:", id);
  };

  return (
    <div className="main">
      <ExpenseForm onAddExpense={handleAddExpense} />
      <div>
        {expenses.map((expense, id) => (
          <ExpenseItem
            key={id}
            expense={expense}
            onDeleteExpense={handleDeleteExpense}
          />
        ))}
      </div>
    </div>
  );
}
