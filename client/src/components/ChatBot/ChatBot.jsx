
import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './ChatBot.css'
import App from './App'
// import Gemini from './Gemini';

const ChatBot = () => {
  return (
    <main>
        {/* <Navbar /> */}
        <Outlet />
        <App />
        {/* <Gemini /> */}
    </main>
  )
}

export default ChatBot