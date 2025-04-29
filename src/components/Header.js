import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Header.css';
import Logo from '../assets/murthy.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-title">
          <img src={Logo} alt="Logo" className="header-logo" />
          Mamatha Vanga
        </div>

        <nav>
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
            {/* <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li> */}
            {/* <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
