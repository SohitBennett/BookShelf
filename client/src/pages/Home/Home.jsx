// import React from 'react';
// import Header from '../../components/Header/Header';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../../components/Navbar/Navbar';
// import PopularBooks from '../../components/PopularBooks/PopularBooks';

// const Home = () => {
//   return (
//     <main>
//         <Navbar />

//         <Outlet />
//     </main>
//   )
// }

// export default Home


// import React from 'react';
// import Header from '../../components/Header/Header';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../../components/Navbar/Navbar';
// import PopularBooks from '../../components/PopularBooks/PopularBooks';

// const Home = () => {
//   return (
//     <main>
//         <Navbar />

//         <Outlet />
//     </main>
//   )
// }

// export default Home



// import React, { useState } from 'react';
// import Header from '../../components/Header/Header';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../../components/Navbar/Navbar';
// import PopularBooks from '../../components/PopularBooks/PopularBooks';

// const Home = () => {
//   const [message, setMessage] = useState("");

//   const handleClick = () => {
//     setMessage("You clicked the button!");
//   };

//   return (
//     <main>
//       <Navbar />

//       <h1>Welcome to BookMark!</h1>
//       <p>{message}</p>
//       <h2>A One Destination Website for everthing about Books!</h2>
//       <Outlet />
//     </main>
//   )
// }

// export default Home;


// import React, { useEffect, useState } from 'react';
// import Header from '../../components/Header/Header';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../../components/Navbar/Navbar';
// import PopularBooks from '../../components/PopularBooks/PopularBooks';



// const Home = () => {
//   const [message, setMessage] = useState("");
//   const [userInfo, setUserInfo] = useState(null);

//   // useEffect(() => {
//   //   const userInfoFromStorage = localStorage.getItem("userInfo");
//   //   setUserInfo(userInfoFromStorage);
    
//   // }, [history, userInfo] );

//   const handleClick = () => {
//     setMessage("You clicked the button!");
//   };

//   return (
//     <main style={{ textAlign: 'center' }}>
//       <Navbar />
      
//       <h1>Welcome to BookMark! </h1>
//       <p>{message}</p>
//       <h2>A one destination website for everything about books!</h2>
//       <Outlet />
//     </main>
//   )
// }

// export default Home;


// import React, { useEffect, useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../../components/Navbar/Navbar';

// const Home = ({ history }) => {
//   const [message, setMessage] = useState("");
//   const [userInfo, setUserInfo] = useState(null);

//   useEffect(() => {
//     const userInfoFromStorage = localStorage.getItem("userInfo");
//     try {
//       // Try to parse the userInfo string as JSON
//       const parsedUserInfo = JSON.parse(userInfoFromStorage);
//       setUserInfo(parsedUserInfo);
//     } catch (error) {
//       // Handle parsing error
//       console.error("Error parsing userInfo:", error);
//       // Optionally, you can set userInfo to null or an empty object here
//       setUserInfo(null);
//     }
//   }, [history]);

//   const handleClick = () => {
//     setMessage("You clicked the button!");
//   };

//   return (
//     <main style={{ textAlign: 'center' }}>
//       <Navbar />
//       <h1>Welcome to BookMark! </h1>
//       {userInfo && <h2>Welcome back {userInfo.name}!</h2>}
//       <p>{message}</p>
//       <h2>A one destination website for everything about books!</h2>
//       <Outlet />
//     </main>
//   )
// }

// export default Home;

//########################working email print ################

import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import Hero from '../../components/Hero/Hero';
import Background from '../../components/Background/Background';
import Navbar2 from '../../components/Navbar2/Navbar2';


const Home = () => {
  const [message, setMessage] = useState("");
  let herodata = [
    {text1:"BOOK SMART.",text2:"Your ultimate book companion: bookmark favorites, track reads, and enjoy a cozy study experience with lo-fi music and many more.",text3:"FIND : Search and browse for new books or find inspiration in other reader's libraries." , text4:"TRACK : Track every book by want to read, currently reading, read and did not finish.",text5:"CONNECT : Explore others reader's bookshelves and follow for their next reads.",text6:"DISCOVER : Use our set of amazing stats and tools, including AI, to discover new horizons in your reading journey."},
    {text1:"indulge",text2:"your passion"},
    {text1:"give in to ",text2:" your passion"},
  ]
  const [heroCount , setHeroCount] = useState(0);
  
  const [playStatus,setPlayStatus] = useState(true);
  // const [userInfo, setUserInfo] = useState(null);
  // const [userName, setUserName] = useState("");
  // useEffect(() => {
  //   // Get userInfo from localStorage
  //   const userInfoFromStorage = localStorage.getItem("userInfo");
    
  //   try {
  //     // Parse the JWT payload
  //     const tokenParts = userInfoFromStorage.split('.');
  //     const encodedPayload = tokenParts[1];
  //     const decodedPayload = atob(encodedPayload);
  //     const parsedPayload = JSON.parse(decodedPayload);
      
  //     // Set user info state
  //     setUserInfo(parsedPayload);
      
  //   } catch (error) {
  //     console.error("Error parsing userInfo:", error);
  //     setUserInfo(null);
  //   }
    
    
    
  // }, []);

  

  // const handleName = (e) => {
  //   const email = userInfo.email;
  //   e.preventDefault();
  //   axios.post('http://localhost:3001/userName', {
  //       email
  //   })
  //   .then((response) => {
  //     const data = response.data;
  //     console.log(data);
  //     setUserName(data.name);
  //   })
  // }; 

  const handleClick = () => {
    setMessage("You clicked the button!");
  };

  return (
    // <>
    // {/* <Navbar /> */}
    // <main style={{ textAlign: 'center' }}>
      
      
    //   {/* <h1>Welcome to BookMark! </h1> */}
    //   {/* Check if userInfo is available and display the user's name */}
      
    //   {/* {userInfo && <h2>Welcome back {userInfo.email.split('@')[0]}!</h2>} */}
    //   {/* <p>{message}</p> */}
      
      
     

    //   {/* <Outlet /> */}
    // </main>
    // </>  
    <>
    
    <div>
      <Navbar />
      <Background playStatus={playStatus} heroCount={heroCount}/>

      {/* <Navbar2/> */}

      <Hero heroData={herodata[heroCount]}/> 
      
    </div>
    </>
  )
}

export default Home;



