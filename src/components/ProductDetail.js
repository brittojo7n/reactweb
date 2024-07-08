// src/components/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('http://localhost/hstore/hstore.php');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const products = await response.json();
        const product = products.find(p => p.product_id === productId);
        setProduct(product);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const addToCart = async () => {
    try {
      const response = await fetch('http://localhost/hstore/add_to_cart.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: productId }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error adding to cart:', error);
      setMessage('Error adding to cart.');
    }
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="container">
      <h1>{product.product_name}</h1>
      <img 
        src={product.product_img} 
        alt={product.product_name} 
        style={{ 
          width: '300px', 
          height: '300px', 
          display: 'block'
        }} 
      />
      <p>{product.product_desc}</p>
      <h3>${product.product_price}</h3>
      <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ProductDetail;
