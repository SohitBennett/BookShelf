import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Search = () => {
  return (
    <main>
        <Navbar />
        <Header />
        <Outlet />
    </main>
  )
}

export default Search
