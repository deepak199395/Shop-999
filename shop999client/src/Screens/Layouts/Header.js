import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Header.css'; // assuming CSS is here
import Profile from '../Profile/Profile';

const Header = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleOpenProfile=()=>{
    setShowProfileModal(true);

  }
const handleCloseProfile=()=>{
  setShowProfileModal(false);
}
  return (
    <div className='MainHederContainer'>
      <h1 className='logo'>ShowStopper</h1>
      <div className='search-nav-wrapper'>
        <input
          type='text'
          placeholder='Search shows, artists...'
          className='search-input'
        />
        <nav>
          <ul className='linklist'>
            <li className='textlogin'><Link to='/'>Home</Link></li>
            <li className='textlogin'><Link to='/commingSoon'>Travel</Link></li>
            <li className='textlogin'><Link to='/commingSoon'>Hotel</Link></li>
            <li className='textlogin'><Link to='/commingSoon'>Banquet Halls</Link></li>
            <li className='textlogin'><Link to='/register'>Register</Link></li>
            <li className='textlogin'><Link to='/login'>Login</Link></li>
            <li className='textlogin'>
              <button className='textlogin' onClick={handleOpenProfile}>
                 Profile
                 </button>
              </li>
          </ul>
        </nav>
      </div>
            {/* Modal section */}

      {showProfileModal && (
        <div className='modal-overlay' onClick={handleCloseProfile}>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
          <button className='close-button' onClick={handleCloseProfile}>X</button>
          <Profile />
        </div>
      </div>
      )}
    </div>
  
  );
};

export default Header;
