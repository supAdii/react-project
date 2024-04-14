import React from "react";
import "./main.scss"

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
              lectus ac nisi dapibus feugiat eget at arcu.
            </p>
          </div>
          <div className="footer-section">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Contact Us</h2>
            <p>Email: contact@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
            <p>"Track Every Penny, Master Your Finances!"</p>
        </div>
      </footer>
        <div className="footer-bottom">
          <p>&copy; 2024 Expense Tracker App</p>
        </div>
    </>
  );
}
