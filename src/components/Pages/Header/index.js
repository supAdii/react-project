import React from "react";
import "./main.scss";
import { Link } from "react-router-dom";
import mainLogo from "./mainLogo.png";

import "../../../Styles/App.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="imageDiv">
            <Link to="/"> 
            <img src={mainLogo} alt="Main Logo" className="logo"/> 
            </Link>
          </div>
          <nav className="nav-menu">
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/form"> Add</Link>
              </li>
              <li>
                <Link to="/about"> About</Link>
              </li>
              <li>
                <Link to="/contact"> Contact</Link>
              </li>
              <li>
                <Link to="/service"> Service</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
