import React, { useEffect, useState } from 'react';
import './SplashScreen.css';
import { imgPath } from '../assets'; 

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Allow fade out animation
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`splash-screen ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="splash-content">
        <img src={imgPath.logo} alt="SkyFresh Logo" className="splash-logo" />
      </div>
    </div>
  );
};

export default SplashScreen;