import React from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {
  const products = [
    { id: 1, name: "Wireless Headphones", image: "/images/headphone1.jpg" },
    { id: 2, name: "Bluetooth Speaker", image: "/images/speaker.jpg" },
    { id: 3, name: "Travel Case", image: "/images/case.jpg" },
  ];

  return (
    <div className="cards">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;
