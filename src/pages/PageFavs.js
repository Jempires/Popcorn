// // Imports
// // import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux'; 
// import MovieCard from '../components/MovieCard';
// // import { useState } from 'react';
// import heart from '../components/images/heart.png';
// Imports
//  import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux'; 
// import MovieCard from '../components/MovieCard';
// // import { useState } from 'react';
// import heart from '../components/images/heart.png';

// function PageFavs () {

//    const favorites = useSelector((state) => state.favorites.favItems);
    
//     return (
//         <section className="page-favs">
//             <h2 className='favs-title'>Favorites Movies</h2>
//             {favorites.length < 1 ? 
//             <div className="error-msg">
//                 <p className='favs-error'>Sorry! There are currently no movies on your favorites list.

//                 You may browse through movies on the home page and click the <img  src={heart} alt=''/> to add movies to your list.</p>
//             </div> : 
//                 <div id='movie-card'>
//                     {favorites.map((movie)=> {
//                         return <MovieCard key={movie.id} movie={movie} />
//                     }
//                     )}
//                 </div>
//       } 

// // export default PageFavs;
