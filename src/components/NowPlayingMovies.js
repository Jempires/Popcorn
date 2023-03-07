import React, { useState, useEffect } from 'react';
import {endPointNowPlayingMovies, IMG_URL } from "../globals/globals";
import userRatingIcon from '../components/images/userRatingIcon.jpg';
import { Link } from 'react-router-dom';
import FavButton from './FavButton';
//import MovieCard from './MovieCard';

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
    <>
    <div className="movie-card">

      <div>
      {/* do not rearrange the placement of this FavButton component */}
      <FavButton singleMovie={movie} />
      <p className="userscore"> {movie.vote_average}</p>
      <img className="user-icon"  src={userRatingIcon} alt=''/>
      </div>
        
      <div className='movie-card'>
        <img src={`${IMG_URL}/original/${movie.poster_path}`}
            alt={movie.title} />
        {/* <p className="userscore"> {movie.vote_average}</p> */}
        
        <section className='movie-description'>
        <p className="description"> {movie.overview}</p>
        </section>
    </div>
    
    <div>
      <Link to={{
          pathname:`/moreInfo/${movie.id}`,
          state:{movie} }}>
        <button variant='primary' className='more-info'>View More</button> 
      </Link> 
    </div>
          </div>

 
  
</>
  );
};
export default NowPlayingMovies;
