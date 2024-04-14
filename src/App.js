import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import "./App.css";
import * as database from "./database";
// import { refFromURL } from "firebase/database";


const App = () => {
  return (
    <>
      <div className="main__page">
        <div>
          <img src="./wallet.png" alt="Wallet" className="hero__image"></img>
        </div>
        <div className="hero_slogan">
          <div className="hero_slogan1">TRACK EVERY PENNY</div>
        </div>
        <Header />
        <div className="hero_rectangle_1"></div>
        <div className="hero_rectangle_2"></div>
        ---------------------------------------------------
        <h1 className="hero__title">Expense Tracker</h1>
      </div>
      <div className="section__page">
        <h3>Here is the data from the db:</h3>
        <ul>
        {data.map((val, index) => (
          <li key={index}>
            You spent ${val.amount} on the date {val.when} at {val.where}. DAMN!!!
          </li>
        ))}
      </ul>
      </div>

      <Form />
      <Footer />
    </>
  );
};

export default App;
