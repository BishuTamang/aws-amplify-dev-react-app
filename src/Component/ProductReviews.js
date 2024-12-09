import React from 'react';
import './css/ProductReviews.css'; // Importing the CSS for styling

const ProductReviews = ({ reviews }) => (
  <div className="product-reviews">
    <h2 className="reviews-title">Customer Reviews</h2>
    {reviews.map((review, index) => (
      <div key={index} className="review">
        <h4 className="review-user">{review.user}</h4>
        <p className="review-comment">{review.comment}</p>
        <p className="review-rating">
          <strong>Rating: {review.rating}/5</strong>
        </p>
      </div>
    ))}
  </div>
);

export default ProductReviews;
