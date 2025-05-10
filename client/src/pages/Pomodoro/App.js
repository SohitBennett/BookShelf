/*
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';




function App() {
  let workTittle;
  let breakTittle;
  let workTime = 25;
  let breakTime = 5;
  let seconds = "00";

  window.onload = () => {
    workTittle = document.getElementById('work');
    breakTittle = document.getElementById('break');

    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
  }

  // const playAudio = () => {
  //   const audio = new Audio("/shooting-sound-fx-159024.mp3");
  //   audio.play();
  // };

  function start() {
    // change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // change the time
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;
    let breakCount = 0;

    // countdown
    let timerFunction = () => {
      //change the display
      document.getElementById('minutes').innerHTML = workMinutes;
      document.getElementById('seconds').innerHTML = seconds;

      // start
      seconds = seconds - 1;

      if (seconds === 0) {
        workMinutes = workMinutes - 1;
        if (workMinutes === -1) {
          if (breakCount % 2 === 0) {
            // start break
            workMinutes = breakMinutes;
            breakCount++

            // change the painel
            workTittle.classList.remove('active');
            breakTittle.classList.add('active');
          } else {
            // continue work
            workMinutes = workTime;
            breakCount++

            // change the painel
            breakTittle.classList.remove('active');
            workTittle.classList.add('active');
          }
          // Play the alarm sound
          document.getElementById('alarm').play();
        }
        seconds = 59;
      }
    }

    // start countdown
    setInterval(timerFunction, 1000); // 1000 = 1s
  }

  return (
    // <div>
      
    //     <div className="app-container">
    //       <h1>pomodoro</h1>

    //       <div className="painel">
    //         <p id="work">work</p>
    //         <p id="break">break</p>
    //       </div>

    //       <div className="timer">
    //         <div className="circle">
    //           <div className="time">
    //             <p id="minutes"></p>
    //             <p>:</p>
    //             <p id="seconds"></p>
    //           </div>
    //         </div>
    //       </div>

          
    //       <div className="controls">
    //         <button id="start" onClick={() => { start();  }}>
    //           <FontAwesomeIcon icon={faPlay} className="white-icon"  />
    //         </button>
    //         <a id="reset"  href="./">
    //           <FontAwesomeIcon icon={faArrowRotateLeft} className="white-icon"/>
    //         </a>
    //       </div>


    //     </div>
      
    // </div>

    <div>
        <section>
        <div className="app-container">
            <h1 className="app-header">pomodoro</h1>

            <div className="app-painel">
            <p id="work" className="app-text">work</p>
            <p id="break" className="app-text">break</p>
            </div>

            <div className="app-timer">
            <div className="app-circle">
                <div className="app-time">
                <p id="minutes" className="app-text"></p>
                <p>:</p>
                <p id="seconds" className="app-text"></p>
                </div>
            </div>
            </div>

            <div className="app-controls">
            <button id="start" onClick={start}>
                <FontAwesomeIcon icon={faPlay} className="app-white-icon" />
            </button>
            <a id="reset" href="./">
                <FontAwesomeIcon icon={faArrowRotateLeft} className="app-white-icon" />
            </a>
            </div>
        </div>
      </section>
    </div>



  );
}

export default App;
*/


// Pomodoro.css (using JavaScript object for scoped styles)


