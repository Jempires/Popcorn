//styling for home page
import '../styles/Landing.css';
import React from "react";
import admitOne from '../components/images/admitOne.jpg';
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";


 

//import Nav from '../components/Nav'


function Landing({title}) {

    return (
    <Wrapper includeNav={false}>
        <main className="landing-page">
             
            <h1>{title}</h1>
           
           
            <div className="admit-btn">
                <Link to="/home">
                    <button><img src={admitOne} alt=''/> </button>
                </Link>
            </div>
        </main>
    </Wrapper>
    );
}

export default Landing;