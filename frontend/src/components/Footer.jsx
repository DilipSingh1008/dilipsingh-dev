import React from 'react';
import './Footer.css';  // Create a separate CSS file for Footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2025 Dilip Singh. All rights reserved.</p>
        </div>
        <div className="footer-center">
          <ul className="footer-links">
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <ul className="social-links">
            <li><a href="https://github.com/DilipSingh1008" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/dilip-singh-89a604204/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:dilip@example.com" target="_blank" rel="noopener noreferrer">Email</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
