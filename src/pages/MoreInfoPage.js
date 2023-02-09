import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, API_KEY, IMG_PATH} from '../globals/globals';
// import PageHome from "../pages/PageHome";

const SingleMovie = () => {
    const [movie, setMovie] = useState([]);
    const [moviePoster, setMoviePoster] = useState([]);
    // const [movieInfo, setMovieInfo] = useState({});
   
    let {id} = useParams();
    id = id * 1; 

    // fetching movie details
    useEffect(() => {
        const fetchMovie = async() => {
            const fetchedResult = await fetch(`${BASE_URL}${id}?${API_KEY}`);
            let data = await fetchedResult.json();
            setMovie(data);
        };
        fetchMovie();
    },[id]);


    return(
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
    )

}
