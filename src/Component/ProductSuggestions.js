import React from 'react';
import products from '../data/productsData';
import './css/ProductSuggestions.css';
 // Import the products data

const ProductSuggestions = ({ suggestions }) => {
  // Filter out the product data based on the IDs in the 'suggestions' array
  const suggestedProducts = products.filter((product) =>
    suggestions.includes(product.id) // Match the 'suggestions' IDs with the products data
  );

  return (
    <div className="product-suggestions">
      <h2>Product Suggestions</h2>
      <div className="product-list">
        {suggestedProducts.map((product, index) => (
          <div key={index} className="product">
            <img src={product.images[0]} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSuggestions;
