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
      <Footer />
    </>
  );
};

export default App;
