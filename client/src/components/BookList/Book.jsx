/*
import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = (book) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {book.cover_img} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to = {`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author && Array.isArray(book.author) ? book.author.join(", ") : ''}</span>


        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
  )
}

export default Book
*/

/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import "./BookList.css";

const Book = ({ book }) => {
  // State to track whether the book is bookmarked
  const [bookmarked, setBookmarked] = useState(false);

  // Function to handle bookmark click
  const handleBookmarkClick = () => {
    // Here you would typically add the book to the user's wishlist
    // For demonstration purposes, let's just toggle the bookmarked state
    setBookmarked(!bookmarked);
  };

  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src={book.cover_img} alt="cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to={`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author && Array.isArray(book.author) ? book.author.join(", ") : ''}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>

       
        <div className='book-item-info-item bookmark-button'>
          <button className='bookmark-btn' onClick={handleBookmarkClick}>
            {bookmarked ? <span>Bookmarked</span> : <span>Bookmark</span>}
            {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Book;
*/


//working with bookmark icon

import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegBookmark } from "react-icons/fa"; // Import FaRegBookmark icon
import "./BookList.css";
import Star from '../Star';
import { useUserContext } from '../../userContext';
import AddToFavoritesButton from './AddToFavoritesButton';

const Book = (book) => {
  // const stars = Math.floor(Math.random() * 5) + 1;
  const randomNumber = Math.random() * 2.5;
  // Add 2.5 to the random number to get a rating between 2.5 and 5
  const stars = randomNumber + 2.5;
  const reviews = Math.floor(Math.random() * 901) + 100;
  const { email } = useUserContext();
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src={book.cover_img} alt="cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to={`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>
        <Star stars={stars} reviews={reviews}/>
        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author && Array.isArray(book.author) ? book.author.join(", ") : ''}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>

       
        
        <div className='book-item-info-item bookmark-button fs-15'>
          
          <AddToFavoritesButton bookId={book.id} email={email} />
        </div>
      </div>
    </div>
  )
}

export default Book;









// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaRegBookmark } from 'react-icons/fa';
// import "./BookList.css";
// import Star from '../Star';
// import AddToFavoritesButton from './AddToFavoritesButton'; // Import the AddToFavoritesButton component
// import { useUserContext } from '../../userContext';

// const Book = ({ book }) => {
//   const randomNumber = Math.random() * 2.5;
//   const stars = randomNumber + 2.5;
//   const reviews = Math.floor(Math.random() * 901) + 100;
//   const { email } = useUserContext(); // Use email instead of userId

//   return (
//     <div className='book-item flex flex-column flex-sb'>
//       <div className='book-item-img'>
//         <img src={book.cover_img} alt="cover" />
//       </div>
//       <div className='book-item-info text-center'>
//         <Link to={`/book/${book.id}`} {...book}>
//           <div className='book-item-info-item title fw-7 fs-18'>
//             <span>{book.title}</span>
//           </div>
//         </Link>
//         <Star stars={stars} reviews={reviews}/>
//         <div className='book-item-info-item author fs-15'>
//           <span className='text-capitalize fw-7'>Author: </span>
//           <span>{book.author && Array.isArray(book.author) ? book.author.join(", ") : ''}</span>
//         </div>
//         <div className='book-item-info-item edition-count fs-15'>
//           <span className='text-capitalize fw-7'>Total Editions: </span>
//           <span>{book.edition_count}</span>
//         </div>
//         <div className='book-item-info-item publish-year fs-15'>
//           <span className='text-capitalize fw-7'>First Publish Year: </span>
//           <span>{book.first_publish_year}</span>
//         </div>
//         <div className='book-item-info-item bookmark-button fs-15'>
//           <AddToFavoritesButton bookId={book.id} email={email} /> {/* Pass email instead of userId */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Book;


// Book.jsx

