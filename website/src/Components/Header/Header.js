import React from 'react';
import './Header.css';
import logo from './samplifylogo.png';

function Header() {
  return (
      <div className="header-container">
        <div className="logo-container">
          <i className="fas fa-bars"></i>
          <img src={logo} alt="Logo" className="logo" width="100" height="100" />

        </div>
      </div>
  );
}

export default Header;