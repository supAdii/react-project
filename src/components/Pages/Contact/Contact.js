import React from 'react';
import './contact.scss'; 



const Contact = () => {
  return (
    <>
      {/* <div className="main__page"> */}
        {/* <Header /> */}

        <div className="hero_rectangle_1"></div>
        <h1 className="hero__title">Contact Us</h1>
      {/* </div>
     */}
          <div className="content_box">
            
            <p>
            Feel free to contact us if you have any questions or inquiries regarding our app.
            </p><br />
            <p>Our team will reach out to you as soon as possible.</p>
            <div className="contact-details">
              <h3>Contact Details:</h3>
              <p>Email: <a href="mailto:info@expensetrackerapp.com">info@expensetrackerapp.com</a></p>
              <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
            </div>
          </div>
    </>
  );
};

export default Contact;
