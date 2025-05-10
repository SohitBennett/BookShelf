// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Book from "./Book";

// const Main = () => {
//     const [bookData, setBookData] = useState([]);

//     useEffect(() => {
//         fetchNewestBooks();
//     }, []);

//     const fetchNewestBooks = () => {
//         axios.get('https://www.googleapis.com/books/v1/volumes', {
//             params: {
//                 q: 'subject:romance',
//                 // orderBy: 'newest',
//                 maxResults: 30,
//                 key: 'AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'
//             }
//         })
//         .then(res => setBookData(res.data.items))
//         .catch(err => console.log(err));
//     };

//     return (
//         <>
//             <div className="booklist">
//                 <div className="container">
//                     <div className="section-title">
//                         <h2>Newest Books</h2>
//                     </div>
//                     <div className="booklist-content grid">
//                         {bookData.map((book, index) => (
//                             <Book key={index} {...book} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Main;



//----------------------trying rating 


import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";

const Main = () => {
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = () => {
        axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
                q: 'subject:',
                orderBy: 'newest',
                maxResults: 30,
                key: 'AIzaSyBWfH8RDAnSED7lKnBIZjHgPzW_-1uvsnQ'
            }
        })
        .then(res => {
            // Extract book data and add ratings information
            const books = res.data.items.map(item => {
                const bookInfo = item.volumeInfo;
                return {
                    bookId: item.id,
                    title: bookInfo.title,
                    authors: bookInfo.authors,
                    averageRating: bookInfo.averageRating || 'N/A',
                    ratingsCount: bookInfo.ratingsCount || 0,
                    publishedDate: bookInfo.publishedDate || 'N/A',
                    thumbnail: bookInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150',
                };
            });
            setBookData(books);
            console.log(books);
        })
        .catch(err => console.log(err));
    };

    return (
        <>
            <div className="booklist">
                <div className="container">
                    <div className="section-title">
                        <h2>Newest Books</h2>
                    </div>
                    <div className="booklist-content grid">
                        {/* {bookData.map((book, index) => {
                            <Book key={index} {...book} />
                        })} */}
                        {/* {bookData.map((book, index) => (
                            <Book key={index} volumeInfo={book} />
                        ))} */}
                        {bookData.map((book, index) => (
                            <Book key={index} bookId={book.bookId} volumeInfo={book} /> 
                        ))}




                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
