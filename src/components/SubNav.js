// // Nav
// import {React, useState} from "react";
// // import {  NavLink } from "react-router-dom";
// import "../styles/App.css";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import TopRatedMovies from "./TopRatedMovies";
// import UpcomingMovies from "./UpcomingMovies";
// import NowPlayingMovies from "./NowPlayingMovies";
// import PopularMovies from "./PopularMovies";



// const SubNav = () => {
//     const {selectedTab, setSelectedTab} = useState(0);


//   return (
  
//     <div>
        
//             <Tabs selectedIndex={selectedTab} onSelect={setSelectedTab}>
//                 <TabList>
//                     <Tab>Top Rated</Tab>
//                     <Tab>Popular</Tab>
//                     <Tab>NOw Playing</Tab>
//                     <Tab>Upcoming</Tab>
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
//       {/* <nav className="subnav">
//           <ul>
//               <li>
//                 <NavLink to="#toprated" activeClassName="active" className='categories'>Top Rated</NavLink>
//               </li>

//               <li>
//                 <NavLink to="#popular" activeClassName="active" className='categories'>Popular</NavLink>
//               </li>

//               <li>
//                 <NavLink to="#nowplaying" activeClassName="active" className='categories'> Now Playing</NavLink>
//               </li>

//               <li>
//                 <NavLink to="#upcoming" activeClassName="active" className='categories'> Upcoming</NavLink>
//               </li>
//           </ul>
//       </nav> */}
      
//     </div>
    

//   );
// }

//  export default SubNav;