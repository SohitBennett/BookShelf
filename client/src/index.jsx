import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import About from "./pages/About/About";
import Signup from './pages/Signup';
import Login from './pages/Login';
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Newest from './pages/Newest/Newest';
import Pomodoro from './pages/Pomodoro/Pomodoro';
import LoginSignup from './pages/LoginSignup/LoginSignup';
import Review from './components/Review/Review';
import UserDetails from './pages/LoginSignup/userDetails';
import RenderUs from './pages/LoginSignup/RenderUs';
import Dashboard from './pages/Dashboard/Dashboard';
import { UserProvider } from './userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path = "/"  element = {<Home />}>
            {/* <Route path = "search" element = {<Search />} />   */}
            {/* <Route path = "about" element = {<About />} />
            <Route path = "book" element = {<BookList />} />
            <Route path = "/book/:id" element = {<BookDetails />} /> */}
          </Route>
          <Route path = "about" element = {<About />}></Route>
          <Route path = "book" element = {<BookList />}></Route>
          <Route path = "/book/:id" element = {<BookDetails />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/register' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/newest' element={<Newest />}></Route>
          <Route path='/pomodoro' element={<Pomodoro />}></Route>
          <Route path='/loginsignup' element={<LoginSignup />}></Route>
          <Route path='/review' element={<Review />}></Route>
          <Route path='/renderus' element={<RenderUs />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>,
    </UserProvider>
  </AppProvider>
);

