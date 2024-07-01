// src/components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products'; // Import the Products component to access the products array

const ProductDetail = () => {
  const { productId } = useParams();
  const products = Products.getProducts(); // Access the products array using a static method
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="container">
      <h1>{product.title}</h1>
      <img 
        src={product.imgSrc} 
        alt={product.title} 
        style={{ 
          width: '300px', 
          height: '300px', 
          objectFit: 'cover', 
          display: 'block', 
          margin: '0 auto 20px' 
        }} 
      />
      <p>{product.text}</p>
      <h3>${product.price}</h3>
    </div>
  );
}

export default ProductDetail;
