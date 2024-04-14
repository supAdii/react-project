import React from "react";
import "./main.scss";
import { Link } from "react-router-dom";
import mainLogo from "./mainLogo.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <h1 className="logo"><img src={mainLogo} alt= "Main Logo" style={{ 
              maxWidth: '80%', 
              height: 'auto', 
              maxHeight: '200px', 
              marginTop: '13px',
              marginLeft: '-50px',
            }} 
 /></h1>
          <nav className="nav-menu">
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
              <Link to="/form"> Add Data</Link>
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
