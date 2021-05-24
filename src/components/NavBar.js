import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './NavBar.css';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SearchIcon from '@material-ui/icons/Search';

function NavBar() {

   const history = useHistory();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const searchClick = () => {
    history.push("/search");
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <HomeIcon/>
          </NavLink> 

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink 
                exact 
                to="/" 
                activeClassName="active" 
                className="nav-links"
                onClick={handleClick}
              >
                POPULIARIAUSI
              </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink exact
                to="/movies" 
                activeClassName="active" 
                className="nav-links"
                onClick={handleClick}
               >
                FILMAI
              </NavLink>
            </li> 
            <li className="nav-item">
              <NavLink exact
                to="/TvSeries"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                TV
              </NavLink>
            </li>
            <li className="nav-item">  
              <NavLink
                exact
                to="/animation"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ANIMACIJA
              </NavLink>
            </li>
          </ul>
          <div className="nav-addPoints">PILDYTI TAŠKUS</div>
          <div className="nav-center">
            <p>76</p>
            <p><PermIdentityIcon /></p>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <CloseIcon/> : <MenuIcon/>}
          </div>
        </div>
      </nav>
      <div className="search-container">
        <div className="search">
          <input className="search-input" placeholder="Filmų paieška"/>
          <div className="searchIconContainer" onClick={searchClick}>
            <SearchIcon />
          </div>
      </div>
      </div>
      
    </>
  )
}

export default NavBar
