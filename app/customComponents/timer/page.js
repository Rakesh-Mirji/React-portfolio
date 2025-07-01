"use client"

import React, { useState, useEffect, useRef } from 'react';

const Clock = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [start, setStart] = useState(false);

  const alarmTimes = [13, 26, 34, 42, 47, 52, 55, 58, 60, 62, 63, 64]; // Times to trigger the alarm and show toasts
  const [firstToastTimes, setFirstToastTimes] = useState(new Set()); // Track first toast times for each value
  const [secondToastTimes, setSecondToastTimes] = useState(new Set()); // Track second toast times for each value

  const [isClient, setIsClient] = useState(false); // State to track if the code is running on the client
  const alarmSound = useRef(null); // Ref to store the alarm sound

  // Function to show a toast message
  const showToast = (message) => {
    const toast = document.createElement('div');
    toast.innerText = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.padding = '10px 20px';
    toast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    toast.style.color = 'white';
    toast.style.borderRadius = '8px';
    toast.style.fontSize = '18px';
    toast.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
    toast.style.zIndex = 1000;
    document.body.appendChild(toast);

    // Remove the toast after 3 seconds
    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  useEffect(() => {
    // Ensure that this code runs only on the client side
    if (typeof window !== "undefined") {
      setIsClient(true);
      alarmSound.current = new Audio('https://cdn.freesound.org/previews/703/703236_1951924-lq.mp3'); // Meditation sound file
    }
  }, []);

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setTime(prevTime => {
          const { hours, minutes, seconds } = prevTime;
          const newSeconds = (seconds + 1) % 60;
          const newMinutes = newSeconds === 0 ? (minutes + 1) % 60 : minutes;
          const newHours = newMinutes === 0 && newSeconds === 0 ? (hours + 1) % 24 : hours;

          return {
            hours: newHours,
            minutes: newMinutes,
            seconds: newSeconds
          };
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [start]);

  useEffect(() => {
    if (isClient) {
      alarmTimes.forEach((timeValue) => {
        const totalSeconds = time.seconds + time.minutes * 60;
        
        if (totalSeconds === timeValue && !firstToastTimes.has(timeValue)) {
          // First toast for this time value
          showToast(`First ${timeValue} at ${totalSeconds} seconds!`);
          setFirstToastTimes(prev => new Set(prev).add(timeValue));

          // Trigger the alarm sound
          if (alarmSound.current) {
            alarmSound.current.pause();
            alarmSound.current.currentTime = 0;
            alarmSound.current.play();
          }

          // Set for second toast
          setTimeout(() => {
            if (!secondToastTimes.has(timeValue)) {
              showToast(`Second ${timeValue} at ${totalSeconds + 1} seconds!`);
              setSecondToastTimes(prev => new Set(prev).add(timeValue));
            }
          }, 1000); // Adding 1 second delay for second toast
        }
      });
    }
  }, [time.seconds, isClient, firstToastTimes, secondToastTimes]);

  const resetClock = () => {
    setTime({ hours: 0, minutes: 0, seconds: 0 });
    setStart(false); // Stop the clock
    setFirstToastTimes(new Set()); // Reset first toasts
    setSecondToastTimes(new Set()); // Reset second toasts
  };

  const goldenClock = () => {
    setStart(true);
  };

  return (
    <div style={{
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '30px',
      boxSizing: 'border-box',
      maxWidth: '500px',
      margin: 'auto',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px'
    }}>
      <h1 style={{ fontSize: '48px', color: '#333' }}>Clock</h1>
      <div>
        <h2 style={{ fontSize: '72px', color: '#333' }}>
          {String(time.hours).padStart(2, '0')}:
          {String(time.minutes).padStart(2, '0')}:
          {String(time.seconds).padStart(2, '0')}
        </h2>
      </div>
      <button
        onClick={goldenClock}
        style={{
          padding: '20px 50px',
          fontSize: '28px',
          width: '100%',
          margin: '20px 0',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          opacity: start ? 0.6 : 1,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
        disabled={start}
      >
        Start
      </button>
      <button
        onClick={resetClock}
        style={{
          padding: '20px 50px',
          fontSize: '28px',
          width: '100%',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        Reset
      </button>
    </div>
  );
};

const Timer = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Clock />
    </div>
  );
};

export default Timer;
