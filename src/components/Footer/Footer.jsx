import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>Nosotros</h4>
          <ul>
            <li><a href="https://www.maconline.com/tiendas">Tiendas</a></li>
            <li><a href="https://www.maconline.com/preguntas_frecuentes">Preguntas Frecuentes</a></li>
            <li><a href="https://www.maconline.com/soporte-y-servicio-tecnico">Soporte</a></li>
            <li><a href="https://www.maconline.com/contacto">Consultas</a></li>
            <li><a href="https://www.maconline.com/condiciones">Términos y Condiciones</a></li>
            <li><a href="https://www.maconline.com/empleos">Trabaja con nosotros</a></li>
            <li><a href="https://sonda.ines.cl/maconline/formulario">Canal de Integridad</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Productos</h4>
          <ul>
            <li><a href="https://www.maconline.com/t/mac">Mac</a></li>
            <li><a href="https://www.maconline.com/t/ipad">iPad</a></li>
            <li><a href="https://www.maconline.com/t/iphone">iPhone</a></li>
            <li><a href="https://www.maconline.com/t/watch">Watch</a></li>
            <li><a href="https://www.maconline.com/t/apple-tv">Apple TV</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Medios de Pago</h4>
          <img src="/src/images/webpay.png" alt="Medios de Pago" />
        </div>
        <div className="footer-section footer-newsletter">
          <h4>Suscríbete a nuestro Newsletter</h4>
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <button>Suscribirme ahora</button>
          <img src="/src/images/adobe.png" alt="Adobe" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;