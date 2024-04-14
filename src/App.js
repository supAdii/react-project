import React from "react";
import Header from "./components/Pages/Header";
import Form from "./components/Pages/Form";
import Footer from "./components/Pages/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact/Contact";
import Services from "./components/Pages/Services/services";

const App = () => {
<<<<<<< HEAD
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

=======
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/form" element={<Form/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Services/>} />
      </Routes>
      {/* <HomePage/> */}
      {/* <Form /> */}
>>>>>>> 2879b5d498e576ed241b888b73af5042a6bb0612
      <Footer />
    </>
  );
};

export default App;
