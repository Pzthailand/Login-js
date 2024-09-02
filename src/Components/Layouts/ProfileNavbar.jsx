import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


//CSS
import "../Style/Layouts/ProfileNavbar.css"

export const ProfileNavbar = ({ username, profileImageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-navbar">
      <div className="profile-info" onClick={toggleDropdown}>
        <img src={profileImageUrl} alt={username} className="profile-image" />
        <div><span className="username">{username}</span></div>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {/* Dropdown content */}
          <ul>
            <li>My Profile</li>
            <li>Settings</li>
            <li>Logout</li>
            {/* Add more options as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};