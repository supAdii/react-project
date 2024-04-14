import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/Home";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services/services";
import Contact from "./components/Pages/Contact/Contact";

const App = () => {
  return (
    <>
      <Header />
      <HomePage/>
      <About/>
      <Contact/>
      <Services/>
      

      {/* <Routes>
        <Route path="/" element={App}>
          <Route path="home" element={HomePage}/>
          <Route path="about" element={About} />
          <Route path="contact" element={Contact} />
          <Route path="service" element={Services} />
        </Route>
      </Routes> */}

      <Form />
      <Footer />
    </>
  );
};

export default App;
