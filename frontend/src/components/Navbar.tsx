import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="nav-logo">ASSOCIATION YOUTH CLUBs</div>
      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#clubs">Local Clubs</a>
        <a href="#projects">National Projects</a>
        <a href="#ben">BEN</a>
        <a href="#signup" className="nav-cta">S’inscrire</a>
      </nav>
      <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </header>
  );
};

export default Navbar;

