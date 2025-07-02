"use client"

import React, { useState, useEffect, useRef } from 'react';

const Clock = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [start, setStart] = useState(false);

  // let alarmTimes = [13, 26, 34, 42, 47, 52, 55, 58, 60, 62, 63, 64]; // Times to trigger the alarm and show toasts


  const [firstToastTimes, setFirstToastTimes] = useState(new Set()); // Track first toast times for each value
  const [secondToastTimes, setSecondToastTimes] = useState(new Set()); // Track second toast times for each value

  const [isClient, setIsClient] = useState(false); // State to track if the code is running on the client
  const [isVertox, setIsVertox] = useState(true);
  const alarmSound = useRef(null); // Ref to store the alarm sound

  // Function to show a toast message
  const showToast = (message) => {
    const toast = document.createElement('div');
    toast.innerText = message;
    toast.style.position = 'fixed';
    toast.style.top = '50px';
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
      const alarmTimes = 
      { '13':13, '26':13, '34':8, '42':8, '47':5, '52':5, '55':3, '58':3, '60':2, '62':2, '63':1, '64':1, '77':13, '90':13, '98':8, '106':8, '111':5, '116':5, '119':3, '122':3, '124':2, '126':2, '127':1, '128':1, '141':13, '154':13, '162':8, '170':8, '175':5, '180':5, '183':3, '186':3, '188':2, '190':2, '191':1, '192':1, '205':13, '218':13, '226':8, '234':8, '239':5, '244':5, '247':3, '250':3, '252':2, '254':2, '255':1, '256':1, '269':13, '282':13, '290':8, '298':8, '303':5, '308':5}
      const arr = isVertox ?
        Object.keys(alarmTimes).map(elem => parseInt(elem)) :
        [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300]

      arr.forEach((timeValue) => {
        const totalSeconds = time.seconds + time.minutes * 60;
        // console.log(timeValue);
        
        if (totalSeconds === timeValue){
          if (isVertox && !firstToastTimes.has(timeValue)) {
          // First toast for this time value
          showToast(`First ${alarmTimes[timeValue]} seconds!`);
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
              showToast(`Second ${alarmTimes[timeValue]} seconds!`);
              setSecondToastTimes(prev => new Set(prev).add(timeValue));
            }
          }, 1000); // Adding 1 second delay for second toast
          }else{
            if (alarmSound.current) {
              alarmSound.current.pause();
              alarmSound.current.currentTime = 0;
              alarmSound.current.play();
            }
          }
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

  const changeBreathing=()=>{
    console.log(!isVertox)
    setIsVertox(!isVertox)
    resetClock()
  }

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
      <div className='flex gap-10'>
        <button
          onClick={changeBreathing}
          style={{
            padding: '15px 20px',
            fontSize: '20px',
            width: '100%',
            fontWeight : "bolder",
            backgroundColor: 'gold',
            color: 'black',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            opacity: !isVertox ? 0.5 : 1,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
          disabled={isVertox}
        >
          VERTOX BREATHING
        </button>
        <button
          onClick={changeBreathing}
          style={{
            padding: '15px 20px',
            fontSize: '20px',
            width: '100%',
            fontWeight : "bolder",
            backgroundColor: 'gold',
            color: 'black',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            opacity: isVertox ? 0.5 : 1,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
          disabled={!isVertox}
        >
          BOX BREATHING
        </button>
      </div>
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
