import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import NavBar from './Component/nav.js';
import Sliders from './Component/sliders.js';
import Cards from './Component/cards.js';
import Aboutus from './Component/aboutus.js';
import Activities from './Component/activities.js';
import Gallery from './Component/gallery.js';
import Form from './Component/form.js';
import Footer from './Component/footer.js';
import ProductDetailPage from './Component/pages/ProductDetailPage'; // Ensure the correct path

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Home page route */}
        <Route
          path="/"
          element={
            <>
              <Sliders />
              <Cards />
              <Aboutus />
              <Activities />
              <Gallery />
              <Form />
            </>
          }
        />
        
        {/* Product Detail Page Route */}
        <Route path="/product/:id" element={<ProductDetailPage />} />
        
        {/* Add more routes as needed */}
      </Routes>
      <Footer /> {/* Keep the Footer visible on all pages */}
    </Router>
  );
}

export default App;
