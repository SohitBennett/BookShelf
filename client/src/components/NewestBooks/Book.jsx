// // import React from 'react';

// // const Book = ({ volumeInfo }) => {
// //     const thumbnail = volumeInfo.imageLinks?.thumbnail;
// //     const title = volumeInfo.title;
// //     const authors = volumeInfo.authors;
// //     const publisher = volumeInfo.publisher;
// //     const publishedDate = volumeInfo.publishedDate;

// //     return (
// //         <div className="book-item">
// //             <div className="book-item-img">
// //                 <img src={thumbnail} alt={title} />
// //             </div>
// //             <div className="book-item-info">
// //                 <div className="book-item-info-item title">
// //                     {title}
// //                 </div>

// //                 <div className="book-item-info-item author">
// //                     <span className='text-capitalize fw-7'>Author: </span>
// //                     {authors && authors.join(", ")}
// //                 </div>
                
// //                 <div className="book-item-info-item publisher">
// //                 <span className='text-capitalize fw-7'>Publisher: </span>
// //                     {publisher && `${publisher}, `}
// //                     <br />
// //                     <span className='text-capitalize fw-7'>First Publish Year: </span>
// //                     <span className="publish-year">{publishedDate}</span>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Book;


// import React from 'react';
// import { FaRegBookmark } from "react-icons/fa"; // Import FaRegBookmark icon
// import Star from '../Star';

// const Book = ({ volumeInfo }) => {
    
//   const thumbnail = volumeInfo.imageLinks?.thumbnail;
//   const title = volumeInfo.title;
//   const authors = volumeInfo.authors;
//   const publisher = volumeInfo.publisher;
//   const publishedDate = volumeInfo.publishedDate; 
//   const randomNumber = Math.random() * 2.5;
//   const stars = randomNumber + 2.5;
//   const reviews = Math.floor(Math.random() * 901) + 100;

//   return (
//     <div className='book-item flex flex-column flex-sb'>
//       <div className="book-item-img">
//             <img src={thumbnail} alt={title} />
//         </div>
//       <div className='book-item-info text-center'>
//           <div className='book-item-info-item title fw-7 fs-18'>
//             <span>{title}</span>
//           </div>
//         <Star stars={stars} reviews={reviews}/>
//         <div className='book-item-info-item author fs-15'>
//           <span className='text-capitalize fw-7'>Author: </span>
//           <span>{authors && authors.join(", ")}</span>
//         </div>

//         <div className='book-item-info-item publish-year fs-15'>
//           <span className='text-capitalize fw-7'>First Publish Year: </span>
//           <span className="publish-year">{publishedDate}</span>
//         </div>

//         <div className='book-item-info-item bookmark-button'>
//           <button className='bookmark-btn'>
//             <span>BookMark</span>
//             <FaRegBookmark /> 
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Book;




//--------------------trying ratings 

// import React from 'react';
// import { FaRegBookmark } from "react-icons/fa"; // Import FaRegBookmark icon

// const Book = ({ volumeInfo }) => {
    
//   if (!volumeInfo) {
//     console.log("volumeinfo not found");
//     return null; // If volumeInfo is undefined, return null to render nothing
//   }

//   const thumbnail = volumeInfo.imageLinks?.thumbnail;
//   const title = volumeInfo.title;
//   const authors = volumeInfo.authors;
//   const publisher = volumeInfo.publisher;
//   const publishedDate = volumeInfo.publishedDate; 

//   return (
//     <div className='book-item flex flex-column flex-sb'>
//       <div className="book-item-img">
//             {thumbnail && <img src={thumbnail} alt={title} />}
//         </div>
//       <div className='book-item-info text-center'>
//           <div className='book-item-info-item title fw-7 fs-18'>
//             <span>{title}</span>
//           </div>
//         <div className='book-item-info-item author fs-15'>
//           <span className='text-capitalize fw-7'>Author: </span>
//           <span>{authors && authors.join(", ")}</span>
//         </div>

