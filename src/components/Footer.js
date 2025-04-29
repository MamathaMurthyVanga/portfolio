import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';  // Import the icons you need
import '../styles/Footer.css';  // Correct the path to the Footer.css file

const Footer = () => {
  return (
    <footer className="footer">
      {/* <p>Contact me:</p> */}
      <a href="mailto:mamathavanga24@gmail.com" className="footer-link">
        <FaEnvelope /> Email
      </a>
      <a href="tel:8978968531" className="footer-link">
        <FaPhone /> Contact
      </a>
      <a href="https://www.linkedin.com/in/mamathavanga/" target="_blank" rel="noopener noreferrer" className="footer-link">
        <FaLinkedin /> LinkedIn
      </a>
      <a href="https://github.com/MamathaMurthyVanga" target="_blank" rel="noopener noreferrer" className="footer-link">
        <FaGithub /> Git
      </a>
      <div className="footer-location">
        <FaMapMarkerAlt /> Hyderabad, Telangana, India
      </div>
    </footer>
  );
};

export default Footer;
