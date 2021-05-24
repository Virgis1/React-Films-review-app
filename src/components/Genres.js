import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Genres.css'

function Genres() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <ul className={click ? "genres active" : "genres"}>
        <li className="genres-item">
          <NavLink  
              to="/comedy" 
              activeClassName="active" 
              className="genres-links"
              onClick={handleClick}
          >
              Komedija
          </NavLink> 
        </li>
        <li className="genres-item">
          <NavLink
              to="/horror" 
              activeClassName="active" 
              className="genres-links"
              onClick={handleClick}
          >
              Siaubo
          </NavLink> 
        </li>
        <li className="genres-item">
          <NavLink 
              to="/romance" 
              activeClassName="active" 
              className="genres-links"
              onClick={handleClick}
          >
              Romantiniai
          </NavLink> 
        </li>
        <li className="genres-item">
          <NavLink 
              to="/crime" 
              activeClassName="active" 
              className="genres-links"
              onClick={handleClick}
          >
              Kriminaliniai
          </NavLink> 
        </li>
      </ul> 
    </div>
  )
}

export default Genres
