import React from "react";
//styling for home page
import '../styles/App.css';
import tmdbLogo from '../components/images/tmdbLogo.svg';
import heart from '../components/images/heart.png';
import logo from '../components/images/logo.png';


// import abouticon from '../components/images/abouticon.jpg';
// import { Link } from "react-router-dom";

//import Nav from '../components/Nav'


function About({title}) {

    return (
        <div className="about-page">
            <body className="about-body">
                <p className="about">
                    Welcome to Popcorn Movies! The site for movie lovers who are looking to checkout the current: Top Rated, Popular, Now Playing, and Upcoming movies!You can hover over any movie poster to get a quick overview of the movie which will also allow you to save it to your favourites list for later or click the 'More Info' button to see full movie details! 
                    Your favourites list can be editied any time by clicking  <img  src={heart} alt=''/> on the navigation menu. Clicking the heart on a poster will turn red when its been added to your list and vice versa to remove a movie.
                    Now pop your popcorn, grab your snacks and get ready for the show!
                  
               
                    <p className="aboutLogo">Enjoy The Show!</p><img className="logo-about"  src={logo} alt=''/> 
                
                   
                    <p className="about-secondary">"This product uses the TMDb API but is not endorsed or certified by TMDb."<img className="tmdb"  src={tmdbLogo} alt=''/> 
                    </p>
                </p>
               
            </body>
        </div>
    );
}

export default About;