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
        <form className="search-form">
          <input type="text" placeholder="Search" />
          <button type="submit"><i className="fas fa-search"></i></button>
        </form>
        <div className="icon-container">
          <i className="fas fa-bell"></i>
          <i className="fas fa-user-circle"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;