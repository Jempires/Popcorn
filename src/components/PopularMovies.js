import React, { useState, useEffect } from 'react';
import {endPointPopularMovies , IMG_URL } from "../globals/globals";
import userRatingIcon from '../components/images/userRatingIcon.jpg';
import { Link } from 'react-router-dom';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        endPointPopularMovies 
      );
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

    return (
        <div className='movies-container'>
          {movies.map((movie) => (
              <MovieCardPopular key={movie.id} movie={movie} />
          ))}
        </div>
    );
  };

const MovieCardPopular = ({ movie }) => {
  return (
    
 
    <div>
    
        {/* onClick={handleClick} */}

        <img className="user-icon"  src={userRatingIcon} alt=''/>
     
        <div className='movie-card'>
          <img  src={`${IMG_URL}/original/${movie.poster_path}`}
                          alt={movie.title} />
        
            <p className="userscore"> {movie.vote_average}</p>
        
          <section className='movie-description'>
            <p className="description"> {movie.overview}</p>
          </section>
        </div>
        <div>
          <Link to={{
            pathname:`/moreInfo/${movie.id}/details`,
          state:{movie}
          }}>
            <button variant='primary' className='more-info' >View More</button> 
          </Link> 
        </div>


     
      
    </div>

//     <div>
//     <div>
//     {/* <p className="score">Score</p> */}
//     <img className="user-icon"  src={userRatingIcon} alt=''/>
//   </div>
//       <div className='movie-card'>
//         <img  src={`${IMG_URL}/original/${movie.poster_path}`}
//                         alt={movie.title} />

//       <p className="userscore"> {movie.vote_average}</p>
        
//         <section className='movie-description'>
//         <p className="description"> {movie.overview}</p> 
//         </section>
      
//     </div>
// </div>
  );
};

export default PopularMovies;

