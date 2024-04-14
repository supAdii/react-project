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
      amount,
      when,
    };
    onAddExpense(expense);
    setWhere("");
    setAmount("");
    setWhen("");
  };

  const handleFormClear = (e) => {
    e.preventDefault();

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
          min="1"
          step="10"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter how much you spent."
          required
        />
      </div>

      <button type="submit">Add Expense</button>
      <button onClick={handleFormClear}>Clear</button>
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

export default function Form({ id }) {
  const [expenses, setExpenses] = useState([]);
  const [data, setData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

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

  const handleDeleteExpense = () => {
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

  const calculateTotalAmount = () => {
    let totalVal = data.reduce(
      (total, expense) => total + parseFloat(expense.amount),
      0
    );
    // console.log("The total is:", totalVal);
    setTotalAmount(totalVal);
  };

  return (
    <div className="main">
      <ExpenseForm onAddExpense={handleAddExpense} />
      <div className="child1">
        {expenses.map((expense, id) => (
          <ExpenseItem
            key={id}
            expense={expense}
            onDeleteExpense={handleDeleteExpense}
          />
        ))}
      </div>

      <div className="section__page">
        <h3>Your Expenses:</h3>
        <ul className="sectionpage__div1">
          {data.map((val, index) => (
            <li className="mylisting" key={index}>
              <p>Total Spend: ${val.amount}</p>
              <p>On date {val.when}</p>
              <p>Spent At: {val.where}</p>
              <button onClick={handleDataDelete}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="totalAmountDiv">
        <span>
          <strong>Your total is: $</strong> {totalAmount}
        </span>
      </div>
    </div>
  );
}
