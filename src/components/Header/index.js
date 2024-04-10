import React from "react";
import "./main.scss"

export default function Header() {
  return (
    <>
      <header className="header">
      <div className="header-container">
        <h1 className="logo">Expense Tracker</h1>
        <nav className="nav-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  );
}
