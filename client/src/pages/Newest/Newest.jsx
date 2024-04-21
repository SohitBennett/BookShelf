

import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Main from '../../components/NewestBooks/main';
// import 'src/pages/Newest/Newest.css'

const Newest = () => {
  return (
    <main>
        <Navbar />
        <Outlet />
        <Main /> 
    </main>
  )
}

export default Newest