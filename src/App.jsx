import React from 'react';
import Navbar from '/src/components/Navbar/Navbar.jsx';
import Footer from '/src/components/Footer/Footer.jsx';
import PromoBanner from '/src/components/PromoBanner/PromoBanner.jsx'; 
import FeaturedProducts from '/src/components/Pdestacadas/Pdestacadas.jsx'; 
import '/src/App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <PromoBanner /> 
      <main>
       
        <FeaturedProducts />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
