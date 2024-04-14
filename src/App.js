import React, { useState } from "react";
import Header from "./components/Pages/Header";
import Form from "./components/Pages/Form";
import Footer from "./components/Pages/Footer";
import "./Styles/App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact/Contact";
import Services from "./components/Pages/Services/services";
import DataFetchingComponent from "./datafetch";


const App = () => {
  return (
    <>
      <Header />
      <DataFetchingComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
