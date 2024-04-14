import React from "react";
import "./About.scss";

const About = () => {
  return (
    <>
      {/* <Header /> */}

      <div className="main1">
      <div></div>
        <div className="content-box">
        <div>
          <h1 className="h_title">About Us</h1>
        </div>
          <h2>About Expense Tracker</h2>
          <p>
            Our Expense Tracker App is your go-to solution for effortless
            financial management. With its intuitive interface, you can easily
            record, categorize, and track expenses on-the-go. Set budgets,
            receive spending alerts, and visualize your financial data with
            detailed reports and graphs. Your data is securely encrypted,
            ensuring your privacy. Whether you're budgeting for daily expenses
            or long-term goals, our app streamlines the process, helping you
            save time, stay organized, and achieve financial freedom. Download
            today and take control of your finances with ease!
          </p>
        </div>
        <div className="lado"></div>
      </div>
    </>
  );
};

export default About;
