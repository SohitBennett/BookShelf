

// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../../components/Navbar/Navbar';
// import './pages/LoginSignup/styles.css'
// import App from './App';

// const LoginSignup = () => {
//   return (
//     <main>
//         <App />
//         <Outlet />
//     </main>
//   )
// }

// export default LoginSignup


import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import App from './App';
// import './styles.css';


const LoginSignup = () => {
  return (
    <main>
      <App />
      <Outlet />
    </main>
  );
};

export default LoginSignup;


