

import React from 'react';
import Header from '../../components/Header/Header';
import { UserProvider, useUserContext } from '../../userContext';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Main from '../../components/GenreBooks/main';
// import './GenrePage.css'
import { useParams } from 'react-router-dom';


const GenrePage = () => {
    // const { genreName } = useUserContext(); 
    const { genreName } = useParams();
    console.log(genreName);
  return (
    <UserProvider>
        <main>
            
            <Navbar />
            <Outlet />
            <Main genreName={genreName}/> 
            
        </main>
    </UserProvider>    
  )
}

export default GenrePage