import React from 'react';
import { Link } from 'react-router-dom';
import "./Footerbar.css";

const Footerbar = () => {
  return (
    <div className='MainFooterBar'>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Privacy-Policy">Privacy Policy</Link></li>
          <li><Link to="/Termsand-Conditions">Terms and Conditions</Link></li>
          <li><Link to="/Cancellationand-Refund">Cancellation and Refund</Link></li>
          <li><Link to="/Shippingand-Delivery">Shipping and Delivery</Link></li>
        </ul>
      </div>
      <ul>
        <li><Link to="/Contact-Us">Contact Us</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/Termsand-Conditions">Terms of Service</Link></li>
        <li><Link to="/Privacy-Policy">Privacy Policy</Link></li>
      </ul>
      <ul>
        <li><Link to="/help">Help</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/Termsand-Conditions">Terms of Service</Link></li>
        <li><Link to="/Privacy-Policy">Privacy Policy</Link></li>
      </ul>
    </div>
  );
};

export default Footerbar;
