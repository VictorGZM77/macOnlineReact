import React from 'react';
import '/src/components/Card/Card.css';

const Card = ({ image, title, description }) => {
  return (
    <div className="Carta">
      <img src={image} alt={title} className="imagenCartas" />
      <h3 className="tituloCartas">{title}</h3>
      <p className="descripcionCartas">{description}</p>
    </div>
  );
};

export default Card;
