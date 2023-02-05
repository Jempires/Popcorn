//PageHome.js



//styling for home page
import '../styles/App.css';
import {React, useState} from 'react';
import TopRatedMovies from '../components/TopRatedMovies';
import PopularMovies from '../components/PopularMovies';
import NowPlayingMovies from '../components/NowPlayingMovies';
import UpcomingMovies from '../components/UpcomingMovies';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import {BASE_URL, API_KEY} from "../globals/globals";
// import SingleMovie from "../pages/PageMoreInfo";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Home(props) {
    const [movie, setMovie] = useState({});
    const {selectedTab, setSelectedTab} = useState(0);
    
    // const history = useHistory();
    let {movie_id} =useParams();
    


    const handleClick = async (id) => {
        const fetchedResult = await fetch(`${BASE_URL}/${movie_id}?api_key=${API_KEY}`);
        let movie = await fetchedResult.json();
        setMovie(movie);
        // history.push(`/movie/${id}`, { movie: data });
      };
      
    

  return (
    <div>
        <div>
            <Link to={`/movie/${movie_id}`}>
                <button onClick={() => handleClick(movie_id)}>See More</button>
            </Link>
        </div>
   
        
            <Tabs selectedIndex={selectedTab} onSelect={setSelectedTab}>
                <TabList>
                    <Tab className={'submenu'}>Top Rated</Tab>
                    <Tab className={'submenu'}>Popular</Tab>
                    <Tab className={'submenu'}>Now Playing</Tab>
                    <Tab className={'submenu'}>Upcoming</Tab>
                </TabList>

                <TabPanel>
                    <h2>Top Rated</h2>
                    <TopRatedMovies/>
                </TabPanel>

                <TabPanel>
                    <h2>Popular</h2>
                    <PopularMovies/>
                </TabPanel>

                <TabPanel>
                    <h2>Now Playing</h2>
                    <NowPlayingMovies/>
                </TabPanel>

                <TabPanel>
                    <h2>Upcoming</h2>
                    <UpcomingMovies/>
                </TabPanel>


            </Tabs>
        ;      
                {/*          
                {props.movies.map((movie) => (
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <Link to={`/movie/${movie.id}`}>
                            <button onClick={() => handleClick(movie.id)}>More info</button>
                        </Link> */}
            </div>
            
    //   ))}
    // </div>
  );
};


export default Home;

