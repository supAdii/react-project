import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import './About.scss'; 

const About = () => {
  return (
    <>
      <div className="main__page">
        <Header />
        <div className="hero_rectangle_1"></div>
        <div className="hero_rectangle_2"></div>
        <h1 className="hero__title">About Us</h1>
      </div>
      <div className="section__page">
        <div className="main">
          <div className="content-box">
            <h2>About Expense Tracker</h2>
            <p>
            Our Expense Tracker App is your go-to solution for effortless financial management.
             With its intuitive interface, you can easily record, categorize, and track expenses
              on-the-go. Set budgets, receive spending alerts, and visualize your financial data
               with detailed reports and graphs. Your data is securely encrypted, ensuring your 
               privacy. Whether you're budgeting for daily expenses or long-term goals, our app 
               streamlines the process, helping you save time, stay organized, and achieve 
               financial freedom. Download today and take control of your finances with ease!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
