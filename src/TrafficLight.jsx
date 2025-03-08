import React, { useState, useEffect, useRef, useCallback } from 'react';
import './TrafficLight.css';

function TrafficLight() {
  const [activeLight, setActiveLight] = useState('red');
  const [mode, setMode] = useState('night'); 
  const [isSilent, setIsSilent] = useState(false); 
  const intervalRef = useRef(null);

  const toggleMode = () => {
    const newMode = mode === 'day' ? 'night' : 'day';
    setMode(newMode);
    document.body.classList.remove('day', 'night');
    document.body.classList.add(newMode);
  };

  const toggleSilence = () => {
    setIsSilent(!isSilent);
  };

  const playBeep = useCallback(() => {
    if (!isSilent) {
      const beepSound = new Audio('/beep.wav');
      beepSound.play();
    }
  }, [isSilent]);

  useEffect(() => {
    clearInterval(intervalRef.current);
  
    intervalRef.current = setInterval(() => {
      playBeep(); // Ensure beep plays only once per interval
  
      setActiveLight((prevLight) => {
        if (prevLight === 'red') return 'yellow';
        if (prevLight === 'yellow') return 'green';
        return 'red';
      });
    }, 10000);
  
    return () => clearInterval(intervalRef.current);
  }, [playBeep]);
  

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
          title='My Linkedin profile'
        >
          <i className="fab fa-linkedin-in"></i>
        </a>

        <a
          href="https://github.com/ikial-ux"
          target="_blank"
          rel="noopener noreferrer"
          className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
          aria-label="GitHub Profile"
          title='My GitHub profile'
        >
          <i className="fab fa-github"></i>
        </a>

        <a
          href="/CV_KIAL_ILYAS.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`light green ${activeLight === 'green' ? 'active' : ''}`}
          aria-label="Download CV"
          title='My CV'
        >
          <i className="fas fa-file-alt"></i>
        </a>
      </div>

      <button onClick={toggleSilence} className="toggle-silence-btn">
        <i className={isSilent ? "fas fa-volume-mute" : "fas fa-volume-up"}></i>
        {isSilent ? " Unmute" : " Mute"}
      </button>

      <button onClick={toggleMode} className="toggle-mode-btn">
        <i className={mode === 'day' ? 'fas fa-sun' : 'fas fa-moon'}></i>
      </button>
    </div>
  );
}

export default TrafficLight;
