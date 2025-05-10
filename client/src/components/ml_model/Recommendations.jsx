import React, { useEffect, useState } from 'react';
import BookRecommendations from './BookRecommendations';
import Navbar from '../../components/Navbar/Navbar';
// import Background from '../../components/Background/Background';


const Recommendations = () => {
    
    // const [playStatus,setPlayStatus] = useState(true);
    return (
        <div className="App">
            <Navbar />
            {/* <Background playStatus={playStatus}/> */}
            <BookRecommendations />
        </div>
    );
};

export default Recommendations;

