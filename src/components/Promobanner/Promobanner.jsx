import React from 'react';
import '/src/components/Promobanner/Promobanner.css';
import iPhoneAirPodsImage from '/src/images/ip2.png';



const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="promo-contenido">
        <div className="promo-izquierda">
          <img src={iPhoneAirPodsImage} alt="iPhone and AirPods" className="promo-imagen" />
        </div>
        <div className="promo-derecha">
          <div className="promo-header">
            <span className="promo-logo">O17</span>
            <span className="promo-titulo">Audio Week</span>
          </div>
          <h1 className="promo-m-titulo">Aniversario MacOnline.com</h1>
          <p className="promo-descripcion">Descuentos para celebrar.<br/>Esta semana: Audio Week</p>
          <a href="https://www.maconline.com/t/oportunidades-unicas">
  <button className="promo-boton">Ver todas las ofertas</button>
</a>
          <p className="promo-exclusive">Exclusivo en MacOnline.com</p>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;