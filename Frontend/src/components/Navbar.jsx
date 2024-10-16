

import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Navs<span style={{color:'#000'}}>gram</span></div>
        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#network">Network</a>
          <a href="#jobs">Jobs</a>
          <a href="#messaging">Messaging</a>
          <a href="#notifications">Notifications</a>
          <div className="navbar-profile">Your Profile</div>
        </div>
        <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
