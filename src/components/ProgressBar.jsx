import React, { useState, useEffect } from 'react';
import './ProgressBar.css'; // Import CSS file for styling

const ProgressBar = ({ targetProgress }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < targetProgress) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [progress, targetProgress]);

  return (


    <div className='progress-wrapper'>
        <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
      </div>
    </div>
    <div className='progress-text'>
    {progress}%
    </div>
    </div>
    
  );
};

export default ProgressBar;
