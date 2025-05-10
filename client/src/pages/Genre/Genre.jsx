import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Genre.css'; // Import CSS file for styling
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../userContext';


const Genre = () => {
    const allGenres = [
        { name: 'Fantasy', count: 12240 },
        { name: 'Adventure', count: 7979 },
        { name: 'Fiction', count: 7961 },
        { name: 'Science fiction', count: 6798 },
        { name: 'Classics', count: 5840 },
        { name: 'War', count: 2470 },
        { name: 'LGBTQ', count: 2019 },
        { name: 'Romance', count: 1950 },
        { name: 'Dystopian', count: 1917 },
        { name: 'Nonfiction', count: 1894 },
        { name: 'History', count: 1668 },
        { name: 'Comics', count: 1499 },
        { name: 'Mystery', count: 1403 },
        { name: 'Biography', count: 1291 },
        { name: 'Space', count: 1116 },
        { name: 'Aliens', count: 830 },
        { name: 'Manga', count: 585 },
        { name: 'Thriller', count: 560 },
        { name: 'Suspense', count: 537 },
        { name: 'General', count: 453 },
        { name: 'Murder', count: 432 },
        { name: 'Philosophy', count: 422 },
        { name: 'Religion', count: 393 },
        { name: 'Historical Fiction', count: 385 },
        { name: 'Business', count: 378 },
        { name: 'Psychology', count: 358 },
        { name: 'Humor', count: 320 },
        { name: 'Politics', count: 306 },
        { name: 'Magic', count: 306 },
        { name: 'Friendship', count: 302 },
        { name: 'Literature', count: 299 },
        { name: 'Women', count: 290 },
        { name: 'Family', count: 287 },
        { name: 'Police', count: 272 },
        { name: 'Science', count: 262 },
        { name: 'Horror', count: 256 },
        { name: 'Urban Fantasy', count: 218 },
        { name: 'Travel', count: 213 },
        { name: 'African Americans', count: 212 },
        { name: 'Memoir', count: 210 },
        { name: 'Poetry', count: 192 },
        { name: 'Graphic novels', count: 131 },
        { name: 'Short stories', count: 115 },
        { name: 'Middle Grade', count: 99 },
        { name: 'Crime', count: 98 },
        { name: 'Children', count: 94 },
        { name: 'Contemporary Romance', count: 89 },
        { name: 'Contemporary', count: 83 },
        { name: 'Finance', count: 78 },
        { name: 'High Fantasy', count: 67 },
        { name: 'Spanish', count: 63 },
        { name: 'Fairy tales', count: 61 },
        { name: 'Self help', count: 61 },
        { name: 'Dark Romance', count: 58 },
        { name: 'Literary Fiction', count: 53 },
        { name: 'Native Americans', count: 53 },
        { name: 'Christmas', count: 52 },
        { name: 'Mathematics', count: 44 },
        { name: 'Epic Fantasy', count: 42 },
        { name: 'Folklore', count: 40 },
        { name: 'low fantasy', count: 39 },
        { name: 'Magical Realism', count: 39 },
        { name: 'Steampunk', count: 38 },
        { name: 'Romantic Comedy', count: 34 },
        { name: 'Christian Living', count: 34 },
        { name: 'Space Opera', count: 31 },
        { name: 'Paranormal Romance', count: 30 },
        { name: 'erotica', count: 29 },
        { name: 'Gothic Horror', count: 28 },
        { name: 'Historical Fantasy', count: 27 },
        { name: 'Romantic Suspense', count: 27 },
        { name: 'New adult', count: 27 },
        { name: 'picture book', count: 26 },
        { name: 'Paranormal', count: 25 },
        { name: 'non-fiction', count: 25 },
        { name: 'Encyclopedia', count: 24 },
        { name: 'Holiday', count: 24 },
        { name: 'psychological horror', count: 24 },
        { name: 'Mythology', count: 23 },
        { name: 'Christian Fiction', count: 23 },
        { name: 'speculative fiction', count: 23 },
        { name: 'autobiography', count: 21 },
        { name: 'Parenting', count: 21 },
        { name: 'Paranormal Erotic Romance', count: 21 },
        { name: 'Time Travel', count: 21 },
        { name: 'litrpg', count: 21 },
        { name: 'Children\'s Literature', count: 21 },
        { name: 'Smutty', count: 20 },
        { name: 'Technology', count: 19 },
        { name: 'Romantasy', count: 19 },
        { name: 'Retellings', count: 19 },
        { name: 'Psychological thriller', count: 19 },
        { name: 'comedy', count: 18 },
        { name: 'Women\'s Fiction', count: 17 },
        { name: 'Quotation', count: 17 },
        { name: 'Post Apocalyptic', count: 17 },
        { name: 'Geography', count: 16 },
        { name: 'Personal Development', count: 16 },
    ];
  const { genreName, setGenreName } = useUserContext();  
  const [displayedGenres, setDisplayedGenres] = useState(11); // Initial number of displayed genres
  const [loadedMore, setLoadedMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();


  const handleLoadMore = () => {
    setDisplayedGenres(displayedGenres + 6); // Increase the number of displayed genres by 6
    // setLoadedMore(true);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredGenres = allGenres.filter(genre =>
    genre.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGenreClick = (genreName) => {
    genreName = genreName.replace(/\s+/g, '').toLowerCase();
    // console.log(genreName);
    // setGenreName(genreName);
    
    // window.location.href = "/genrepage";
    navigate(`/genrepage/${genreName}`);
    
  };  

  return (
    <div className="genre-container">
      <h1>Genres</h1>
      <p>Explore all books on BookShelf by genre. You can add a genre to any book from the book button.</p>
      <input type="text" className="search-input" placeholder="Search genres..." onChange={handleSearch} />
      <ul className="genre-list">
        {filteredGenres.slice(0, displayedGenres).map((genre, index) => (
        //   <li key={index} className="genre-item">
        //     <Link to='/' className="genre-link">
        //         <span className="genre-name">{genre.name}</span>
        //     </Link>    
        //     <span><FaExternalLinkAlt /></span>
        //   </li>

        // <li key={index} className="genre-item" onClick={() => handleGenreClick(genre.name)}>
        //   <span className="genre-name">{genre.name}</span>
        //   <span><FaExternalLinkAlt /></span>
        // </li>

        <li key={index} className="genre-item">
            <button onClick={() => handleGenreClick(genre.name)} className="genre-button">
            <span className="genre-name">{genre.name}</span>
            
            </button>
            <span><FaExternalLinkAlt /></span>
        </li>

        ))}
      </ul>
      {!loadedMore && <button className="load-more-btn" onClick={handleLoadMore}>Load More</button>}

    </div>
  );
};

export default Genre;




// count - {/* <span className="genre-count">({genre.count} books)</span> */}