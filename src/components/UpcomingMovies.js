import React, { useState, useEffect } from 'react';
import {endPointUpcomingMovies, IMG_URL } from "../globals/globals";
import userRatingIcon from '../components/images/userRatingIcon.jpg';


const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
     endPointUpcomingMovies
     );
     
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
      <div className='movies-container'>
        {movies.map((movie) => (
            <MovieCardUpcoming key={movie.id} movie={movie} />
        ))}
      </div>
  );
};

const MovieCardUpcoming = ({ movie }) => {
  return (

    <div>
    <div>
    {/* <p className="score">Score</p> */}
    <img className="user-icon"  src={userRatingIcon} alt=''/>
  </div>
      <div className='movie-card'>
        <img  src={`${IMG_URL}/original/${movie.poster_path}`}
                        alt={movie.title} />

      <p className="userscore"> {movie.vote_average}</p>
        
        <section className='movie-description'>
        <p className="description"> {movie.overview}</p> 
        </section>
      
    </div>
</div>

  );
};

export default UpcomingMovies;
