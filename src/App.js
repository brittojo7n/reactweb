// src/App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';

const products = [
  {
    imgSrc: "https://rukminim2.flixcart.com/image/850/1000/kgzg8sw0/internal-hard-drive/p/g/z/wd-1-tb-hard-disk-original-imafx3kdtz2fckp8.jpeg?q=90&crop=false",
    title: "1TB Hard Drive",
    text: "Reliable storage solution with 7200 RPM for fast read/write speeds.",
    price: "50"
  },
  {
    imgSrc: "https://www.crucial.in/content/dam/crucial/ssd-products/t700/images/web/crucial-T700-ssd-dual-dynamic-hero-image.psd.transform/small-png/img.png",
    title: "500GB SSD",
    text: "High-speed SSD with fast data transfer rates and durability.",
    price: "70"
  },
  {
    imgSrc: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/da1af1ee70f13e7ed3b1ef66090d5cfa/large.jpg",
    title: "16GB DDR4 RAM",
    text: "High-performance memory module for enhanced multitasking.",
    price: "80"
  }
];

const App = () => {
  return (
    <div className="App">
      <h1 className="text-capitalize text-center">Computer Hardware Store</h1>
      <Navbar />
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <Card
              key={index}
              imgSrc={product.imgSrc}
              title={product.title}
              text={product.text}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
