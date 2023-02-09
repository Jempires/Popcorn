// Imports
// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import MovieCard from '../components/MovieCard';
// import { useState } from 'react';

function PageFavs () {

    const favorites = useSelector((state) => state.favorites.favItems);
    
    return (
        <section className="page-favs">
            <h2>Favorites Movies</h2>
            {favorites.length < 1 ? 
            <div className="error-msg">
                <p>Sorry! There are currently no movies on your favorites list.</p>
                <br></br>
                <p>You may browse through movies on the home page and add movies to your list.</p>
            </div> : 
                <div id='movie-card'>
                    {favorites.map((movie)=> {
                        return <MovieCard key={movie.id} movie={movie} />
                    }
                    )}
                </div>
            };

        </section>
    );
};

export default PageFavs;