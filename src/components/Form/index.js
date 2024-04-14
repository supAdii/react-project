import React, { useState } from "react";
import "./main.scss"
import * as database from "../../database";

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

  const handleAddition = () => {
    database.write('id');
    console.log("New data passes is:", 'id')
  }

  return (
    <form onSubmit={handleSubmit} className="input__field">
      <div className="input__data">
        <label>Title:</label>
        <input
          type="text"
          value={where}
          onChange={(e) => setWhere(e.target.value)}
        />
      </div>

      <div className="input__data">
        <label>Date:</label>
        <input
          type="date"
          value={when}
          onChange={(e) => setWhen(e.target.value)}
        />
      </div>

      <div className="input__data">
        <label>Amount:</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button type="submit" onClick={handleAddition}>Add Expense</button>
    </form>
  );
};

const ExpenseItem = ({ expense, onDeleteExpense, onUpdateExpense }) => {
  const { id, where, amount, when } = expense;

  const handleDelete = () => {
    onDeleteExpense(id);
  };

  const handleUpdate = () => {
    database.update(id);
    onUpdateExpense(id);
  };

  return (
    <div className="output__box">
      <h2>You spent on: {where}</h2>
      <p>Date: {when}</p>
      <p>Amount Spent: ${amount}</p>
      <button onClick={handleDelete}>Delete Data</button>
      <button onClick={handleUpdate}>Edit Data</button>
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
  };

  return (
    <div className="main">
      <ExpenseForm onAddExpense={handleAddExpense} />
      <div  className="child1">
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
