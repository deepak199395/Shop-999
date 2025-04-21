import React from 'react';
import '../ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have a question, feedback, or concern? We’re here to help! Get in touch with our team and we’ll respond as soon as possible.
      </p>

      <div className="contact-details">
        <h2>Customer Support</h2>
        <p>Email: <a href="mailto:support@yourdomain.com">support@yourdomain.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        <p>Live Chat: Available from 9 AM to 6 PM (Mon–Fri)</p>
      </div>

      <div className="contact-details">
        <h2>Office Address</h2>
        <p>123 Main Street,<br />New York, NY 10001<br />United States</p>
      </div>

      <div className="contact-details">
        <h2>Follow Us</h2>
        <p>
         {/* // <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a> */}
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
