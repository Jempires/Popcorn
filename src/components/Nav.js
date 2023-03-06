// Nav
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/App.css";
import heart from '../components/images/heart.png';
// import abouticon from '../components/images/abouticon.jpg';


const Nav = () => {


  function blur(e) {
    e.target.blur();
  }

  return (
  
        <header>
          <nav className="main-nav" onClick={blur}>
            <ul>
        

              <li>
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>

              <li>
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>

              <li>
                <NavLink to="/favs" className="nav-link"> <img className="favsPageImg" src={heart}   alt=''/></NavLink>
              </li>  
              {/* style={{ width: '80px', height: '85px', border:'1px solid black' }} */}
      
              {/* <li>
                <NavLink to="/toprated" activeClassName="active" className='categories'>Top Rated</NavLink>
              </li>

              <li>
                <NavLink to="/popular" activeClassName="active" className='categories'>Popular</NavLink>
              </li>

              <li>
                <NavLink to="/nowplaying" activeClassName="active" className='categories'> Now Playing</NavLink>
              </li>

              <li>
                <NavLink to="/upcoming" activeClassName="active" className='categories'> Upcoming</NavLink>
              </li> */}
              </ul>
          </nav>
        </header>
  );
}

export default Nav;
