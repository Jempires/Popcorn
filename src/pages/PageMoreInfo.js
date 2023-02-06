//PageMoreInfo.js

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, API_KEY, IMG_PATH} from '../globals/globals';
// import PageHome from "../pages/PageHome";

const SingleMovie = () => {
    const [movieInfo, setMovieInfo] = useState({});
    const [moviePoster, setMoviePoster] = useState({});
   
    let {id} = useParams();
    id = id * 1; 

    const endPointPoster = `${IMG_PATH}`;

    // fetching movie details
    useEffect(() => {
        const fetchMovie = async() => {
            const fetchedResult = await fetch(`${BASE_URL}${id}?${API_KEY}`);
            // console.log(fetchedResult);
            let data = await fetchedResult.json();
            // console.log(data);
            setMovieInfo(data);
        };
        fetchMovie();
    },[id]);

    return(
        <div key={id}>
            <>{movie.poster_path ? (
                <img src={`${IMG_PATH}`} alt="" />
                '<h1></h1>'

        </div>

        // <div>
        //     { movieInfo.title ? <h1>{movieInfo.title}</h1> : null }
        //     { movieInfo.overview ? <p>{movieInfo.overview}</p> : null }
        // </div>
    )

}
export default SingleMovie;