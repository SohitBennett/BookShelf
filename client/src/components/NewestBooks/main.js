import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";

const Main = () => {
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        fetchNewestBooks();
    }, []);

    const fetchNewestBooks = () => {
        axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
                q: 'subject:fiction',
                orderBy: 'newest',
                maxResults: 30,
                key: 'AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'
            }
        })
        .then(res => setBookData(res.data.items))
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
                        {bookData.map((book, index) => (
                            <Book key={index} {...book} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
