import React from 'react';
import "./services.css";


const Services = () => {
  return (
    <>
      <div className="section__page">
        <div className="main__honi">
          <div className="content-box">
            <h2 className='puti'>Services We Offer</h2>
            <div className="ser_item">
              <h3>Barcode Scanner for Receipts</h3>
              <p>
                Use a built-in barcode scanner to quickly capture and store receipt information. 
                This feature simplifies expense entry by automatically extracting details like 
                date, merchant, and amount from the barcode.
              </p>
            </div>
            <div className="service-item">
              <h3>Consultation with Experts Through Calls</h3>
              <p>
                Offer users the option to schedule consultation calls with financial experts or 
                advisors. This service can provide personalized financial advice, answer queries, 
                and offer strategies to improve financial health.
              </p>
            </div>
            <div className="service-item">
              <h3>Budget Crossing Reminder</h3>
              <p>
                Set up budget crossing reminders to alert users when they are about to exceed their 
                set budget for a specific category. This proactive notification helps users stay 
                within their budget limits and avoid overspending.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