//         <div className='book-item-info-item publish-year fs-15'>
//           <span className='text-capitalize fw-7'>First Publish Year: </span>
//           <span className="publish-year">{publishedDate}</span>
//         </div>

//         <div className='book-item-info-item bookmark-button'>
//           <button className='bookmark-btn'>
//             <span>BookMark</span>
//             <FaRegBookmark /> 
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Book;

//-----------------------working with published date but not the poster 

// import React from 'react';
// import { FaRegBookmark } from "react-icons/fa"; // Import FaRegBookmark icon

// const Book = ({ volumeInfo }) => {
//     console.log("Volume Info:", volumeInfo);

//     if (!volumeInfo) {
//         console.log("Volume info not found");
//         return null; // If volumeInfo is undefined, return null to render nothing
//     }

//     const thumbnail = volumeInfo.imageLinks?.thumbnail;
//     const title = volumeInfo.title;
//     const authors = volumeInfo.authors;
//     const publisher = volumeInfo.publisher;
//     const publishedDate = volumeInfo.publishedDate;

//     return (
//         <div className='book-item flex flex-column flex-sb'>
//             <div className="book-item-img">
//                 {thumbnail && <img src={thumbnail} alt={title} />}
//             </div>
//             <div className='book-item-info text-center'>
//                 <div className='book-item-info-item title fw-7 fs-18'>
//                     <span>{title}</span>
//                 </div>
//                 <div className='book-item-info-item author fs-15'>
//                     <span className='text-capitalize fw-7'>Author: </span>
//                     <span>{authors && authors.join(", ")}</span>
//                 </div>
//                 <div className='book-item-info-item publish-year fs-15'>
//                     <span className='text-capitalize fw-7'>First Publish Year: </span>
//                     <span className="publish-year">{publishedDate}</span>
//                 </div>
//                 <div className='book-item-info-item bookmark-button'>
//                     <button className='bookmark-btn'>
//                         <span>BookMark</span>
//                         <FaRegBookmark />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Book;




//--------------------trying for the poster 



import React from 'react';
import { FaRegBookmark } from "react-icons/fa"; // Import FaRegBookmark icon
import Star from '../Star';
import { useUserContext } from '../../userContext';
import AddToFavoritesButton from '../BookList/AddToFavoritesButton';

const Book = ({ bookId, volumeInfo }) => {
    const { email } = useUserContext();
    if (!volumeInfo) {
        return null;
    }
    const thumbnail = volumeInfo.thumbnail || 'https://via.placeholder.com/150';
    const title = volumeInfo.title || 'Unknown Title';
    const authors = volumeInfo.authors || ['Unknown Author'];
    const publishedDate = volumeInfo.publishedDate || 'N/A';
    // const averageRating = volumeInfo.averageRating || 'N/A';
    // const ratingsCount = volumeInfo.ratingsCount || 0;

    const stars = volumeInfo.averageRating || 'N/A';
    const reviews = volumeInfo.ratingsCount || 0;
    

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
                    <span>{authors.join(", ")}</span>
                </div>
                <div className='book-item-info-item publish-year fs-15'>
                    <span className='text-capitalize fw-7'>First Publish Year: </span>
                    <span className="publish-year">{publishedDate}</span>
                </div>
                {/* <div className='book-item-info-item rating fs-15'>
                    <span className='text-capitalize fw-7'>Average Rating: </span>
                    <span>{averageRating}</span>
                </div>
                <div className='book-item-info-item ratings-count fs-15'>
                    <span className='text-capitalize fw-7'>Ratings Count: </span>
                    <span>{ratingsCount}</span>
                </div> */}
                {/* <div className='book-item-info-item bookmark-button'>
                    <button className='bookmark-btn'>
                        <span>BookMark</span>
                        <FaRegBookmark />
                    </button>
                </div> */}

                <div className='book-item-info-item bookmark-button fs-15'>
                          
                          <AddToFavoritesButton bookId={bookId} email={email} />
                </div>
            </div>
        </div>
    )
}

export default Book;

