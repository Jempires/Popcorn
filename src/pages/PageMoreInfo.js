//PageMoreInfo.js

import React from 'react';

// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { BASE_URL, API_KEY,} from '../globals/globals';
// import PageHome from "../pages/PageHome";

const SingleMovie = (props) => {
    const movie = props.location.state.movie;
    return (
        <div className="">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
    )
}
   
export default SingleMovie;




// const [movie, setMovie] = useState({});
   
// let {id} =useParams();

// // fetching movie details
// useEffect(() => {
//     const fetchMovie = async() => {
//         const fetchedResult = await fetch(`${BASE_URL}/${id}?api_key=${API_KEY}`);
//         let data = await fetchedResult.json();
//         setMovie(data);
//     };
//     fetchMovie();
// },[id]);


// return(
//     <div>
//         <h1>{movie.title}</h1>
//         <p>{movie.overview}</p>
//     </div>
// )

// }