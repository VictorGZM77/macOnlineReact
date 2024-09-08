import React from 'react';
import '/src/components/Navbar/Navbar.css';
import logoImage from '/src/images/LOGO.png';
import cartIcon from '/src/images/CARRITO.png';
import loginIcon from '/src/images/LOGIN.png';

const Navbar = () => { // creo funcion llamada Navbar
    return ( 
      <nav className="navbar">  

        <div className="navbar-izq">
          <img src={logoImage} alt="MacOnline" className="logo" />
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
          <li><a href="#watch-week">Watch Week</a></li>
            <li><a href="#mac">Mac</a></li>
            <li><a href="#ipad">iPad</a></li>
            <li><a href="#iphone">iPhone</a></li>
            <li><a href="#watch">Watch</a></li>
            <li><a href="#airpods">AirPods</a></li>
            <li><a href="#apple-tv">Apple TV</a></li>
            <li><a href="#musica">Música</a></li>
            <li><a href="#accesorios">Accesorios</a></li>
            <li><a href="#trade-in">Trade in</a></li>
            <li><a href="#gift-card">Gift Card</a></li>
            <li><a href="#soporte">Soporte</a></li>
            <li><a href="#tiendas">Tiendas</a></li>
          </ul>
        </div>
        <div className="navbar-der">
          <input type="text" placeholder="Ingresa tu búsqueda..." className="busqueda" />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
          <button className="icon-button">
            <img src={loginIcon} alt="Login" className="icon-image" />
          </button>
          <button className="icon-button">
            <img src={cartIcon} alt="Cart" className="icon-image" />
          </button>
        </div>
      </nav>
    );
};

export default Navbar;