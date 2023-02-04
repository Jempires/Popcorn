import React from "react";
//styling for home page
//  import '../styles/Landing.css';
import Nav from "./Nav";
import logo  from '../components/images/logo.png';
import { Link } from "react-router-dom";

 
  


function Header({title}){
    return(
        <div className="item1">
            <header>
                <h1 className="header-title"> {title}<img className="header-logo" src={logo}   alt=''/></h1>
                <Nav className="topnav"/>
            </header>
        </div>
        
    );
}

Header.defaultProps = {
    title: "Popcorn Movies"
    
  
}
export default Header;