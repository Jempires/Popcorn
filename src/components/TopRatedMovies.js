import React, { useState, useEffect } from 'react';
import {endPointTopRatedMovies, IMG_URL } from "../globals/globals";

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        endPointTopRatedMovies
      );
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
      <div className='movies-container'>
        {movies.map((movie) => (
            <MovieCardTopRated key={movie.id} movie={movie} />
        ))}
      </div>
  );
};

const MovieCardTopRated = ({ movie }) => {
  return (
      <div className='movie-card'>
        <img  src={`${IMG_URL}/original/${movie.poster_path}`}
                        alt={movie.title} />

          <p className="userscore"> {movie.vote_average}</p> 
          <p className="description"> {movie.overview}</p> 
     
          {/* https://api.themoviedb.org/3/movie/157336?api_key={api_key} */}
        
      </div>
  );
};

export default TopRatedMovies;


