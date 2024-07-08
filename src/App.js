// src/App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
