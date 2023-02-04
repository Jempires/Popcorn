import React from "react";
//styling for home page
import '../styles/About.css';
import moviechairhome  from '../components/images/moviechairhome.jpg';
import heart from '../components/images/heart.png';

// import abouticon from '../components/images/abouticon.jpg';
// import { Link } from "react-router-dom";

//import Nav from '../components/Nav'


function Landing({title}) {

    return (
        <div className="about-page">
            <body>
                <p className="about">
                    Welcome to Popcorn Movies! The site for movie lovers who are looking to checkout the current: Top Rated, Popular, Now Playing, and Upcoming movies!<br></br><br></br>You can hover over any movie poster to get a quick overview of the movie which will also allow you to save it to your favourites list for later or click the 'More Info' button to see full movie details!<br></br><br></br>  
                    Your favourites list can be editied any time by clicking  <img  src={heart} alt=''/> on the navigation menu. Clicking the heart on a poster will turn red when its been added to your list and vice versa to remove a movie.
                    <br></br>
                    <br></br>
                    Now pop your popcorn, grab your snacks and get ready for the show!
                    {/* {/* <br></br> */}
                    <br></br>
                    <div           className="moviechair">
                        <img  src={moviechairhome} alt=''/>
                    </div>
                    <br></br>
                    <br></br>
                </p>
               
            </body>
        </div>
    );
}

export default Landing;