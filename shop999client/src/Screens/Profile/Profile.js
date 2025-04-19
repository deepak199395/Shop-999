import React from 'react';
import './Profile.css'; // Make sure the path is correct
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const user =JSON.parse(localStorage.getItem('user'));

    const handleLogout=()=>{
        localStorage.removeItem("user")
        alert("Logged out successfully!")
        navigate("/login");
    }
if(!user){
    navigate("/login");
    return null;

}

  return (
    <div className='profile-container'>
       <h2 className='profile-title'>User Profile</h2>
      <div className='profile-field'><strong>Name:</strong> {user.firstName || "N/A"}</div>
      <div className='profile-field'><strong>Last Name:</strong> {user.lastName || "N/A"}</div>
      <div className='profile-field'><strong>Email:</strong> {user.email}</div>
      <div className='profile-field'><strong>Phone:</strong> {user.phone || "N/A"}</div>
      <div className='profile-field'><strong>Address:</strong> {user.address || "N/A"}</div>
      <button className='logout-button'  onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Profile;
