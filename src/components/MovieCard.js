
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
                <div className="fav-container">
                    <PageFavs 
                        movie={movie} 
                        favorites={isFav}
                        handleFavClick={handleFavClick} 
                    />
                </div>           
              <section className='movie-description'>
                <p className="description"> {movie.overview}</p>
              </section>
            </div>
        </div>
        </>
      );
}
  export default MovieCard;