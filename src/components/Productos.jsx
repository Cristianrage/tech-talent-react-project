import React from 'react';
import '../styles/style.css';

function Productos() {
  const products = [
    { id: 1, name: 'Laptop', description: 'Potente laptop para trabajo.', price: 1200 },
    { id: 2, name: 'Smartphone', description: 'Teléfono de última generación.', price: 800 },
    { id: 3, name: 'Auriculares', description: 'Cancelación de ruido activa.', price: 150 },
  ];

  return (
    <section>
      <h2 className="product-list-title">Nuestros Productos</h2> 
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productos;