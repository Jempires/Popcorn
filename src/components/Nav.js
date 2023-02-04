// Nav
import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/main-nav.css";
import heart from '../components/images/heart.png';
import abouticon from '../components/images/abouticon.jpg';
import Search from "../components/Search";


const Nav = () => {


  function blur(e) {
    e.target.blur();
  }

  return (
    <header>
      <nav className="main-nav" onClick={blur}>
        <ul>
    

          <li>
            <NavLink to="/home" activeClassName="active" className="nav-link">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about" activeClassName="active" className="nav-link"><button type="submit"><img className="" src={abouticon}  style={{ width: '80px', height: '85px', border:'1px solid black' }} alt=''/></button>
            </NavLink>
          </li>

          <li>
            <NavLink to="/favs" activeClassName="active" className="nav-link"> <img className="" src={heart}  style={{ width: '80px', height: '85px', border:'1px solid black' }} alt=''/></NavLink>
          </li>  

          
            <Search/>
          
  
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
