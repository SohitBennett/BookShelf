

// import React, { useState, useEffect } from 'react';
// import './Pomodoro.css';
// import Navbar from '../../components/Navbar/Navbar';

// const Pomodoro = () => {
//   const [minutes, setMinutes] = useState(25);
//   const [seconds, setSeconds] = useState(0);
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     let interval;
//     if (isActive) {
//       interval = setInterval(() => {
//         if (seconds === 0) {
//           if (minutes === 0) {
//             clearInterval(interval);
//             setIsActive(false);
//           } else {
//             setMinutes(minutes - 1);
//             setSeconds(59);
//           }
//         } else {
//           setSeconds(seconds - 1);
//         }
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [isActive, minutes, seconds]);

//   const toggleTimer = () => {
//     setIsActive(!isActive);
//   };

//   const resetTimer = () => {
//     setMinutes(25);
//     setSeconds(0);
//     setIsActive(false);
//   };

//   const formatTime = (time) => {
//     return time < 10 ? `0${time}` : time;
//   };

//   const renderClocks = () => {
//     const filledPercentage = (minutes * 60 + seconds) / (25 * 60) * 100;
//     return (
//       <div className="clocks">
//         <div className="filled" style={{ width: `${filledPercentage}%` }} />
//         <div className="empty" />
//       </div>
//     );
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="pomodoro">
//         <h1>Pomodoro Timer</h1>
//         {renderClocks()}
//         <div className="timer">
//           {formatTime(minutes)}:{formatTime(seconds)}
//         </div>
//         <div className="buttons">
//           <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
//           <button onClick={resetTimer}>Reset</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pomodoro;





// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import App from './App';


// const Pomodoro = () => {
//   return (
//     <main>
//       <App />
//       <Outlet />
//     </main>
//   );
// };

// export default Pomodoro;



import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Pomodoro.css';
import Navbar from '../../components/Navbar/Navbar';
import Background from '../../components/Background/Background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedo, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';


const Pomodoro = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [playStatus,setPlayStatus] = useState(true);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setIsActive(false);
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div>
      <Navbar />
      <br/>
      <Background playStatus={playStatus} />
      <div className="pomodoro">
        <h1 className="timer-heading">Pomodoro Timer</h1>
        <br/>
        <div style={{ width: '200px', margin: '0 auto' }}>
          <CircularProgressbar
            value={(minutes * 60 + seconds) / (25 * 60) * 100}
            text={`${formatTime(minutes)}:${formatTime(seconds)}`}
          />
        </div>
        <br/>
        <div className="buttons">
          <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
          <button onClick={resetTimer}>Reset</button>
        </div>

        
      </div>
    </div>
  );
};

export default Pomodoro;
