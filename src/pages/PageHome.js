//PageHome.js



//styling for home page
import '../styles/App.css';
// import {NavLink } from "react-router-dom";
import React, {useState} from 'react';
import TopRatedMovies from '../components/TopRatedMovies';
import PopularMovies from '../components/PopularMovies';
import NowPlayingMovies from '../components/NowPlayingMovies';
import UpcomingMovies from '../components/UpcomingMovies';
// import SubNav  from '../components/SubNav';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import {BASE_URL, API_KEY} from "../globals/globals";
// import SingleMovie from "../pages/PageMoreInfo";
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';


function PageHome() {
    
    const {selectedTab, setSelectedTab} = useState(0);

  
    

  return (
  
    <div>
       
   
        
            <Tabs selectedIndex={selectedTab} onSelect={setSelectedTab}>
                <TabList>
                    <Tab className={'submenu'}>Top Rated</Tab>
                    <Tab className={'submenu'}>Popular</Tab>
                    <Tab className={'submenu'}>Now Playing</Tab>
                    <Tab className={'submenu'}>Upcoming</Tab>
                </TabList>

                <TabPanel>
                    <h2>Popular</h2>
                    <PopularMovies/>
                </TabPanel>

                <TabPanel>
                    <h2>Top Rated</h2>
                    <TopRatedMovies/>
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
         
              

  
    </div>
  );
}


export default PageHome;

