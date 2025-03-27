import React, { useState } from 'react';
import '../../Styles/Payment.css';
import { FaCcVisa, FaCcMastercard, FaGooglePay, FaPaypal, FaUniversity, FaMoneyBillWave } from 'react-icons/fa';
import { QRCodeCanvas } from 'qrcode.react';
import { useLocation } from "react-router-dom";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const banks = ["HDFC Bank", "ICICI Bank", "SBI Bank", "Axis Bank", "Kotak Bank", "Yes Bank", "PNB Bank", "Bank of Baroda"];

  const location = useLocation(); // ✅ Fixing case issue
  const formData = location.state?.formData; // ✅ Fixing case issue
  console.log("==========>", formData)
  const openModal = (method) => {
    setSelectedMethod(method);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const filteredBanks = banks.filter(bank =>
    bank.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
                  {/* Search Input */}
                  <input
                    type="text"
                    placeholder="Search bank..."
                    className="input-field search-bar"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <h3>Enter Card Details</h3>
                  <input type="text" placeholder="XXXX  XXXX  XXXX  XXXX" className="input-field card-number" />
                  <input type="text" placeholder="Card Holder Name" className="input-field" />

                  <div className="input-group">
                    <input type="text" placeholder="MM / YY" className="input-field" />
                    <input type="password" placeholder="CVV" className="input-field" />
                  </div>
                </div>

              )}

              {selectedMethod === 'netbanking' && (
                <div className="net-banking">
                  <h3>Select Bank</h3>

                  <input
                    type="text"
                    placeholder="Search bank..."
                    className="input-field search-bar"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />

                  <select className="input-field">
                    {filteredBanks.length > 0 ? (
                      filteredBanks.map((bank, index) => (
                        <option key={index}>{bank}</option>
                      ))
                    ) : (
                      <option disabled>No matching banks</option>
                    )}
                  </select>
                </div>
              )}


              {selectedMethod === 'upi' && (
                <div className="upi-payment">
                  <h3>Enter UPI ID</h3>
                  <input type="text" placeholder="yourname@upi" className="input-field" />
                  <h3>Scan QR Code to Pay</h3>
                  <QRCodeCanvas value="upi://pay?pa=yourupi@upi&pn=Your Name&mc=1234&tid=9876543210" size={190} />
                </div>
              )}

              {selectedMethod === 'cod' && (
                <div className="cod">
                  <h3>Cash on Delivery Selected</h3>
                  <p>You will pay at the time of delivery.</p>

                  <input type="text" placeholder="Flat No / Apartment Name" className="input-field" />
                  <input type="text" placeholder="Area / Street Name" className="input-field" />
                  <input type="number" placeholder="Pincode (e.g. 123456)" className="input-field" />
                  <input type="text" placeholder="Landmark (e.g. Near Mall)" className="input-field" />

                  <button className='btn'>Submit</button>
                </div>

              )}
            </div>
          </div>
        )}

        {/* ✅ Fixed Booking Summary Section */}
        {formData && (
          <div className="booking-summary">
            <h3>Booking Summary</h3>
            <p><strong>Full Name:</strong> {formData.fullname}</p>
            <p><strong>Phone Number:</strong> {formData.PhoneNumber}</p>
            <p><strong>Address:</strong> {formData.Adress}</p>
            <p><strong>Tickets:</strong> {formData.NumberofTickets}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
