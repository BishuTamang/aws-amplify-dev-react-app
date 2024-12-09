import React from 'react';
import products from '../data/productsData'; // Import the products data
import './css/FrequentlyBoughtTogether.css'; 

const FrequentlyBoughtTogether = ({ products: boughtTogetherIds }) => {
  // Filter out the product data based on the IDs in the 'boughtTogether' array
  const boughtTogetherProducts = products.filter((product) =>
    boughtTogetherIds.includes(product.id) // Match the 'boughtTogether' IDs with the products data
  );

  return (
    <div className="frequently-bought-together">
      <h2>Frequently Bought Together</h2>
      <div className="product-list">
        {boughtTogetherProducts.map((product, index) => (
          <div key={index} className="product">
            <img src={product.images[0]} alt={product.name} className="product-image" />
            <p className="product-name">{product.name}</p>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyBoughtTogether;
