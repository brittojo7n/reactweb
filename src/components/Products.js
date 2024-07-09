// src/components/Products.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost/hstore/hstore.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col text-center">
          <h1 className="display-4">Our Products</h1>
        </div>
      </div>
      <div className="row">
        {products.length === 0 && <p className="text-center">No products available</p>}
        {products.map((product) => (
          <div key={product.product_id} className="col-md-4 mb-3">
            <Link to={`/product/${product.product_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card
                imgSrc={product.product_img}
                title={product.product_name}
                text={product.product_desc}
                price={product.product_price}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
