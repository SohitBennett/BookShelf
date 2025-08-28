BookShelf

BookShelf is a MERN stack web application that allows users to discover, track, and manage books while providing personalized AI-powered recommendations. It combines book exploration with productivity tools like a Pomodoro timer to create the perfect environment for readers.

Features

Browse and search: Discover the newest and most popular books. Search by title, author, or genre.
AI recommendations: Personalized book suggestions based on user preferences.
Favorites: Save books to a personal collection.
Pomodoro timer: Stay productive with a built-in reading timer.
Authentication: Secure login/logout functionality with MongoDB integration.
API integrations: Uses OpenLibrary and Google Books API to fetch book data.
Responsive UI: Fully optimized for desktop, tablet, and mobile.

Tech Stack

Frontend

1. React.js
2. Redux (for state management)
3. TailwindCSS (for responsive UI design)

Backend
1. Node.js
2. Express.js
3. MongoDB (database)
4. RESTful APIs

Other Integrations
1. OpenLibrary API
2. Google Books API

Screenshots
<img width="2879" height="1466" alt="image" src="https://github.com/user-attachments/assets/8bdac168-ed42-4b36-a9e0-fe54813fa179" />
<img width="2879" height="1466" alt="image" src="https://github.com/user-attachments/assets/ac10227b-321b-43c9-a2a9-85e610550fce" />
<img width="2879" height="1473" alt="image" src="https://github.com/user-attachments/assets/57edb6e5-727f-4a03-ac97-cd7562ae46d1" />


Installation & Setup

Clone the repository:

git clone https://github.com/SohitBennett/bookshelf.git
cd bookshelf
Install dependencies:

# Backend
cd server
npm install

# Frontend
cd client
npm install

Create a .env file in the server/ directory with the following:

MONGO_URI=your_mongodb_connection_string
PORT=5000
REACT_APP_GOOGLE_BOOKS_API_KEY=your_api_key


Run the application:

# Backend
cd server
npm start

# Frontend
cd client
npm start
Open http://localhost:3000 in your browser.

Future Enhancements
1. Reading progress tracking
2. Dark mode
3. Notes and highlights on saved books
4. Analytics dashboard for reading habits
