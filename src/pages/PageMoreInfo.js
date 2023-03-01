//PageMoreInfo.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../globals/globals';
import {IMG_URL} from '../globals/globals';
// import IMG_PATH from '../globals/globals';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
      
    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?${API_KEY}`);
                const movieData = await response.json();
                setMovie(movieData);
            } catch (error) {
                console.error(error);
            }
        };
                
      fetchMovieDetails();
      }, [id]);
      
      if (!movie) {
        return <div>Loading...</div>;
      }
      
      return (
      <div>
        <main className='more'>
          <h2>{movie.title}</h2>
          <img className='more-info-pic' src={`${IMG_URL}/original/${movie.poster_path}`} alt={movie.title} />
          <p>{movie.overview}</p>
          <h3>{movie.tagline}</h3>
          <h3>{movie.homepage}</h3>
          </main>
      </div>
      );
    }

export default MovieDetails;