// src/components/Products.js
import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const products = [
  {
    id: 1,
    imgSrc: "https://5.imimg.com/data5/SELLER/Default/2022/11/LZ/LC/QK/154920573/stkz5000400-seagate-one-touch-hard-disk-500x500.png",
    title: "10TB Hard Drive",
    text: "Reliable storage solution with 7200 RPM for fast read/write speeds.",
    price: "78"
  },
  {
    id: 2,
    imgSrc: "https://www.crucial.in/content/dam/crucial/ssd-products/t700/images/web/crucial-T700-ssd-dual-dynamic-hero-image.psd.transform/small-png/img.png",
    title: "500GB SSD",
    text: "High-speed SSD with fast data transfer rates and durability.",
    price: "70"
  },
  {
    id: 3,
    imgSrc: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/da1af1ee70f13e7ed3b1ef66090d5cfa/large.jpg",
    title: "16GB DDR4 RAM",
    text: "High-performance memory module for enhanced multitasking.",
    price: "80"
  },
  {
    id: 4,
    imgSrc: "https://drr622wuctn26.cloudfront.net/image/cache/catalog/graphics%20card/asus/rog-strix-rtx4080-16g-gaming/rog-strix-rtx4080-16g-gaming-image-main-600x600.png",
    title: "ROG STRIX RTX 4080 16GB VRAM",
    text: "High performance GPU GeForce RTX 4080 16GB VRAM.",
    price: "1209"
  }
];

const Products = () => {
  return (
    <div>
      <h1 className="text-capitalize text-center">Our Products</h1>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-3">
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card
                  imgSrc={product.imgSrc}
                  title={product.title}
                  text={product.text}
                  price={product.price}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Static method to get products
Products.getProducts = () => {
  return products;
}

export default Products;
