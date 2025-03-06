import React from 'react';
import './TrafficLight.css';  // Import the CSS file

function TrafficLight() {
  return (
    <div className="traffic-light-wrapper"> {/* Wrapper to center everything */}
      <div className="traffic-light">
        <div className="protector"></div>
        <div className="protector"></div>
        <div className="protector"></div>
        
        <a 
          href="https://www.linkedin.com/in/ilyas-kial-developer" 
          target="_blank" 
          rel="noopener noreferrer"
          className="light red"
        >
          <i className="fab fa-linkedin-in"></i> {/* LinkedIn icon */}
        </a>
        <a 
          href="https://github.com/ikial-ux" 
          target="_blank" 
          rel="noopener noreferrer"
          className="light yellow"
        >
          <i className="fab fa-github"></i> {/* GitHub icon */}
        </a>
        <a 
          href="/public/CV_KIAL_ILYAS-1.pdf"  // Replace with your actual CV link
          target="_blank" 
          rel="noopener noreferrer"
          className="light green"
        >
          <i className="fas fa-file-alt"></i> {/* CV icon */}
        </a>
      </div>
    </div>
  );
}

export default TrafficLight;
