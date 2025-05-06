import React, { useState } from "react";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css"; // Make sure styles include mobile responsiveness

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">The LOGIN Hotel</div>

      {/* Hamburger icon (only visible on mobile) */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li><a href="#facilities" className="nav-item" onClick={closeMenu}>Facilities</a></li>
          <li><a href="#accommodation" className="nav-item" onClick={closeMenu}>Accommodation</a></li>
          <li><a href="#restaurant" className="nav-item" onClick={closeMenu}>Restaurant</a></li>
          <li><a href="#contact" className="nav-item" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      <div className="social-media">
        <a
          href="https://www.instagram.com/the_login_hotel?igsh=MWlsOGMyMXR0d2lrdw=="
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>
      </div>
    </header>
  );
};

export default Header;


