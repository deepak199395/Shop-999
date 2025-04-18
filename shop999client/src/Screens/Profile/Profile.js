import React from 'react';
import './Profile.css'; // Make sure the path is correct

const Profile = () => {
  return (
    <div className='profile-container'>
      <h2 className='profile-title'>User Profile</h2>
      <div className='profile-field'><strong>Name:</strong> John</div>
      <div className='profile-field'><strong>Last Name:</strong> Doe</div>
      <div className='profile-field'><strong>Email:</strong> john.doe@example.com</div>
      <div className='profile-field'><strong>Phone:</strong> +1 234 567 890</div>
      <div className='profile-field'><strong>Address:</strong> 123, Main Street, City</div>
      <button className='logout-button'>Log Out</button>
    </div>
  );
};

export default Profile;
