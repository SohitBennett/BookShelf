// // AddToFavoritesButton.jsx

// import React, { useState } from 'react';
// import axios from 'axios';

// const AddToFavoritesButton = ({ bookId, email }) => {
//   const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);

//   const handleAddToFavorites = async () => {
//     try {
//       // Make a POST request to your backend API to add the book to favorites
//       await axios.post('/api/favorites/add', {
//         bookId: bookId,
//         email: email, // Pass the user's email obtained from authentication
//       });

//       // Update state to reflect that the book has been added to favorites
//       setIsAddedToFavorites(true);
//     } catch (error) {
//       console.error('Error adding book to favorites:', error);
//     }
//   };

//   return (
//     <button onClick={handleAddToFavorites} disabled={isAddedToFavorites}>
//       {isAddedToFavorites ? 'Added to Favorites' : 'Add to Favorites'}
//     </button>
//   );
// };

// export default AddToFavoritesButton;

// AddToFavoritesButton.jsx

// ############################ Working favourite add #########

// import React, { useState } from 'react';
// import axios from 'axios';

// const AddToFavoritesButton = ({ bookId, email }) => { // Change userId to email
//   const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);

//   const handleAddToFavorites = async () => {
//     try {
//       // Make a POST request to your backend API to add the book to favorites
//       await axios.post('http://localhost:3001/api/favorites/add', {
//         bookId: bookId,
//         email: email, // Pass the email obtained from authentication
//       });

//       // Update state to reflect that the book has been added to favorites
//       setIsAddedToFavorites(true);
//     } catch (error) {
//       console.error('Error adding book to favorites:', error);
//     }
//   };

//   return (
//     <button onClick={handleAddToFavorites} disabled={isAddedToFavorites}>
//       {isAddedToFavorites ? 'Added to Favorites' : 'Add to Favorites'}
//     </button>
//   );
// };

// export default AddToFavoritesButton;



// AddToFavoritesButton.jsx

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddToFavoritesButton = ({ bookId, email }) => {
//   const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);

//   useEffect(() => {
//     const checkFavoriteStatus = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/check-favorite/${bookId}`, {
//           params: {
//             email: email,
//           },
//         });
//         setIsAddedToFavorites(response.data.isFavorite);
//       } catch (error) {
//         console.error('Error checking favorite status:', error);
//       }
//     };

//     checkFavoriteStatus();
//   }, [bookId, email]);



//   const handleAddToFavorites = async () => {
//     try {
//       await axios.post('http://localhost:3001/api/favorites/add', {
//         bookId: bookId,
//         email: email,
//       });
//       setIsAddedToFavorites(true);
//     } catch (error) {
//       console.error('Error adding book to favorites:', error);
//     }
//   };

//   return (
//     <button onClick={handleAddToFavorites} disabled={isAddedToFavorites}>
//       {isAddedToFavorites ? 'Added to Favorites' : 'Add to Favorites'}
//     </button>
//   );
// };

// export default AddToFavoritesButton;



// try ---------------working!!!!!!!!!!!!!!


import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AddToFavoritesButton = ({ bookId, email }) => {
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
  
  //----------------working---------for one account
  useEffect(() => {
    
    const checkFavoriteStatus = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/check-favorite/${bookId}`, {
          params: {
            // email: email,
            bookId: bookId
          },
        });
        console.log(response.data.isFavorite);
        setIsAddedToFavorites(response.data.isFavorite);
      } catch (error) {
        console.error('Error checking favorite status:', error);
      }
    };

    checkFavoriteStatus();
  }, [bookId]);






  

//   useEffect(() => {
//     // Check if the user is logged out
//     const isUserLoggedOut = !localStorage.getItem('userInfo'); // You can modify this based on your authentication logic

//     // If user is logged out, reset the state
//     if (isUserLoggedOut) {
//       setIsAddedToFavorites(false);
//     }
//   }, []);

  const handleAddToFavorites = async () => {
    try {
      await axios.post('http://localhost:3001/api/favorites/add', {
        bookId: bookId,
        email: email,
      });
      setIsAddedToFavorites(true);
    } catch (error) {
      console.error('Error adding book to favorites:', error);
    }
  };

  return (
    <button onClick={handleAddToFavorites} disabled={isAddedToFavorites}>
      {isAddedToFavorites ? 'Added to Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default AddToFavoritesButton;
