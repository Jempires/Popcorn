import React from 'react';
import { IMG_URL } from "../globals/globals";
import userRatingIcon from '../components/images/userRatingIcon.jpg';
import { Link } from 'react-router-dom';
import { addToFavorites, deleteFromFavorites } from '../features/favorites/favSlice';
import FavButton from './FavButton';
import { useDispatch } from 'react-redux';
import PageFavs from '../pages/PageFavs';

function MovieCard({movie, isFav}) {

  const dispatch = useDispatch();

  function handleFavClick(addFav, movie) {

    if(addFav === true) {
      dispatch(addToFavorites(movie));
    }else{
      dispatch(deleteFromFavorites(movie));
    }
  }
  
  return (
    <>
    <div className="movie-card">
      <div className="movie-card-content">
        
        <FavButton singleMovie={movie}/>
        <img src={`${IMG_URL}/original/${movie.poster_path}`} alt={`Movie Poster for ${movie.title}`} />
        <p className="userscore"> {movie.vote_average}</p>
        {/* <FavButton singleMovie={movie}/> */}

        <div className="hover-overlay">
          <p className="release-date">Release Date: <br></br> {movie.release_date} </p>
          <p className="description" id="movie-description">{movie.overview}</p>

          <Link to={{ pathname:`/moreInfo/${movie.id}/details`, state:{movie} }}>
            <button variant='primary' className='more-info'>More Info</button> 
          </Link> 
        </div>

      </div>    
    </div>
    </>   
  );
}
  export default MovieCard;