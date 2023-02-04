// import React from "react";
import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import "../styles/main-nav.css";
//import heart from '../components/images/heart.png';
// import abouticon from '../components/images/abouticon.jpg';
import {endPointUpcomingMovies} from "../globals/globals";
import {endPointPopularMovies} from "../globals/globals";
import {endPointTopRatedMovies} from "../globals/globals";
import {endPointNowPlayingMovies} from "../globals/globals";
import {IMG_URL} from "../globals/globals";


const Search = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [searchresults, setSearchResults] = useState([]);
      //return value in search box
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        // console.log(search);
    };
    const handleSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
    };


    useEffect(() => {
        const fetchMovies = async () => {
          const responses = await Promise.all([
            fetch(endPointUpcomingMovies),
            fetch(endPointPopularMovies),
            fetch(endPointTopRatedMovies),
            fetch(endPointNowPlayingMovies)
          ]);
        

          const data = await Promise.all(responses.map(res => res.json()));
          const movieData = [].concat.apply([], data.map(moviesList => moviesList.results));
          setMovies(movieData);
       };
       fetchMovies();
     }, []);
       
     return (
        <div className='movies-container'>
            <form className="search" htmlFor='search-input'onSubmit={handleSubmit}>
                <input className="search-input" type="text" 
                    placeholder='type movie title' value={search}
                    onchange={handleSearch}/>
                    <button type="submit">Search</button>  
            </form>
            {movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())).map(movie => <MovieCard key={movie.id} movie={movie}/>)}

        </div>
          );
     };
        
     const MovieCard = ({ movie }) => {
        return (
            <div className='movie-card'>
                <img src={`${IMG_URL}/original/${movie.poster_path}`} alt={movie.title} />
                <p>{movie.title}</p>
            </div>
        );
    };
    
  
  export default Search;


