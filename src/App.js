import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import "./App.css";
import * as database from "./database";
// import { refFromURL } from "firebase/database";

// App component
const App = () => {
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
        <Form />
      <div className="sectionpage__div1">
        <h3>DATA FROM THE DATABASE:</h3>
        <ul className="mylisting">
          {data.map((val, index) => (
            <li key={index}>
              You spent ${val.amount} on the date {val.when} at {val.where}.
              DAMN!!!
            </li>
          ))}
        </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default App;
