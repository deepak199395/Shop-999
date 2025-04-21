import React from 'react';
import '../ShippingandDelivery.css';

const ShippingandDelivery = () => {
  return (
    <div className="shipping-container">
      <h1>Shipping & Delivery</h1>
      <p>
        Thank you for shopping with us. Here’s everything you need to know about our shipping and delivery process.
      </p>

      <div className="shipping-section">
        <h2>Shipping Policy</h2>
        <p>
          We offer nationwide delivery for all products and tickets. Once your order is confirmed, we begin processing it immediately.
        </p>
      </div>

      <div className="shipping-section">
        <h2>Delivery Time</h2>
        <p>
          - Digital tickets: Instantly delivered via email upon payment confirmation.<br />
          - Physical merchandise: Usually delivered within 3–7 business days.
        </p>
      </div>

      <div className="shipping-section">
        <h2>Shipping Charges</h2>
        <p>
          Shipping is free for digital products and tickets. For physical items, a nominal shipping fee may apply depending on the order amount and location.
        </p>
      </div>

      <div className="shipping-section">
        <h2>Order Tracking</h2>
        <p>
          Once your order has been shipped, we will send you a tracking link via email or SMS. You can use this to monitor your delivery in real time.
        </p>
      </div>

      <div className="shipping-section">
        <h2>Need Help?</h2>
        <p>
          Contact our support team anytime at <a href="mailto:support@yourdomain.com">support@yourdomain.com</a> or call <a href="tel:+1234567890">+1 (234) 567-890</a>.
        </p>
      </div>
    </div>
  );
};

export default ShippingandDelivery;
