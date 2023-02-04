//styling for home page
import '../styles/Home.css';

import React from 'react';
import TopRatedMovies from '../components/TopRatedMovies';
import PopularMovies from '../components/PopularMovies';
import NowPlayingMovies from '../components/NowPlayingMovies';
import UpcomingMovies from '../components/UpcomingMovies';



function Home() {
  return (
    <div>
      <div className="grid-container">
        {/* <body className="home-page"> */}
   

                <div className="item2">
                    <h2>Top Rated</h2>
                    <br></br>
                  <TopRatedMovies /> 
                </div>
                   
                <div className="item3" >
                    <h2 className='h2tester'>Popular</h2>
                 
                    <br></br>
                    <PopularMovies/>
                </div>

          
                <div className="item4">
                    <h2>Now Playing</h2>
                    <br></br>
                    <NowPlayingMovies/> 
                </div>

          
            
                <div className="item5">
                    <h2>Upcoming</h2>
                    <br></br>
                    <UpcomingMovies/>
                   
                </div>

            

        {/* </body> */}
      </div>
    </div>
  );
}


export default Home;

