import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="landing-page">
      <video autoPlay muted loop playsInline className="video-bg">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero">
        <h1>Find Your Dream Job Today</h1>
        <p>SmartHire connects South Africa's top talent with growing companies.</p>
        <div className="hero-buttons">
          <Link to="/register" className="cta-button">Get Started</Link>
          <Link to="/jobs" className="cta-button outline">Browse Jobs</Link>
        </div>
      </div>
    </div>
  );
}