/*
  
  // Pomodoro.js

import React from 'react';
import styles from './Pomodoro.css';  // Import the JavaScript object containing the scoped styles

function App() {


    // const styles = {
    //     appContainer: {
    //       fontSize: '1rem',
    //       margin: 0,
    //       padding: 0,
    //       boxSizing: 'border-box',
    //       fontFamily: 'Open Sans, sans-serif'
    //     },
    //     appHeader: {
    //       height: '100%',
    //       backgroundColor: '#007bff',
    //       fontSize: '1.6rem',
    //       fontFamily: 'Open Sans, sans-serif'
    //     },
    //     appText: {
    //       color: '#333'
    //     },
    //     appIcon: {
    //       fontSize: '3.2rem'
    //     },
    //     appSection: {
    //       display: 'flex',
    //       alignItems: 'center',
    //       height: '100%'
    //     },
    //     appContainerContainer: {
    //       width: 'min(16rem, 100%)',
    //       marginInline: 'auto',
    //       paddingInline: '2rem',
    //       display: 'flex',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       flexDirection: 'column'
    //     },
    //     appPainel: {
    //       display: 'grid',
    //       gridTemplateColumns: '1fr 1fr',
    //       textAlign: 'center',
    //       width: '20rem',
    //       marginBlock: '5rem',
    //       padding: '1rem',
    //       borderRadius: '10rem',
    //       WebkitBoxShadow: '0px 0px 15px 10px #ccc',
    //       boxShadow: '0px 0px 15px 10px #ccc'
    //     },
    //     appPainelP: {
    //       opacity: 0.8,
    //       transition: '1s ease-in'
    //     },
    //     appPainelPActive: {
    //       opacity: 1,
    //       color: '#007bff'
    //     },
    //     appTimer: {
    //       display: 'flex',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       width: '20rem',
    //       height: '20rem',
    //       borderRadius: '50%',
    //       WebkitBoxShadow: '0px 0px 15px 10px #ccc',
    //       boxShadow: '0px 0px 15px 10px #ccc'
    //     },
    //     appCircle: {
    //       display: 'flex',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       width: '16rem',
    //       height: '16rem',
    //       borderRadius: '50%',
    //       backgroundColor: '#007bff',
    //       position: 'relative'
    //     },
    //     appCircleBefore: {
    //       content: "''",
    //       position: 'absolute',
    //       width: '95%',
    //       height: '95%',
    //       borderRadius: '50%',
    //       backgroundColor: '#fff'
    //     },
    //     appTime: {
    //       position: 'relative',
    //       display: 'flex',
    //       flexDirection: 'row'
    //     },
    //     appTimeP: {
    //       fontSize: '3.6rem'
    //     },
    //     appTimePSecond: {
    //       position: 'relative',
    //       top: '-0.5rem',
    //       marginInline: '1rem'
    //     },
    //     appControls: {
    //       marginTop: '3rem'
    //     },
    //     appControlsButton: {
    //       border: 'none',
    //       backgroundColor: 'transparent',
    //       cursor: 'pointer'
    //     },
    //     appControlsReset: {
    //       display: 'none'
    //     },
    //     appWhiteIcon: {
    //       color: '#fff'
    //     }
    //   };
      

    const styles = {
        ':root': {
          fontSize: '1rem',
          '--color-primary': 'hsl(235, 35%, 19%)',
          '--color-secondary': 'hsl(358, 78%, 69%)',
          '--color-font': 'hsla(0, 0%, 100%, 0.902)',
          '--color-shadow': 'hsl(235, 36%, 35%)',
        },
        appContainerAll: {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        appHeader: {
          height: '100%',
          backgroundColor: 'var(--color-primary)',
          fontSize: '1.6rem',
          fontFamily: 'Open sans, sans-serif',
        },
        appText: {
          color: 'var(--color-font)',
        },
        appIcon: {
          fontSize: '3.2rem',
        },
        appSection: {
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        },
        appContainer: {
          width: 'min(16rem, 100%)',
          marginInline: 'auto',
          paddingInline: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        },
       appPainel: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          textAlign: 'center',
          width: '20rem',
          marginBlock: '5rem',
          padding: '1rem',
          borderRadius: '10rem',
          WebkitBoxShadow: '0 0px 15px 10px var(--color-shadow)',
          boxShadow: '0px 0px 15px 10px var(--color-shadow)',
        },
        appPainelP: {
          opacity: 0.8,
          transition: '1s ease-in',
        },
        appPainelPActive: {
          opacity: 1,
          color: 'var(--color-secondary)',
        },
        appTimer: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '20rem',
          height: '20rem',
          borderRadius: '50%',
          WebkitBoxShadow: '0px 0px 15px 10px var(--color-shadow)',
          boxShadow: '0px 0px 15px 10px var(--color-shadow)',
        },
        appCircle: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '16rem',
          height: '16rem',
          borderRadius: '50%',
          backgroundColor: 'var(--color-secondary)',
          position: 'relative',
        },
        appCircleBefore: {
          content: "''",
          position: 'absolute',
          width: '95%',
          height: '95%',
          borderRadius: '50%',
          backgroundColor: 'var(--color-primary)',
        },
        appTime: {
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
        },
        appTimeP: {
          fontSize: '3.6rem',
        },
        appTimePSecond: {
          position: 'relative',
          top: '-.5rem',
          marginInline: '1rem',
        },
        appControls: {
          marginTop: '3rem',
        },
        appControlsButton: {
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
        },
        appControlsReset: {
          display: 'none',
        },
        appWhiteIcon: {
          color: 'white',
        }
      };
      
    
      
    
  return (
    <div style={styles.appContainer}>
      <h1 style={styles.appHeader}>pomodoro</h1>

      <div style={styles.appPainel}>
        <p style={styles.appText} id="work">work</p>
        <p style={styles.appText} id="break">break</p>
      </div>

      <div style={styles.appTimer}>
        <div style={styles.appCircle}>
          <div style={styles.appTime}>
            <p style={styles.appText} id="minutes"></p>
            <p>:</p>
            <p style={styles.appText} id="seconds"></p>
          </div>
        </div>
      </div>

      <div style={styles.appControls}>
        <button style={styles.appControlsButton} id="start">
       
        </button>
        <a style={styles.appControlsReset} id="reset" href="./">
          
        </a>
      </div>
    </div>
  );
}

export default App;
*/

