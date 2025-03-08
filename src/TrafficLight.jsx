import React, { useState, useEffect } from 'react';
import './TrafficLight.css';

function TrafficLight() {
  const [activeLight, setActiveLight] = useState('red');
  const [mode, setMode] = useState('night'); // 'day' or 'night'
  const [isFlashing, setIsFlashing] = useState(false); // Track flashing state


  const toggleMode = () => {
    const newMode = mode === 'day' ? 'night' : 'day';
    setMode(newMode);
    document.body.classList.remove('day', 'night');
    document.body.classList.add(newMode); // Add the new mode to the body class
  };

  const beepSound = new Audio('/beep.wav');

  const playBeep = () => {
    beepSound.play();
  };

  // Function to cycle through the lights
  useEffect(() => {
    const cycleLights = setInterval(() => {
      if (activeLight === 'red') {
        setActiveLight('yellow');
        playBeep(); // Play beep sound when changing
      }
      else if (activeLight === 'yellow') {
        setActiveLight('green');
        playBeep(); // Play beep sound when changing
      }
      else {
        setActiveLight('red');
        playBeep(); // Play beep sound when changing
      }
    }, 10000);  

   if (activeLight === 'green') {
      setIsFlashing(true); // Start flashing when green
      const flashTimeout = setTimeout(() => {
        setIsFlashing(false); // Stop flashing after 500ms
      }, 500); // Flash duration of 500ms

      return () => clearTimeout(flashTimeout);
    }

    return () => clearInterval(cycleLights);  
    
  }, [activeLight]);

  return (
    <div>
      <div className="traffic-light">
        <div className="protector"></div>
        <div className="protector"></div>
        <div className="protector"></div>
        
        <a
          href="https://www.linkedin.com/in/ilyas-kial-developer"
          target="_blank"
          rel="noopener noreferrer"
          className={`light red ${activeLight === 'red' ? 'active' : ''}`}
          aria-label="LinkedIn Profile"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>

        <a
          href="https://github.com/ikial-ux"
          target="_blank"
          rel="noopener noreferrer"
          className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
          aria-label="GitHub Profile"
        >
          <i className="fab fa-github"></i>
        </a>

        <a
          href="/CV_KIAL_ILYAS.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`light green ${activeLight === 'green' ? 'active' : ''}`}
          aria-label="Download CV"
        >
          <i className="fas fa-file-alt"></i>
        </a>
      </div>
      <button onClick={toggleMode} className="toggle-mode-btn">
        <i className={mode === 'day' ? 'fas fa-sun' : 'fas fa-moon'}></i>
      </button>
    </div>
  );
}

export default TrafficLight;
