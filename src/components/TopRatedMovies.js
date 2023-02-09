import React, { useState, useEffect } from 'react';
import {endPointTopRatedMovies, IMG_URL } from "../globals/globals";
import userRatingIcon from '../components/images/userRatingIcon.jpg';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom'
// import { BASE_URL, API_KEY } from '../globals/globals';
import PageMoreInfo from '../pages/PageMoreInfo';



function TopRatedMovies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  // // let {id} = useParams();
  
  // const handleClick = async (id) => {
    
  //   const fetchedResult = await fetch(`${BASE_URL}/${movie.id}?api_key=${API_KEY}`);
      
  //     setMovieInfo(movieInfo);
  //     let movie = await fetchedResult.json();
  //     // history.push(`/movie/${id}`, { movie: data });
  //   };

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


  const handleClick = movie => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };


  return (
      <div className='movies-container'>
        {movies.map((movie) => (
            <MovieCardTopRated onClick={()=> handleClick(movie)} key={movie.id} movie={movie}/>
        ))}
           {isModalOpen && (
        <PageMoreInfo movie={selectedMovie} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

const MovieCardTopRated = ({ movie }) => {


  return (
    <div>
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
  );
};

export default TopRatedMovies;


