import React from "react";
import "./main.scss";
import logo from "./Untitled@1-1920x965.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <h1 className="logo">Expense Tracker</h1>
          <nav className="nav-menu">
            <ul>
              <li>
                <Link to="/"> Home</Link>
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
