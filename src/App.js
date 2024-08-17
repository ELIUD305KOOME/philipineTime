// src/CurrentTime.js
import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import './App.css'; // Import the CSS file

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(DateTime.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(DateTime.now());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const formattedTime = currentTime
    .setZone('Asia/Manila')
    .toFormat('yyyy-MM-dd h:mm:ss a');

  return (
    <div className="time-container">
      <h1>Current Time in Asia/Manila(philipineT)</h1>
      <p>{formattedTime}</p>
    </div>
  );
};

export default CurrentTime;
