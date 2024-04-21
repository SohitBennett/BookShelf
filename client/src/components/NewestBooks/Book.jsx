// import React from 'react';

// const Book = ({ volumeInfo }) => {
//     const thumbnail = volumeInfo.imageLinks?.thumbnail;
//     const title = volumeInfo.title;
//     const authors = volumeInfo.authors;
//     const publisher = volumeInfo.publisher;
//     const publishedDate = volumeInfo.publishedDate;

//     return (
//         <div className="book-item">
//             <div className="book-item-img">
//                 <img src={thumbnail} alt={title} />
//             </div>
//             <div className="book-item-info">
//                 <div className="book-item-info-item title">
//                     {title}
//                 </div>

//                 <div className="book-item-info-item author">
//                     <span className='text-capitalize fw-7'>Author: </span>
//                     {authors && authors.join(", ")}
//                 </div>
                
//                 <div className="book-item-info-item publisher">
//                 <span className='text-capitalize fw-7'>Publisher: </span>
//                     {publisher && `${publisher}, `}
//                     <br />
//                     <span className='text-capitalize fw-7'>First Publish Year: </span>
//                     <span className="publish-year">{publishedDate}</span>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Book;


import React from 'react';
import { FaRegBookmark } from "react-icons/fa"; // Import FaRegBookmark icon
import Star from '../Star';

const Book = ({ volumeInfo }) => {
    
  const thumbnail = volumeInfo.imageLinks?.thumbnail;
  const title = volumeInfo.title;
  const authors = volumeInfo.authors;
  const publisher = volumeInfo.publisher;
  const publishedDate = volumeInfo.publishedDate; 
  const randomNumber = Math.random() * 2.5;
  const stars = randomNumber + 2.5;
  const reviews = Math.floor(Math.random() * 901) + 100;

  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className="book-item-img">
            <img src={thumbnail} alt={title} />
        </div>
      <div className='book-item-info text-center'>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{title}</span>
          </div>
        <Star stars={stars} reviews={reviews}/>
        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{authors && authors.join(", ")}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span className="publish-year">{publishedDate}</span>
        </div>

        <div className='book-item-info-item bookmark-button'>
          <button className='bookmark-btn'>
            <span>BookMark</span>
            <FaRegBookmark /> 
          </button>
        </div>
      </div>
    </div>
  )
}

export default Book;
