import React from 'react';
import '../PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>
        Welcome to our Privacy Policy page. Your privacy is critically important to us.
        We are committed to protecting your personal information and your right to privacy.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect personal identification information such as your name, email address,
        phone number, and payment details when you register, place an order, or contact support.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To personalize user experience</li>
        <li>To process transactions securely</li>
        <li>To send periodic emails for support and updates</li>
        <li>To improve our services</li>
      </ul>

      <h2>Data Protection</h2>
      <p>
        We use SSL encryption and secure servers to protect your data. Your information is only
        accessible to authorized personnel and is kept confidential.
      </p>

      <h2>Cookies</h2>
      <p>
        Our site uses cookies to enhance your experience. You can choose to disable cookies in your
        browser settings.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions regarding this privacy policy, feel free to contact our support team.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
