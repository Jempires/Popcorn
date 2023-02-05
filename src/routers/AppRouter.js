//react bootstrap for form on login page
//implemment later
//import 'bootstrap/dist/css/bootstrap.min.css';


// AppRouter
// Router Components


// Components
import Header from "../components/Header";
//import Footer from "../components/Footer";
// import TopRatedMovies from "../components/TopRatedMovies";
// import UpcomingMovies from "../components/UpcomingMovies";
// import NowPlayingMovies from "../components/NowPlayingMovies";
// import PopularMovies from "../components/PopularMovies";
// import PageLogin from "../pages/PageLogin";
//import PageRegister from "../pages/PageRegister";
// import PageLanding from "../pages/PageLanding";


// Pages
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";

import PageFavs from "../pages/PageFavs";

import PageMoreInfo from "../pages/PageMoreInfo";

import PageNotFound from "../pages/PageNotFound";

// import SingleMovie from './SingleMovie';

import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import React from 'react';

function AppRouter() {
  
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <main>
            <Routes>
              {/* for features to be implemented later */}
              {/* <Route path="/register" element={<PageRegister />} /> */}
              {/* <Route path="/" exact element={<PageLanding />} /> */}
               {/* <Route path="/login" element={<PageLogin />} /> */}
             
             {/* Main Navigation routes */}
             
              <Route path="/about" element={<PageAbout />} />
              <Route path="/home" element={<PageHome />} />
              <Route path="/favs" element={<PageFavs />} />
              <Route path="/moreInfo" element={<PageMoreInfo />} />
              <Route path="*" element={<PageNotFound />} />
            
              {/* <Switch>
                <Route exact path="/" component={PageHome} />
                <Route path="/movie/:id" component={SingleMovie} />
              </Switch>
         */}



            </Routes>
          </main>
        </div>
      </Router>

      
    );
  }
  
  export default AppRouter;
  