/*
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  let workTittle;
  let breakTittle;
  let workTime = 25;
  let breakTime = 5;
  let seconds = "00";

  window.onload = () => {
    workTittle = document.getElementById('work');
    breakTittle = document.getElementById('break');

    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
  }

  const styles = {
    ':root': {
      fontSize: '1rem',
      '--color-primary': 'hsl(235, 35%, 19%)',
      '--color-secondary': 'hsl(358, 78%, 69%)',
      '--color-font': 'hsla(0, 0%, 100%, 0.902)',
      '--color-shadow': 'hsl(235, 36%, 35%)',
    },
    appContainerAll: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    appHeader: {
      height: '100%',
      backgroundColor: 'var(--color-primary)',
      fontSize: '1.6rem',
      fontFamily: 'Open sans, sans-serif',
    },
    appText: {
      color: 'var(--color-font)',
    },
    appIcon: {
      fontSize: '3.2rem',
    },
    appSection: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
    },
    appContainer: {
      width: 'min(16rem, 100%)',
      marginInline: 'auto',
      paddingInline: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
   appPainel: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      textAlign: 'center',
      width: '20rem',
      marginBlock: '5rem',
      padding: '1rem',
      borderRadius: '10rem',
      WebkitBoxShadow: '0 0px 15px 10px var(--color-shadow)',
      boxShadow: '0px 0px 15px 10px var(--color-shadow)',
    },
    appPainelP: {
      opacity: 0.8,
      transition: '1s ease-in',
    },
    appPainelPActive: {
      opacity: 1,
      color: 'var(--color-secondary)',
    },
    appTimer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '20rem',
      height: '20rem',
      borderRadius: '50%',
      WebkitBoxShadow: '0px 0px 15px 10px var(--color-shadow)',
      boxShadow: '0px 0px 15px 10px var(--color-shadow)',
    },
    appCircle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '16rem',
      height: '16rem',
      borderRadius: '50%',
      backgroundColor: 'var(--color-secondary)',
      position: 'relative',
    },
    appCircleBefore: {
      content: "''",
      position: 'absolute',
      width: '95%',
      height: '95%',
      borderRadius: '50%',
      backgroundColor: 'var(--color-primary)',
    },
    appTime: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
    },
    appTimeP: {
      fontSize: '3.6rem',
    },
    appTimePSecond: {
      position: 'relative',
      top: '-.5rem',
      marginInline: '1rem',
    },
    appControls: {
      marginTop: '3rem',
    },
    appControlsButton: {
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
    appControlsReset: {
      display: 'none',
    },
    appWhiteIcon: {
      color: 'white',
    }
  };

  function start() {
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;
    let breakCount = 0;

    let timerFunction = () => {
      document.getElementById('minutes').innerHTML = workMinutes;
      document.getElementById('seconds').innerHTML = seconds;

      seconds = seconds - 1;

      if (seconds === 0) {
        workMinutes = workMinutes - 1;
        if (workMinutes === -1) {
          if (breakCount % 2 === 0) {
            workMinutes = breakMinutes;
            breakCount++;
            workTittle.classList.remove('active');
            breakTittle.classList.add('active');
          } else {
            workMinutes = workTime;
            breakCount++;
            breakTittle.classList.remove('active');
            workTittle.classList.add('active');
          }
          document.getElementById('alarm').play();
        }
        seconds = 59;
      }
    }

    setInterval(timerFunction, 1000);
  }

  return (
    <div>
      <section>
        <div className="app-container">
          <h1 className="app-header">pomodoro</h1>
          <div className="app-painel">
            <p id="work" className="app-text active">work</p>
            <p id="break" className="app-text">break</p>
          </div>
          <div className="app-timer">
            <div className="app-circle">
              <div className="app-time">
                <p id="minutes" className="app-text"></p>
                <p>:</p>
                <p id="seconds" className="app-text"></p>
              </div>
            </div>
          </div>
          <div className="app-controls">
            <button id="start" onClick={start}>
              <FontAwesomeIcon icon={faPlay} className="app-white-icon" />
            </button>
            <a id="reset" href="./" style={{display: "none"}}>
              <FontAwesomeIcon icon={faArrowRotateLeft} className="app-white-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
*/


