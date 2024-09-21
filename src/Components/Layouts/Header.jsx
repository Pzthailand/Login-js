import { NavLink, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// CSS
import '../../Components/Style/Layouts/Header.css';

export const Header = () => {
  const user = useSelector((state) => state.user); // Redux
  const dispatch = useDispatch(); // Redux
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  const signOut =()=> {
    dispatch({ type: 'LOGGED_OUT_USERS', payload: null });
  }

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li><NavLink end to="/UserPage">Home</NavLink></li>
          <li><NavLink to="/News">News</NavLink></li>
          <li><NavLink to="/Products">Products</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>

          {user && user.token ? (
            <div className="dropdown">
              <li onClick={toggleDropdown}>
                <NavLink>
                  {user.username}
                </NavLink>
              </li>
              {dropdownOpen && (
                <div className="dropdown-content">
                  <li><Link to="/Profile">Profile</Link></li>
                  <li><Link to="/SignIn" onClick={signOut}>Sign Out</Link></li>
                </div>
              )}
            </div>
          ) : (
            <li><NavLink to="/SignIn">Sign In</NavLink></li>
          )}
        </ul>
      </nav>
    </header>
  );
};