// import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
// import "./Navbar.css";
// import logoImg from "../../images/logo.png";
// import {HiOutlineMenuAlt3} from "react-icons/hi";

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const handleNavbar = () => setToggleMenu(!toggleMenu);

//   return (
//     <nav className='navbar' id = "navbar">
//       <div className='container navbar-content flex'>
//         <div className='brand-and-toggler flex flex-sb'>
//           <Link to = "/" className='navbar-brand flex'>
//             <img src = {logoImg} alt = "site logo" />
//             <span className='text-uppercase fw-7 fs-24 ls-1'>bookhub</span>
//           </Link>
//           <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
//             <HiOutlineMenuAlt3 size = {35} style = {{
//               color: `${toggleMenu ? "#fff" : "#010101"}`
//             }} />
//           </button>
//         </div>

//         <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
//           <ul className = "navbar-nav">
//             <li className='nav-item'>
//               <Link to = "home" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
//             </li>
//             <li className='nav-item'>
//               <Link to = "search" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Search</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import React, { useEffect, useState } from 'react';
import { Link, withRouter, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo_new.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaUser } from "react-icons/fa"; 
import axios from 'axios';
import { useUserContext } from '../../userContext';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const [userInfo, setUserInfo] = useState({});
  // const [userName, setUserName] = useState("");
  const { userName, setUserName } = useUserContext();
  const { email, setEmail } = useUserContext();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  useEffect(() => {
    
    const userInfoFromStorage = localStorage.getItem("userInfo");
  
    if (userInfoFromStorage) {
      try {

        const tokenParts = userInfoFromStorage.split('.');
        const encodedPayload = tokenParts[1];
        const decodedPayload = atob(encodedPayload);
        const parsedPayload = JSON.parse(decodedPayload);
  
        setUserInfo(parsedPayload);
  
        console.log(parsedPayload.email);
        const email = parsedPayload.email;
        setEmail(email);
        axios.post('http://localhost:3001/userName', {
          email
        })
        .then((response) => {
          const data = response.data;
          // console.log(data);
          setUserName(data.name);
        })
      } catch (error) {
        console.error("Error parsing userInfo:", error);
      }
    }
  }, [setUserName, setEmail]);
  

  const handleName = (e) => {
    const email = userInfo.email;
    e.preventDefault();
    axios.post('http://localhost:3001/userName', {
        email
    })
    .then((response) => {
      const data = response.data;
      console.log(data);
      setUserName(data.name);
    })
  }; 



  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
        localStorage.removeItem("userInfo");
        
        window.location.href = "/";
    }
};


    

return (
  <nav className='navbar' id="navbar">
    <div className='container navbar-content flex'>
      <div className='brand-and-toggler flex flex-sb'>
        <Link to="/" className='navbar-brand flex'>
          <img src={logoImg} alt="site logo" />
          <span className='text-uppercase fw-7 fs-24 ls-1'></span>
        </Link>
        <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
          <HiOutlineMenuAlt3 size={35} style={{ color: `${toggleMenu ? "#fff" : "#010101"}` }} />
        </button>
      </div>

      <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
        <ul className="navbar-nav">
          
          <li className='nav-item'>
            <Link to="/" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'onClick={handleLogout}>Logout</Link>
          </li>
          <li className='nav-item'>
            <Link to="/pomodoro" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Pomodoro</Link>
          </li>
          <li className='nav-item'>
            <Link to="/lofi" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Lofi</Link>
          </li>
          
          <li className='nav-item'>
            <Link to="/newest" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Newest</Link>
          </li>
          <li className='nav-item'>
            <Link to="/" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="search" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Search</Link>
          </li>
          

          <li className='nav-item'>
            {!localStorage.getItem("userInfo") ? (
              <Link to="loginsignup" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                <FaUser size={20} />
              </Link>
            ) : (
              <Link to="/" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                <FaUser size={20} />
              </Link>
            )}
          </li>


          <li className='nav-item'>
            {/* Use className instead of classNa */}
            <Link to="dashboard" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>{userName}</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

}

export default Navbar;




