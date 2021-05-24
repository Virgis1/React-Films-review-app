import React from 'react';
import '../components/Header.css';


function Header() {


  return (
    <>
    <div className="header">

      <div className="header__left" >
        <img className="header__logo" src="https://images.template.net/wp-content/uploads/2017/01/30181306/Film-Production-Company-Logo.jpg" alt="" />
        <h1>FILMŲ PERŽIŪROS</h1>

        
      </div>
      <div className="header__right">
        <div className="header__info">
          <p>Tavo taškai</p>
          <p>76</p>
        </div>
        <div className="header__profile">
          <p>Virginijus</p>
          <p>zemaitisvirginijus@gmail.com</p>
        </div>
      </div>
      
    </div>
    
      
    </>
  )
}

export default Header;
