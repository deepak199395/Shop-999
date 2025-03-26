import React, { useState } from 'react';
import '../../Styles/Payment.css';
import { FaCcVisa, FaCcMastercard, FaGooglePay, FaPaypal, FaUniversity, FaMoneyBillWave } from 'react-icons/fa';
import { QRCodeCanvas } from 'qrcode.react';

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [showModal, setShowModal] = useState(false);

  const openModal = (method) => {
    setSelectedMethod(method);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='MainCantainer'>
    <div className="payment-container">
      <div className="payment-overlay">
        <h2 className="payment-title">Select Payment Method</h2>
        <div className="payment-options">
          <button onClick={() => openModal('card')}>
            <FaCcVisa className="icon" /> <FaCcMastercard className="icon" /> Card Payment
          </button>
          <button onClick={() => openModal('netbanking')}>
            <FaUniversity className="icon" /> Net Banking
          </button>
          <button onClick={() => openModal('upi')}>
            <FaGooglePay className="icon" /> <FaPaypal className="icon" /> UPI
          </button>
          <button onClick={() => openModal('cod')}>
            <FaMoneyBillWave className="icon" /> Cash on Delivery
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            {selectedMethod === 'card' && (
              <div className="card-payment">
                <h3>Enter Card Details</h3>
                <input type="text" placeholder="Card Number" className="input-field" />
                <input type="text" placeholder="Card Holder Name" className="input-field" />
                <input type="text" placeholder="Expiry Date (MM/YY)" className="input-field" />
                <input type="password" placeholder="CVV" className="input-field" />
              </div>
            )}
            
            {selectedMethod === 'netbanking' && (
              <div className="net-banking">
                <h3>Select Bank</h3>
                <select className="input-field">
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>SBI Bank</option>
                  <option>Axis Bank</option>
                </select>
              </div>
            )}

            {selectedMethod === 'upi' && (
              <div className="upi-payment">
                <h3>Enter UPI ID</h3>
                <input type="text" placeholder="yourname@upi" className="input-field" />
                <h3>Scan QR Code to Pay</h3>
                <QRCodeCanvas value="upi://pay?pa=yourupi@upi&pn=Your Name&mc=1234&tid=9876543210" size={150} />
              </div>
            )}

            {selectedMethod === 'cod' && (
              <div className="cod">
                <h3>Cash on Delivery Selected</h3>
                <p>You will pay at the time of delivery.</p>
                <input type="text" placeholder="Flate No" className="input-field" />
                <input type="text" placeholder="Area Name" className="input-field" />
                <input type="number" placeholder="Pin code" className="input-field" />
                <input type="password" placeholder="Land Mark" className="input-field" />
                <button className='btn'>Submmit</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Payment;
