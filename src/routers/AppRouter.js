//react bootstrap for form on login page
import 'bootstrap/dist/css/bootstrap.min.css';
// AppRouter
// Router Components
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "../components/Header";
//import Footer from "../components/Footer";

//practice comment

// Pages
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
// import PageLanding from "../pages/PageLanding";
import PageFavs from "../pages/PageFavs";
// import PageLogin from "../pages/PageLogin";
import PageMoreInfo from "../pages/PageMoreInfo";
//import PageRegister from "../pages/PageRegister";
import PageNotFound from "../pages/PageNotFound";

function AppRouter() {
  
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <main>
            <Routes>
              {/* <Route path="/" exact element={<PageLanding />} /> */}
              <Route path="/about" element={<PageAbout />} />
              {/* <Route path="/login" element={<PageLogin />} /> */}
              <Route path="/home" element={<PageHome />} />
              {/* <Route path="/register" element={<PageRegister />} /> */}
              <Route path="/favs" element={<PageFavs />} />
              <Route path="/moreInfo" element={<PageMoreInfo />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>

      
    );
  }
  
  export default AppRouter;
  