import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

export default function Footer(){
    return (

        <footer className="footer">
        <div className="footer-content">
            <div className="footer-section">
            <h3> Contact Us</h3>
              <p>Email: info@smarthire.co.za</p>
              <p>Phone: +27 123 456 789</p>

            </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
         <div className="footer-section">
          <h3>Legal</h3>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
        </div>
        <div className="footer-bottom">
        &copy; {new Date().getFullYear()} SmartHire. All rights reserved.
      </div>
        </footer>
    );
};