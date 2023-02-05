//PageMoreInfo.js


import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, API_KEY,} from '../globals/globals';
// import PageHome from "../pages/PageHome";

const SingleMovie = () => {
    const [movieInfo, setMovieInfo] = useState({});
   
    let {movie_id} =useParams();

    // fetching movie details
    useEffect(() => {
        const fetchMovie = async() => {
            const fetchedResult = await fetch(`${BASE_URL}/${movie_id}?api_key=${API_KEY}`);
            // console.log(fetchedResult);
            let data = await fetchedResult.json();
            // console.log(data);
            setMovieInfo(data);
        };
        fetchMovie();
    },[movie_id]);


    return(
        <div>
            { movieInfo.title ? <h1>{movieInfo.title}</h1> : null }
            { movieInfo.overview ? <p>{movieInfo.overview}</p> : null }
        </div>
    )

}
export default SingleMovie;