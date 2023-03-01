import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY } from '../globals/globals';
import { PageMoreInfo } from '../pages/PageMoreInfo';


// const MoreInfo = () => {
//   const [movie, setMovie] = useState([]);
//     //const [id, setId] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//     const movieresponse = await fetch(`${BASE_URL}${movieID}?${API_KEY}`);
//     const data = await movieresponse.json();
//   setMovie(data.results);
// };
// fetchData();
// }, [])

// return (
// <div className='more_info'>
//     <h2>heyhey</h2>
//     <h1>{movie.title}</h1>
//     <p>{movie.overview}</p>
// </div>
// );
// };

// export default MoreInfo;