import React from 'react';
// import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';

const Pomodoro = () => {
  let workTittle;
  let breakTittle;
  let workTime = 25;
  let breakTime = 5;
  let seconds = "00";

  window.onload = () => {
    workTittle = document.getElementById('work');
    breakTittle = document.getElementById('break');

    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
  }

  const styles = {
    ':root': {
      fontSize: '1rem',
      '--color-primary': 'hsl(235, 35%, 19%)',
      '--color-secondary': 'hsl(358, 78%, 69%)',
      '--color-font': 'hsla(0, 0%, 100%, 0.902)',
      '--color-shadow': 'hsl(235, 36%, 35%)',
    },
    appContainerAll: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    appHeader: {
      height: '100%',
      backgroundColor: 'var(--color-primary)',
      fontSize: '1.6rem',
      fontFamily: 'Open sans, sans-serif',
    },
    appText: {
      color: 'var(--color-font)',
    },
    appIcon: {
      fontSize: '3.2rem',
    },
    appSection: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
    },
    appContainer: {
      width: 'min(16rem, 100%)',
      marginInline: 'auto',
      paddingInline: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
   appPainel: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      textAlign: 'center',
      width: '20rem',
      marginBlock: '5rem',
      padding: '1rem',
      borderRadius: '10rem',
      WebkitBoxShadow: '0 0px 15px 10px var(--color-shadow)',
      boxShadow: '0px 0px 15px 10px var(--color-shadow)',
    },
    appPainelP: {
      opacity: 0.8,
      transition: '1s ease-in',
    },
    appPainelPActive: {
      opacity: 1,
      color: 'var(--color-secondary)',
    },
    appTimer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '20rem',
      height: '20rem',
      borderRadius: '50%',
      WebkitBoxShadow: '0px 0px 15px 10px var(--color-shadow)',
      boxShadow: '0px 0px 15px 10px var(--color-shadow)',
    },
    appCircle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '16rem',
      height: '16rem',
      borderRadius: '50%',
      backgroundColor: 'var(--color-secondary)',
      position: 'relative',
    },
    appCircleBefore: {
      content: "''",
      position: 'absolute',
      width: '95%',
      height: '95%',
      borderRadius: '50%',
      backgroundColor: 'var(--color-primary)',
    },
    appTime: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
    },
    appTimeP: {
      fontSize: '3.6rem',
    },
    appTimePSecond: {
      position: 'relative',
      top: '-.5rem',
      marginInline: '1rem',
    },
    appControls: {
      marginTop: '3rem',
    },
    appControlsButton: {
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
    appControlsReset: {
      display: 'none',
    },
    appWhiteIcon: {
      color: 'white',
    }
  };

  function start() {
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;
    let breakCount = 0;

    let timerFunction = () => {
      document.getElementById('minutes').innerHTML = workMinutes;
      document.getElementById('seconds').innerHTML = seconds;

      seconds = seconds - 1;

      if (seconds === 0) {
        workMinutes = workMinutes - 1;
        if (workMinutes === -1) {
          if (breakCount % 2 === 0) {
            workMinutes = breakMinutes;
            breakCount++;
            workTittle.classList.remove('active');
            breakTittle.classList.add('active');
          } else {
            workMinutes = workTime;
            breakCount++;
            breakTittle.classList.remove('active');
            workTittle.classList.add('active');
          }
          document.getElementById('alarm').play();
        }
        seconds = 59;
      }
    }

    setInterval(timerFunction, 1000);
  }

  return (
    <div>
      <section>
        <div className="app-container" style={styles.appContainer}>
          <h1 className="app-header" style={styles.appHeader}>pomodoro</h1>
          <div className="app-painel" style={styles.appPainel}>
            <p id="work" className="app-text active" style={styles.appText}>work</p>
            <p id="break" className="app-text" style={styles.appText}>break</p>
          </div>
          <div className="app-timer" style={styles.appTimer}>
            <div className="app-circle" style={styles.appCircle}>
              <div className="app-time" style={styles.appTime}>
                <p id="minutes" className="app-text" style={styles.appTimeP}></p>
                <p>:</p>
                <p id="seconds" className="app-text" style={styles.appTimeP}></p>
              </div>
            </div>
          </div>
          <div className="app-controls" style={styles.appControls}>
            <button id="start" onClick={start} style={styles.appControlsButton}>
              <FontAwesomeIcon icon={faPlay} className="app-white-icon" />
            </button>
            <a id="reset" href="./pomodoro" style={{ display: "none" }}>
              <FontAwesomeIcon icon={faArrowRotateLeft} className="app-white-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pomodoro;
