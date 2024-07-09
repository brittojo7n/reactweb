// src/components/Home.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  return (
    <div className="home container mt-5">
      <header className="jumbotron text-center bg-dark text-white p-5 rounded">
        <div className="mb-4">
          <img
            src="https://cdn-icons-png.freepik.com/256/5204/5204365.png"
            alt="Hardware Store"
            style={{ width: '15%', borderRadius: '8px', marginBottom: '20px' }}
          />
        </div>
        <h1 className="display-4">Welcome to Hardware Store</h1>
        <p className="lead">Your one-stop shop for all your computer hardware needs!</p>
        <a href="/products" className="btn btn-primary btn-lg mt-3">Shop Now</a>
      </header>

      <section className="my-5">
        <h2 className="text-center mb-4">Our Features</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <img src="https://via.placeholder.com/150" className="rounded-circle mb-3" alt="High Quality" />
            <h3>High Quality</h3>
            <p>We offer high-quality products from the best brands to ensure your satisfaction.</p>
          </div>
          <div className="col-md-4 text-center">
            <img src="https://via.placeholder.com/150" className="rounded-circle mb-3" alt="Affordable Prices" />
            <h3>Affordable Prices</h3>
            <p>Get the best deals on all your hardware needs with our competitive pricing.</p>
          </div>
          <div className="col-md-4 text-center">
            <img src="https://via.placeholder.com/150" className="rounded-circle mb-3" alt="Fast Delivery" />
            <h3>Fast Delivery</h3>
            <p>Enjoy fast and reliable delivery right to your doorstep with every order.</p>
          </div>
        </div>
      </section>

      <section className="my-5">
        <h2 className="text-center mb-4">Customer Reviews</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text">"Excellent service and high-quality products. Highly recommend!"</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Jane Smith</h5>
                <p className="card-text">"Great prices and fast delivery. Will definitely shop here again!"</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Mike Johnson</h5>
                <p className="card-text">"Wide selection of products and helpful customer support. Loved it!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
