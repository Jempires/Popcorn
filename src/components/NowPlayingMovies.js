import React, { useState, useEffect } from 'react';
import {endPointNowPlayingMovies, IMG_URL } from "../globals/globals";


const NowPlayingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        endPointNowPlayingMovies
      );
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
      <div className='movies-container'>
        {movies.map((movie) => (
            <MovieCardNowPlaying key={movie.id} movie={movie} />
        ))}
      </div>
  );
};

const MovieCardNowPlaying = ({ movie }) => {
  return (
      <div className='movie-card'>
        <img  src={`${IMG_URL}/original/${movie.poster_path}`}
                        alt={movie.title} />

         {/* <h3  className="hover">{movie.title}</h3>
        <p className="hover">Rating: {movie.vote_average}</p> 
         <p className="hover">descriphfg,j.: {movie.description}</p> 
         button for more info page */}

        
      </div>
  );
};

export default NowPlayingMovies;
