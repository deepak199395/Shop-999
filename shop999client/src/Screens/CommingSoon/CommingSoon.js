import React from 'react';
import './CommingSoon.css';

const CommingSoon = () => {
  return (
    <div className='coming-soon-container'>
      <div className='coming-soon-box'>
        <h1 className='coming-soon-title'>Coming Soon</h1>
        <p className='coming-soon-text'>We're working on something amazing. Stay tuned!</p>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default CommingSoon;
