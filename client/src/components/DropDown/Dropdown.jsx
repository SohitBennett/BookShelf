import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >
      <li className='dropdown-item'>
        <Link to='/newest' className='dropdown-link'>
          Newest Books
        </Link>
      </li>
      <li className='dropdown-item'>
        <Link to='/genre' className='dropdown-link'>
          Genres
        </Link>
      </li>
      <li className='dropdown-item'>
        <Link to='/pomodoro' className='dropdown-link'>
          Pomodoro
        </Link>
      </li>
      {/* <li className='dropdown-item'>
        <Link to='/lofi' className='dropdown-link'>
          Lo-fi
        </Link>
      </li> */}
      <li className='dropdown-item'>
        <Link to='/chatbot' className='dropdown-link'>
          Ai recommendation
        </Link>
      </li>
      <li className='dropdown-item'>
        <Link to='/recommendations' className='dropdown-link'>
          Book recommendations 
        </Link>
      </li>
    </ul>
  );
};

export default Dropdown;
