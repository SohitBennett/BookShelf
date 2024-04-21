import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import UserDetails from './userDetails';


const RenderUs = () => {
  return (
    <main>
      <UserDetails />
      <Outlet />
    </main>
  );
};

export default RenderUs;