import React, { useState, useEffect } from 'react';
import {endPointTopRatedMovies, IMG_URL } from "../globals/globals";
import userRatingIcon from '../components/images/userRatingIcon.jpg';
import { Link } from 'react-router-dom';
// import AppRouter from "../routers/AppRouter";
const TopRatedMovies = () => {

  // const movieList = useHistory();
  // const handleClick = (id) => {
  //   history.push('/movies/${id}/details')
  // }

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
            <MovieCardTopRated key={movie.id} movie={movie}/>
        ))}
      </div>
  );
};

const MovieCardTopRated = ({ movie }) => {
  return (
    <div>
     
      
        <img className="user-icon"  src={userRatingIcon} alt=''/>
     
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

export default TopRatedMovies;


