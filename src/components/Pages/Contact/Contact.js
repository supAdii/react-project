import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <>
      <div>
        <div className="hero_rectangle_1"></div>
      </div>
      <div className="content_box">
      <div></div>
      <div></div>
        <div>
          <h1>CONTACT US</h1>
          <p>
            Feel free to contact us if you have any questions or inquiries
            regarding our app.
          </p>
          <p>Our team will reach out to you as soon as possible.</p>
          <div className="contact-details">
            <h3>Contact Details:</h3>
            <p>
              Email:{" "}
              <a href="mailto:info@expensetrackerapp.com">
                info@expensetrackerapp.com
              </a>
            </p>
            <p>
              Phone: <a href="tel:+1234567890">+1 234 567 890</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
