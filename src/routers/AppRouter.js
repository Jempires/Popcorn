//react bootstrap for form on login page
//implemment later
//import 'bootstrap/dist/css/bootstrap.min.css';


// AppRouter
// Router Components


import Header from "../components/Header";

import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";

import PageFavs from "../pages/PageFavs";

import PageMoreInfo from "../pages/PageMoreInfo";

import PageNotFound from "../pages/PageNotFound";

// import SingleMovie from './SingleMovie';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

function AppRouter() {
  
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <main>
            <Routes>
             
              <Route path="/about" element={<PageAbout />} />
              <Route path="/" element={<PageHome />} />
              <Route path="/moreInfo/:id" element={<PageMoreInfo />} />
              <Route path="/favs" element={<PageFavs />} />
              <Route path="*" element={<PageNotFound />} />
    


            </Routes>
          </main>
        </div>
      </Router>

      
    );
  }
  
  export default AppRouter;
  