import React from 'react';
import { logo } from './logo';

function Header() {
  return (
    <nav className="navbar">
      <img src={logo} alt="LedgerX Logo" />
      <a href="#"> Log in</a>
    </nav>
  );
}

export default Header;
