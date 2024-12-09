// const ProductDetails = ({ product }) => (
//   <div className="product-details">
//     <h1>{product.name}</h1>
//     <p>{product.description}</p>
//     <h3>${product.price}</h3>
//   </div>
// );

// export default ProductDetails;



import React from 'react';
import './css/ProductDetails.css'; // Importing the CSS for styling

const ProductDetails = ({ product }) => (
  <div className="product-details">
    <h1 className="product-name">{product.name}</h1>
    <p className="product-description">{product.description}</p>
    <p className="product-price">
      Price: <span>${product.price}</span>
    </p>

    {/* Add to Cart and Save for Later Buttons */}
    <div className="product-actions">
      <button className="btn add-to-cart">Add to Cart</button>
      <button className="btn save-for-later">Save for Later</button>
    </div>
  </div>
);

export default ProductDetails;