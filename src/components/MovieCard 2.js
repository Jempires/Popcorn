import React, { useState, useEffect } from 'react';
import {endPointTopRatedMovies, IMG_URL } from "../globals/globals";
import userRatingIcon from '../components/images/userRatingIcon.jpg';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom'
import { BASE_URL, API_KEY } from '../globals/globals';
import FavButton from './FavButton';


const MovieCard = ({ movie }) => {

    return (
      <>
      <div>
      <FavButton singleMovie={movie}/>
          <div>
            <Link to={{
              pathname:`/moreInfo/${movie.id}/details`,
            state:{movie}
            }}>
              <button variant='primary' className='more-info' >View More</button> 
            </Link> 
          </div>
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
  
    
      </div>
      </>
    );
  };

  export default MovieCard;