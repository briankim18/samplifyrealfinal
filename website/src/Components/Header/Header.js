import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <i className="fas fa-bars"></i>
          <div className="logo">Samplify</div>
        </div>
      </div>
    </header>
  );
}

export default Header;