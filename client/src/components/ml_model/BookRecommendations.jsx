// import React, { useState } from 'react';
// import axios from 'axios';

// const BookRecommendations = () => {
//     const [bookTitle, setBookTitle] = useState('');
//     const [recommendations, setRecommendations] = useState([]);

//     const getRecommendations = async () => {
//         try {
//             const response = await axios.get(`http://localhost:3001/api/recommend/${bookTitle}`);
//             setRecommendations(response.data);
//         } catch (error) {
//             console.error('Error fetching recommendations:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Book Recommendations</h1>
//             <input 
//                 type="text" 
//                 value={bookTitle} 
//                 onChange={(e) => setBookTitle(e.target.value)} 
//                 placeholder="Enter a book title" 
//             />
//             <button onClick={getRecommendations}>Get Recommendations</button>
//             {recommendations.length > 0 && (
//                 <div>
//                     <h2>Recommendations:</h2>
//                     <ul>
//                         {recommendations.map((book, index) => (
//                             <li key={index}>
//                                 <h3>{book.title}</h3>
//                                 <p>Author: {book.author}</p>
//                                 <img src={book.image} alt={book.title} />
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BookRecommendations;



// import React, { useState } from 'react';
// import axios from 'axios';

// const BookRecommendations = () => {
//     const [bookTitle, setBookTitle] = useState('');
//     const [recommendations, setRecommendations] = useState([]);

//     const getRecommendations = async () => {
//         try {
//             const response = await axios.post('http://localhost:3001/api/recommend_books', { user_input: bookTitle });
//             setRecommendations(response.data);
//         } catch (error) {
//             console.error('Error fetching recommendations:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Book Recommendations</h1>
//             <input 
//                 type="text" 
//                 value={bookTitle} 
//                 onChange={(e) => setBookTitle(e.target.value)} 
//                 placeholder="Enter a book title" 
//             />
//             <button onClick={getRecommendations}>Get Recommendations</button>
//             {recommendations.length > 0 && (
//                 <div>
//                     <h2>Recommendations:</h2>
//                     <ul>
//                         {recommendations.map((book, index) => (
//                             <li key={index}>
//                                 <h3>{book}</h3>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BookRecommendations;



//------------- New fast api try 



import React, { useState } from "react";
import axios from "axios";


const BookRecommendations = () => {
    const [bookName, setBookName] = useState("");
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState("");

    const fetchRecommendations = async () => {
        try {
            const response = await axios.post("http://localhost:8000/recommend/", {
                book_name: bookName,
            });
            setRecommendations(response.data.recommended_books);
            setError(""); // Clear previous errors
        } catch (err) {
            setError(err.response?.data?.detail || "An error occurred");
            setRecommendations([]);
        }
    };

    // return (
    //     <div style={{ padding: "20px", fontFamily: "Arial" }}>
    //         <h1>Book Recommendation System</h1>
    //         <input
    //             type="text"
    //             value={bookName}
    //             onChange={(e) => setBookName(e.target.value)}
    //             placeholder="Enter book name"
    //             style={{
    //                 padding: "10px",
    //                 width: "300px",
    //                 margin: "10px 0",
    //                 border: "1px solid #ccc",
    //                 borderRadius: "4px",
    //             }}
    //         />
    //         <button
    //             onClick={fetchRecommendations}
    //             style={{
    //                 padding: "10px 20px",
    //                 backgroundColor: "#007bff",
    //                 color: "#fff",
    //                 border: "none",
    //                 borderRadius: "4px",
    //                 cursor: "pointer",
    //             }}
    //         >
    //             Get Recommendations
    //         </button>

    //         {error && <p style={{ color: "red" }}>{error}</p>}

    //         <ul style={{ marginTop: "20px" }}>
    //             {recommendations.map((book) => (
    //                 <li key={book.rank} style={{ marginBottom: "10px" }}>
    //                     {book.rank}. {book.title}
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // );

    return (
        <div className="min-h-screen bg-gradient-to-r flex flex-col items-center justify-center font-sans text-white">
            <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg w-150">
                <h1 className="text-2xl font-bold text-center mb-6">
                    Book Recommendation System
                </h1>
                <input
                    type="text"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    placeholder="Enter book name"
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    onClick={fetchRecommendations}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                >
                    Get Recommendations
                </button>

                {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

                <ul className="mt-6 space-y-3">
                    {recommendations.map((book) => (
                        <li
                            key={book.rank}
                            className="bg-gray-100 p-4 rounded-lg shadow"
                        >
                            {book.rank}. {book.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );


};

export default BookRecommendations;
