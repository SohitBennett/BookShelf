// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Loading from "../Loader/Loader";
// import coverImg from "../../images/cover_not_found.jpg";
// import { FaArrowLeft } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';

// const URL = "https://openlibrary.org/works";

// const PopularBooks = () => {
//     const { id } = useParams();
//     const [loading, setLoading] = useState(false);
//     const [books, setBooks] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         setLoading(true);
//         async function getPopularBooks() {
//             try {
//                 const response = await fetch(`${URL}.json?limit=10&sort=popular`);
//                 const data = await response.json();
//                 console.log(data);

//                 if (data && data.entries) {
//                     const popularBooks = data.entries.map(entry => {
//                         return {
//                             title: entry.title,
//                             cover_img: entry.cover ? `https://covers.openlibrary.org/b/id/${entry.cover}-L.jpg` : coverImg,
//                             description: entry.description ? entry.description.value : "No description found"
//                         };
//                     });
//                     setBooks(popularBooks);
//                 } else {
//                     setBooks([]);
//                 }
//                 setLoading(false);
//             } catch (error) {
//                 console.log(error);
//                 setLoading(false);
//             }
//         }
//         getPopularBooks();
//     }, []);

//     if (loading) return <Loading />;

//     return (
//         <section className='book-details'>
//             <div className='container'>
//                 <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
//                     <FaArrowLeft size={22} />
//                     <span className='fs-18 fw-6'>Go Back</span>
//                 </button>

//                 <div className='popular-books-content'>
//                     {books.map((book, index) => (
//                         <div className='popular-book' key={index}>
//                             <img src={book.cover_img} alt="cover img" />
//                             <div className='popular-book-info'>
//                                 <span className='fw-6 fs-24'>{book.title}</span>
//                                 <span>{book.description}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default PopularBooks;
