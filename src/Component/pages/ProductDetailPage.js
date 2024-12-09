// import React, { useEffect, useState } from 'react';
// import ProductImageGallery from '../ProductImageGallery';
// import ProductDetails from '../ProductDetails';
// import ProductReviews from '../ProductReviews';
// import ProductSuggestions from '../ProductSuggestions';
// import FrequentlyBoughtTogether from '../FrequentlyBoughtTogether';
// // import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetailPage = ({ productId }) => {
//   const [product, setProduct] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);
//   const [boughtTogether, setBoughtTogether] = useState([]);

//   useEffect(() => {
//     // Fetch product details
//     fetch(`/api/products/${productId}`)
//       .then(response => response.json())
//       .then(data => setProduct(data));

//     // Fetch reviews
//     fetch(`/api/products/${productId}/reviews`)
//       .then(response => response.json())
//       .then(data => setReviews(data));

//     // Fetch suggestions
//     fetch(`/api/products/${productId}/suggestions`)
//       .then(response => response.json())
//       .then(data => setSuggestions(data));

//     // Fetch frequently bought together
//     fetch(`/api/products/${productId}/bought-together`)
//       .then(response => response.json())
//       .then(data => setBoughtTogether(data));
//   }, [productId]);

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className="product-detail-page">
//       <div className="main-content">
//         <ProductImageGallery images={product.images} />
//         <ProductDetails product={product} />
//       </div>
//       <ProductReviews reviews={reviews} />
//       <FrequentlyBoughtTogether products={boughtTogether} />
//       <ProductSuggestions suggestions={suggestions} />
//     </div>
//   );
// };

// export default ProductDetailPage;




// const ProductDetailPage = () => {
//   const { productId } = useParams(); // Get product ID from URL
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Fetch product from static data
//     const foundProduct = products.find((p) => p.id === productId);
//     setProduct(foundProduct || null);
//   }, [productId]);

//   if (!product) return <div>Product not found</div>;

//   return (
//     <div className="product-detail-page">
//       <div className="main-content">
//         <ProductImageGallery images={product.images} />
//         <ProductDetails product={product} />
//       </div>
//       <ProductReviews reviews={product.reviews} />
//       <FrequentlyBoughtTogether products={product.boughtTogether} />
//       <ProductSuggestions suggestions={product.suggestions} />
//     </div>
//   );
// };


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import products from '../../data/productsData'; // Adjust the path to where your static data is located
import ProductImageGallery from '../ProductImageGallery';
import ProductDetails from '../ProductDetails';
import ProductReviews from '../ProductReviews';
import ProductSuggestions from '../ProductSuggestions';
import FrequentlyBoughtTogether from '../FrequentlyBoughtTogether';


// const ProductDetailPage = () => {
//   // const { productId } = useParams(); // 
//   const { id } = useParams();
//   console.log('gggg', id, useParams())
//   const [product, setProduct] = useState(null);


//   useEffect(() => {
//     console.log('Product ID from URL:', id, products);
//     const foundProduct = products.find((p) => p.id === String(id));
//     // const foundProduct = products.find((p) => p.id === String(productId)); 
//     // const foundProduct = products.find((p) => p.id === parseInt(id));
//     // Make sure both are strings
//     console.log('Found Product:', foundProduct, product);
//     setProduct(foundProduct || null);
//   }, [id]);

//   if (!product) return <div>Product not found</div>;

//   return (
//     <div className="product-detail-page">
//       <div className="main-content">
//         {/* <ProductImageGallery images={product.images} /> */}
//         <ProductDetails product={product} />
//       </div>
//       <ProductReviews reviews={product.reviews} />
//       <FrequentlyBoughtTogether products={product.boughtTogether} />
//       <ProductSuggestions suggestions={product.suggestions} />
//     </div>
//   );
// };

// export default ProductDetailPage;



const ProductDetailPage = () => {
  const { id } = useParams();  // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product in the static data based on the product ID
    const foundProduct = products.find((p) => p.id === String(id));  // Ensure id comparison is correct
    setProduct(foundProduct || null);  // Set the found product or null if not found
  }, [id]);  // Dependency on 'id' ensures it updates when the URL changes
  console.log('this is it', product,id)
  if (!product) {
    return <div>Product not found</div>;  // Display a fallback message if the product is not found
  }

  return (
    <div className="product-detail-page">
      <div className="main-content">
        {/* <ProductImageGallery images={product.images} />   */}
        <ProductDetails product={product} />
      </div>
      <ProductReviews reviews={product.reviews} />
      <FrequentlyBoughtTogether products={product.boughtTogether} />
      <ProductSuggestions suggestions={product.suggestions} />
    </div>
  );
};

export default ProductDetailPage;



// export default ProductDetailPage;
