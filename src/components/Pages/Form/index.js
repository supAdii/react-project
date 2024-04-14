import React, { useState, useEffect } from "react";
import * as database from "../../../database";
import "./main.scss";
import "../../../Styles/App.css";

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
        <label>Title:</label>
        <input
          type="text"
          value={where}
          onChange={(e) => setWhere(e.target.value)}
          placeholder="Enter where you spent your money."
          required
        />
      </div>

      <div className="input__data">
        <label>Choose the date:</label>
        <input
          type="date"
          value={when}
          onChange={(e) => setWhen(e.target.value)}
          required
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
          placeholder="Enter how much you spent."
          required
        />
      </div>

      <button type="submit">Add Expense</button>
    </form>
  );
};

const ExpenseItem = ({ expense, onDeleteExpense }) => {
  const { id, where, amount, when } = expense;

  const handleDelete = () => {
    onDeleteExpense(id);
  };

  return (
    <div className="output__box">
      <h2>You spent on: {where}</h2>
      <p>Date: {when}</p>
      <p>Amount Spent: ${amount}</p>
      <button onClick={handleDelete}>Delete Expense</button>
    </div>
  );
};

export default function Form() {
  const [expenses, setExpenses] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await database.load();
        console.log("Loaded Data:", fetchedData);
        setData(fetchedData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    database.write(expense);
    console.log("Saved data", expense);
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
    database.deleteFromDb(id);
  };

  const handleDataDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    // Delete from database
    database.deleteFromDb(id);
  };

  return (
    <div className="main">
      <ExpenseForm onAddExpense={handleAddExpense} />
      <div className="child1">
        {expenses.map((expense, id) => (
          <ExpenseItem
            key={id}
            expense={expense}
            onDeleteExpense={() => handleDeleteExpense(expense.id)}
          />
        ))}
      </div>

      <div className="section__page">
        <h3>Your Expenses:</h3>
        <ul className="sectionpage__div1">
          {data.map((val) => (
            <li className="mylisting" key={val.id}>
              <p>Total Spend: ${val.amount}</p>
              <p>On date {val.when}</p>
              <p>Spent At: {val.where}</p>
              <button onClick={() => handleDataDelete(val.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
