// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1 className="text-capitalize text-center">Welcome to Hardware Store</h1>
      <p className="text-center">Your one-stop shop for all your computer hardware needs!</p>
      <div className="text-center">
        <img
          src="https://cdn-icons-png.freepik.com/256/5204/5204365.png"
          alt="Hardware Store"
          style={{ width: '8%', borderRadius: '8px', margin: '20px 0' }}
        />
      </div>
      <div className="text-center">
        <h2>Check out our latest products</h2>
        <a href="/products" className="btn btn-primary">Shop Now</a>
      </div>
    </div>
  );
}

export default Home;
