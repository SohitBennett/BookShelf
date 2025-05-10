// import React from 'react';
// import Navbar from "../Navbar/Navbar";
// import SearchForm from "../SearchForm/SearchForm";
// import "./Header.css";
// import Background from '../Background/Background';
// import { useState } from 'react';

// const Header = () => {
//   const [playStatus,setPlayStatus] = useState(true);
//   return (
//     <div className='holder'>
//         <header className='header'>
//             {<Background playStatus={playStatus}/>}
           
//             <div className='header-content flex flex-c text-center text-black'>
//                 <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
//                 <p className='header-text fs-18 fw-3'></p>
//                 <SearchForm />
//             </div>
            
            
//         </header>
//     </div>
//   )
// }

// export default Header



import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import Background from '../Background/Background';
import { useState } from 'react';

const Header = () => {
  const [playStatus,setPlayStatus] = useState(true);
  return (
    <div className='holder'>
      <header className='header'>
        <Background playStatus={playStatus}/>
        <div className='header-content'>
          <h2 className='header-title text-capitalize text-white'>Find your book of choice.</h2>
          <p className='header-text fs-18 fw-3'></p>
          <div className="search-form">
            <SearchForm />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;
