import React from 'react';
import ProductCard from '/src/components/card/Card';
import '/src/components/Pdestacadas/Pdestacadas.css';

const products = [
    {
      title: 'Destacado de la semana',
      description: 'Audífonos ultra cómodos con la mejor cancelación de ruido del mercado.',
      image: '/src/images/ddls.png', 
    },
    {
      title: 'New Arrival',
      description: 'El sonido Marshall está de vuelta! Lleva la potencia del Kilburn II a donde quiera que vayas.',
      image: '/src/images/na.png', 
    },
    {
      title: 'Destacado del mes',
      description: 'Lo mejor para tus equipos: la línea Native Union - estuches, cables, bases de escritorio y más.',
      image: '/src/images/dlm.png',
    },
    {
      title: 'Bose QuietComfort 45',
      description: 'Los audífonos QuietComfort 45 de Bose son ultra cómodos, cuentan con la mejor cancelación de ruido.',
      image: '/src/images/b.png',
    },
    {
      title: 'iPhone for Life',
      description: 'Renueva. Ahorra. Repite. Cambia tu iPhone cada 2 años y ahorra hasta un 30% con iPhone.',
      image: '/src/images/i.png',
    },
    {
      title: 'Oportunidades únicas',
      description: 'Acá encontrarás algunos tesoros, joyitas en Mac, con un precio muy especial, que no podrás dejar pasar.',
      image: '/src/images/o.jpg',
    },
  


  ];
  
  function FeaturedProducts() {
    return (
      <div className="featured-productos-container">
        <h2>Productos Destacados</h2>
        <div className="featured-productos-g">
          {products.map((product, index) => (
            <div className="producto-card-g" key={index}> 
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default FeaturedProducts;
