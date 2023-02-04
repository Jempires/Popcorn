// //styling for home page
// import '../styles/App.css';
// // import {NavLink } from "react-router-dom";
// import {React, useState} from 'react';
// import TopRatedMovies from '../components/TopRatedMovies';
// import PopularMovies from '../components/PopularMovies';
// import NowPlayingMovies from '../components/NowPlayingMovies';
// import UpcomingMovies from '../components/UpcomingMovies';
// // import SubNav  from '../components/SubNav';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


// function Home() {
//       const {selectedTab, setSelectedTab} = useState(0);


//   return (
  
//     <div>
        
//             <Tabs selectedIndex={selectedTab} onSelect={setSelectedTab}>
//                 <TabList>
//                     <Tab className={'submenu'}>Top Rated</Tab>
//                     <Tab className={'submenu'}>Popular</Tab>
//                     <Tab className={'submenu'}>Now Playing</Tab>
//                     <Tab className={'submenu'}>Upcoming</Tab>
//                 </TabList>

//                 <TabPanel>
//                     <h2>Top Rated</h2>
//                     <TopRatedMovies/>
//                 </TabPanel>

//                 <TabPanel>
//                     <h2>Popular</h2>
//                     <PopularMovies/>
//                 </TabPanel>

//                 <TabPanel>
//                     <h2>Now Playing</h2>
//                     <NowPlayingMovies/>
//                 </TabPanel>

//                 <TabPanel>
//                     <h2>Upcoming</h2>
//                     <UpcomingMovies/>
//                 </TabPanel>


//             </Tabs>
// {/* code to be used at a later date */}
//             {/*This is the main layout for displaying the movies in each category*/}
//             {/* <main>
//               <div className="grid-container">
        
//                   <div className="item2">
//                       <h2 id="toprated">Top Rated</h2>
//                       <br></br>
//                     <TopRatedMovies /> 
//                   </div>
                    
//                   <div className="item3" >
//                       <h2 id="popular">Popular</h2>
//                       <br></br>
//                       <PopularMovies/>
//                   </div>

//                   <div className="item4">
//                       <h2 id="nowplaying">Now Playing</h2>
//                       <br></br>
//                       <NowPlayingMovies/> 
//                   </div>

//                   <div className="item5">
//                       <h2 id="upcoming">Upcoming</h2>
//                       <br></br>
//                       <UpcomingMovies/>
//                   </div> 
//               </div> 
//             </main>         */}
    
//       </div>
//   );
// }


// export default Home;
