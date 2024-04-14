import React from "react";
import expenseTrackerLogo from "./fullLogo.png";
import "../../../Styles/App.css";

export default function HomePage() {
  return (
    <>
      <div className="main__page">
        <div>
          <img src="./wallet.png" alt="Wallet" className="hero__image"></img>
        </div>
        <div className="hero_slogan">
          <div className="hero_slogan1">TRACK EVERY PENNY</div>
        </div>
        <div className="hero_rectangle_1"></div>
        <div className="hero_rectangle_2"></div>
        ---------------------------------------------------
        <h1 className="hero__title">
          <img
            src={expenseTrackerLogo}
            alt="Expense Tracker Logo"
            style={{
              maxWidth: "100%",
              marginLeft: "-58px",
              height: "auto",
            }}
          />
        </h1>
      </div>
    </>
  );
}
