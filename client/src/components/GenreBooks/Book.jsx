

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

