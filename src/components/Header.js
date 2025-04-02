import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./Header.css"; // Add styles to header

const Header = () => {
  return (
    <header className="header">
      <div className="logo">The LOGIN Hotel</div>
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#facilities" className="nav-item">Facilities</a></li>
          <li><a href="#accommodation" className="nav-item">Accommodation</a></li>
          <li><a href="#restaurant" className="nav-item">Restaurant</a></li>
          <li><a href="#contact" className="nav-item">Contact</a></li>
        </ul>
      </nav>
      <div className="social-media">
        {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebook /></a> */}
        <a href="https://www.instagram.com/the_login_hotel?igsh=MWlsOGMyMXR0d2lrdw==" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
      </div>
    </header>
  );
};

export default Header;

