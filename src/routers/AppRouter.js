//react bootstrap for form on login page
//implemment later
//import 'bootstrap/dist/css/bootstrap.min.css';


// AppRouter
// Router Components
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "../components/Header";
//import Footer from "../components/Footer";



// Pages
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
// import PageLanding from "../pages/PageLanding";
import PageFavs from "../pages/PageFavs";
// import PageLogin from "../pages/PageLogin";
import PageMoreInfo from "../pages/PageMoreInfo";
//import PageRegister from "../pages/PageRegister";
import PageNotFound from "../pages/PageNotFound";
import TopRatedMovies from "../components/TopRatedMovies";
import UpcomingMovies from "../components/UpcomingMovies";
import NowPlayingMovies from "../components/NowPlayingMovies";
import PopularMovies from "../components/PopularMovies";

function AppRouter() {
  
    return (
      <BrowserRouter>
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
          

            {/* Sub Naviagtion routes */}
              {/* <Route path="/toprated"><TopRatedMovies/></Route>
              <Route path="/upcoming"><UpcomingMovies/></Route>
              <Route path="/nowplaying"><NowPlayingMovies /></Route>
              <Route path="/popular"><PopularMovies/></Route>
 */}





            </Routes>
          </main>
          {/* implememnt but hide unless mobile size */}
          {/* <Footer /> */}
        </div>
      </BrowserRouter>

      
    );
  }
  
  export default AppRouter;
  