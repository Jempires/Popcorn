//PageMoreInfo.js

import React, { useEffect } from 'react';
 import { useState} from 'react';
 import { useParams } from 'react-router-dom';
 import { BASE_URL, API_KEY,} from '../globals/globals';
//  import  from "../globals/globals"
// import {endPointTopRatedMovies} from "../globals/globals";
// import userRatingIcon from '../components/images/userRatingIcon.jpg';
import { IMG_URL } from "../globals/globals";

const PageMoreInfo = () => {
  const [movie, setMovie] = useState({});
  const [id, setId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${BASE_URL}${id}?${API_KEY}`);
      const data = await result.json();
      setMovie(data);
    };
    fetchData();
  }, [id])
  
  return (
    <div>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
    </div>
  );
}

export default PageMoreInfo;


// import React from 'react';

// // import { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // import { BASE_URL, API_KEY,} from '../globals/globals';
// // import PageHome from "../pages/PageHome";

// const PageMoreInfo = (props) => {
//     const movie = props.location.state.movie;
//     return (
//         <div className="">
//             <h1>{movie.title}</h1>
//             <p>{movie.overview}</p>
//         </div>
//     )
// }
   
// // export default SingleMovie;

// import { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// import { BASE_URL, API_KEY, IMG_PATH} from '../globals/globals';
// // import PageHome from "../pages/PageHome";

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await fetch(`${BASE_URL}${id}?${API_KEY}`);
//       const data = await result.json();
//       setMovie(data);
//     };
//     fetchData();
//   }, [id])
  
//   return (
//     <div>
//         <h1>{movie.title}</h1>
//         <p>{movie.overview}</p>
//     </div>
//   );
// }


// export default PageMoreInfo;   
  //     setId(movie.id);
  // }, [movie.id]);

  // return (
  //   <div className='page-more-info'>
  //     <h1>{movie.title}</h1>
  //     <p>{movie.overview}</p>
  //     <button onClick={onClose}>Close</button>
  //   </div>
//   );
// };


    // const fetchMovie = async () => {
//     const response = await fetch(`
//     ${BASE_URL}/movie/${id}?api_key=${API_KEY}`
//       );
//       const data = await response.json();
// setMovie(data);
// };
// fetchMovie();
// }, []);

// <div>
// {/* <img className="user-icon" src={userRatingIcon} alt="" />
/* <div className="movie-card">
    <img
      src={`${IMG_URL}/original/${movie.poster_path}`}
      alt={movie.title}
    />
=========
// // const [movie, setMovie] = useState({});
   
// // let {id} =useParams();

// // // fetching movie details
// // useEffect(() => { */
// //     const fetchMovie = async() => {
// //         const fetchedResult = await fetch(`${BASE_URL}/${id}?api_key=${API_KEY}`);
// //         let data = await fetchedResult.json();
// //         setMovie(data);
// //     };
// //     fetchMovie();
// // },[id]);


//     <p className="userscore">{movie.vote_average}</p>

//     <section className="movie-description">
//       <p className="description">{movie.overview}</p>
//     </section>
//   </div>
// </div> */

// // return(
// //     <div>
// //         <h1>{movie.title}</h1>
// //         <p>{movie.overview}</p>
// //     </div>
// // )

// // }

